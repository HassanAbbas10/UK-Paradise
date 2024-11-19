import { CheckCircle } from "lucide-react";

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
            src="https://www.bing.com/images/search?view=detailV2&ccid=ygZGQKeZ&id=56CE34C1BB35DDA92316E53FE06D819781D4B80D&thid=OIP.ygZGQKeZ0aBwHS7e7wbJVgHaDA&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.ca064640a799d1a0701d2edeef06c956%3frik%3dDbjUgZeBbeA%252f5Q%26riu%3dhttp%253a%252f%252fpngimg.com%252fuploads%252fvisa%252fvisa_PNG4.png%26ehk%3dATUfwvEJGMksqdq8OWkAStPLbvzZ4jrtt%252fqLuop0KV0%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1648&expw=4060&q=visa+logo+links&simid=608022328959909450&FORM=IRPRST&ck=66110A4B720595379B262A4C114AF3C1&selectedIndex=5&itb=1"
            alt="Visa"
            className="h-5 w-8"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_logo.svg"
            alt="Mastercard"
            className="h-5 w-8"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Apple_Pay_logo.svg"
            alt="Apple Pay"
            className="h-5 w-8"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Google_Pay_logo.svg"
            alt="Google Pay"
            className="h-5 w-8"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cb/PayPal_logo.svg"
            alt="PayPal"
            className="h-5 w-8"
          />
        </div>
      </div>
    </header>
  );
}
