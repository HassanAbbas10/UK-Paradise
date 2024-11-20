import { CheckCircle } from "lucide-react";
import visa from "../../assets/images/visa-logo.png"
import mastercard from '../../assets/images/mastercard.png'
import gpay from '../../assets/images/google-pay.png'
import applepay from '../../assets/images/apple-pay.png'
import paypal from "../../assets/images/paypal.png"
export default function SecureHeader() {
  return (
    <header className="flex justify-between items-center bg-gray-900 text-white p-4">
      <div className="flex items-center space-x-2">
        <CheckCircle className="text-green-500" size={24} />
        <span className="text-sm font-medium">All draws are guaranteed</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium">Secure Payments</span>
        <div className="flex space-x-2">
          <img
            src={visa}
            alt="Visa"
            className="h-5 w-8 rounded-sm bg-white object-contain"
          />
          <img
            src={mastercard}
            alt="Mastercard"
            className="h-5 w-8 rounded-sm bg-white object-contain "
          />
          <img
            src={applepay}
            alt="Apple Pay"
            className="h-5 w-8 rounded-sm bg-white object-contain "
          />
          <img
            src={gpay}
            alt="Google Pay"
            className="h-5 w-8 rounded-sm bg-white object-contain "
          />
          <img
            src={paypal}
            alt="PayPal"
            className="h-5 w-8 rounded-sm bg-white object-contain "
          />
        </div>
      </div>
    </header>
  );
}
