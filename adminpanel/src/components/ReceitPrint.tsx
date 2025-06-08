// components/ReceiptPrint.tsx
import  { forwardRef } from "react";

const ReceiptPrint = forwardRef(({ data }: { data: any }, ref) => {
  return (
    <div ref={ref} style={{ width: "80mm", padding: "10px", fontSize: "12px" }}>
      <h2 style={{ textAlign: "center" }}>Restaurant Receipt</h2>
      <p><strong>Table:</strong> #{data?.tableNumber}</p>
      <p><strong>Date:</strong> {new Date().toLocaleString()}</p>
      <hr />
      <div>
        {data?.cartItems?.map((item, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{item.quantity}x {item.dishName}</span>
            <span>${(item.quantity * item.dishPrice).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <hr />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>Total:</strong>
        <span>${data?.totalAmount.toFixed(2)}</span>
      </div>
      <p style={{ textAlign: "center", marginTop: "10px" }}>Thank you!</p>
    </div>
  );
});

export default ReceiptPrint;
