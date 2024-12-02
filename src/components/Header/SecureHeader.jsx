
import { CheckCircle } from 'lucide-react'
import visa from "@/assets/images/visa-logo.png"
import mastercard from '@/assets/images/mastercard.png'
import gpay from '@/assets/images/google-pay.png'
import applepay from '@/assets/images/apple-pay.png'
import paypal from "@/assets/images/paypal.png"

export default function SecureHeader() {
  return (
    <header className="bg-gray-900 text-white p-2 sm:p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <CheckCircle className="text-green-500" size={20} />
          <span className="text-xs sm:text-sm font-medium">All draws are guaranteed</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <span className="text-xs sm:text-sm font-medium">Secure Payments</span>
          <div className="flex space-x-1 sm:space-x-2">
            <img
              src={visa}
              alt="Visa"
              width={32}
              height={20}
              className="h-4 w-6 sm:h-5 sm:w-8 rounded-sm bg-white object-contain"
            />
            <img
              src={mastercard}
              alt="Mastercard"
              width={32}
              height={20}
              className="h-4 w-6 sm:h-5 sm:w-8 rounded-sm bg-white object-contain"
            />
            <img
              src={applepay}
              alt="Apple Pay"
              width={32}
              height={20}
              className="h-4 w-6 sm:h-5 sm:w-8 rounded-sm bg-white object-contain"
            />
            <img
              src={gpay}
              alt="Google Pay"
              width={32}
              height={20}
              className="h-4 w-6 sm:h-5 sm:w-8 rounded-sm bg-white object-contain"
            />
            <img
              src={paypal}
              alt="PayPal"
              width={32}
              height={20}
              className="h-4 w-6 sm:h-5 sm:w-8 rounded-sm bg-white object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

