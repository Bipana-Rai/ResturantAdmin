
import QRcode from "react-qr-code"
interface DashboardProps{
    method:string
  }
function PaymentCard({method}:DashboardProps) {
  
  return (
    <div className=" w-[450px] pb-4  rounded-sm overflow-hidden bg-white flex items-center flex-col gap-5 ">
              <p className={`${method==="khalti"?"bg-purple-600":"bg-green-600"}text-2xl py-5   w-full text-center text-gray-50 font-semibold font-serif`}>Scan to pay</p>
              
            <div>
              <QRcode className="" value={`${method==="khalti"?"https://khalti.com/payment/merchant/abc123":"https://esewa.com.np/payment?merchantId=12345"}`}/>
              </div>
              <div className="h-20  w-full relative flex items-center justify-center">
              <img src={`${method==="khalti"?"/khalti.png":"/esewa1.png"}`} alt="" className="absolute   object-cover h-15 top-4 w-40"/>
              </div>
            </div>
  )
}

export default PaymentCard