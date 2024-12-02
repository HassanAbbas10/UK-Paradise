import { Link } from "react-router-dom"
import  {Instagram,Facebook} from "lucide-react"

import Visa from "@/assets/images/visa-logo.png"
import MasterCard from '@/assets/images/mastercard.png'
import GooglePay from '@/assets/images/google-pay.png'
import ApplePay from '@/assets/images/apple-pay.png'
import PayPal from "@/assets/images/paypal.png"
import Android from "@/assets/images/android-store.png"
import AppStore from "@/assets/images/app-store.png"

export default function Footer() {
  const paymentMethods = [
    { name: "Visa", logo: Visa },
    { name: "MasterCard", logo: MasterCard },
    { name: "GooglePay", logo: GooglePay },
    { name: "ApplePay", logo: ApplePay },
    { name: "PayPal", logo: PayPal },
  ];

  return (
    <footer className="bg-[#001324] text-white px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span className="font-bold text-[#00b67a]">Trustpilot</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-56">
            <div className="flex gap-2">
              <Link href="#" className="bg-blue-600 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="bg-blue-600 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="bg-blue-600 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-7">
              {paymentMethods.map((method) => (
                <div key={method.name} className="bg-white rounded-md px-2 py-1 md:px-4 md:py-2">
                  <img
                    src={method.logo}
                    alt={method.name}
                    width={70}
                    height={40}
                    className="h-[30px] w-[50px] md:h-[40px] md:w-[70px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-2">
            <Link href="#" className="block hover:underline">Terms & Conditions</Link>
            <Link href="#" className="block hover:underline">Website Terms of Use</Link>
            <Link href="#" className="block hover:underline">Privacy Policy</Link>
            <Link href="#" className="block hover:underline">Cookie Policy</Link>
            <Link href="#" className="block hover:underline">Mobile Terms of Service</Link>
          </div>

          <div>
            <h3 className="font-bold mb-2">Company Address</h3>
            <p>Unit 25, Eldon Way,</p>
            <p>Hockley, SS5 4AD</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Download our App</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#" className="inline-block">
                <img src={AppStore} alt="Download on the App Store" width={120} height={40} className="h-[40px] w-auto" />
              </Link>
              <Link href="#" className="inline-block">
                <img src={Android} alt="Get it on Google Play" width={120} height={40} className="h-[40px] w-auto" />
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-sm text-gray-400">
          <p>© Prize Paradise. Company No: 12677065</p>
          <p className="font-bold">Must be 18 or over to enter.</p>
          <p>
            <Link href="#" className="hover:underline">
              Competition Websites
            </Link>
            {" "}by Zap
          </p>
        </div>
      </div>
    </footer>
  );
}
