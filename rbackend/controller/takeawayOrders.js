const express = require("express");
const router = express.Router();
const takeawayModel = require("../models/takeawayModel");
const crypto = require("crypto");

// eSewa configuration
const esewaConfig = {
  merchantId: process.env.ESEWA_MERCHANT_ID,
  successUrl: process.env.ESEWA_SUCCESS_URL,
  failureUrl: process.env.ESEWA_FAILURE_URL,
  secretKey: process.env.ESEWA_SECRET_KEY,
  paymentUrl: "https://rc-epay.esewa.com.np/api/epay/main/v2/form"
};

// Generate HMAC SHA256 hash for eSewa
function generateHmacSha256Hash(data, secret) {
  if (!data || !secret) {
    throw new Error("Both data and secret are required to generate a hash.");
  }

  const hash = crypto
    .createHmac("sha256", secret)
    .update(data)
    .digest("base64");

  return hash;
}

router.post("/takeaway", async (req, res) => {
  const { name, number, cartItems, totalAmount, status } = req.body;
  console.log("take",req.body)
  console.log("byee")

  try {
    // Create order
    const orderId = "ORD" + Date.now();
    const newOrder = new takeawayModel({
      orderId,
      name,
      number,
      cartItems,
      totalAmount,
      status,
    });

    // Save order to database
    await newOrder.save();

    // Prepare eSewa payment data
    const paymentData = {
      amount: totalAmount,
      failure_url: esewaConfig.failureUrl,
      product_delivery_charge: "0",
      product_service_charge: "0",
      product_code: esewaConfig.merchantId,
      signed_field_names: "total_amount,transaction_uuid,product_code",
      success_url: esewaConfig.successUrl,
      tax_amount: "0",
      total_amount: totalAmount,
      transaction_uuid: orderId,
    };

    // Generate signature
    const data = `total_amount=${paymentData.total_amount},transaction_uuid=${paymentData.transaction_uuid},product_code=${paymentData.product_code}`;
    const signature = generateHmacSha256Hash(data, esewaConfig.secretKey);

    // Add signature to payment data
    paymentData.signature = signature;

    // Make eSewa payment request
    const response = await axios.post(esewaConfig.paymentUrl, null, {
      params: paymentData,
    });

    const reqPayment = JSON.parse(response.request.res.responseUrl);
    
    // Return payment URL to client
    res.status(200).json({
      url: reqPayment,
      orderId: orderId,
      amount: totalAmount,
    });
  } catch (error) {
    console.error("Error while creating takeaway order:", error);
    res.status(500).json({ 
      message: "Failed to create takeaway order",
      error: error.message 
    });
  }
});

module.exports = router;