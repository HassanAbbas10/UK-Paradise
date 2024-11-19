import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function CustomerReview() {
  return (
    <div className="px-4 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Customer Reviews</h1>
      
      
      <div className="flex flex-col items-center mb-12 space-y-4">
        <div className="flex items-center gap-2">
          <Star className="w-6 h-6 text-[#00b67a] fill-[#00b67a]" />
          <span className="font-bold">Trustpilot</span>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-12 h-12 bg-[#00b67a] flex items-center justify-center">
              <Star className="w-8 h-8 text-white fill-white" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="font-bold">TrustScore 5.0</span>
          <span className="text-gray-600">|</span>
          <span className="font-bold">2,401 reviews</span>
        </div>
        <button className="border border-[#00b67a] text-[#00b67a] px-4 py-2 rounded flex items-center gap-2">
          <span>Review us on</span>
          <Star className="w-4 h-4" />
          <span className="font-bold">Trustpilot</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="relative overflow-hidden bg-gray-50">
          <CardContent className="p-6">
            <div className="absolute w-16 h-16 bg-blue-500 rotate-45 -right-8 -top-8" />
            <div className="absolute w-16 h-16 bg-blue-500 rotate-45 -left-8 -bottom-8" />
            <h2 className="text-2xl font-bold mb-2">Prizes delivered by Dan</h2>
            <p className="text-gray-600 mb-4">
              We offer free delivery throughout the UK and aim to get all prizes delivered within 5 days of winning.
            </p>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden bg-[#001324] text-white">
          <CardContent className="p-6">
            <div className="absolute top-4 right-4">
              <div className="bg-[#00b67a] text-white text-sm font-bold py-2 px-4 rounded-full rotate-12">
                Free winners on every draw!
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Coloured Wheel Draw</h2>
            <p className="text-gray-200">
              Coming soon - a unique way of doing our live draws, with free winners on every live draw.
            </p>
            <div className="absolute bottom-0 right-0 w-32 h-32">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 rounded-full border-4 border-white opacity-20" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
