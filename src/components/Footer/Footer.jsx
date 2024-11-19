import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#001324] text-white px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
    
        <div className="flex  flex-col items-center gap-8 mb-12">
        
          
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

          <div className="flex flex-row gap-52">
          <div className="flex gap-4">
            <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              <span className="sr-only">TikTok</span>
            </a>
          </div>
         
          
          <div className="flex flex-wrap justify-center gap-2">
            {['Visa', 'Mastercard', 'Apple Pay', 'Google Pay', 'PayPal'].map((method) => (
              <div key={method} className="bg-white rounded-md px-4 py-2">
                <img
                  src={`/placeholder.svg?height=30&width=50`}
                  alt={method}
                  width={50}
                  height={30}
                  className="h-[30px] w-auto"
                />
              </div>
            ))}
          </div>
        </div>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
         
          <div className="space-y-2">
            <a href="#" className="block hover:underline">Terms & Conditions</a>
            <a href="#" className="block hover:underline">Website Terms of Use</a>
            <a href="#" className="block hover:underline">Privacy Policy</a>
            <a href="#" className="block hover:underline">Cookie Policy</a>
            <a href="#" className="block hover:underline">Mobile Terms of Service</a>
          </div>

       
          <div>
            <h3 className="font-bold mb-2">Company Address</h3>
            <p>Unit 25, Eldon Way,</p>
            <p>Hockley, SS5 4AD</p>
          </div>

         
          <div>
            <h3 className="font-bold mb-4">Download our App</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="inline-block">
                <img
                  src="/placeholder.svg?height=40&width=120"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="h-[40px] w-auto"
                />
              </a>
              <a href="#" className="inline-block">
                <img
                  src="/placeholder.svg?height=40&width=120"
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  className="h-[40px] w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="space-y-4 text-sm text-gray-400">
          <p>© Prize Paradise. Company No: 12677065</p>
          <p className="font-bold">Must be 18 or over to enter.</p>
          <p>
            <a href="#" className="hover:underline">
              Competition Websites
            </a>
            by Zap
          </p>
        </div>
      </div>
    </footer>
  );
}
