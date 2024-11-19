import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Pick a prize",
      description: "First, create an account. Then, select a competition you'd like to enter in our Competitions.",
      icon: "cursor-pointer",
    },
    {
      number: "2",
      title: "Select your tickets",
      description: "Select the amount of tickets you'd like. Then answer the question.",
      icon: "tag",
    },
    {
      number: "3",
      title: "Checkout",
      description: "In your basket, select checkout where you will have to log into your account and complete payment. For Free entry, please see Terms & Conditions.",
      icon: "shopping-cart",
    },
    {
      number: "4",
      title: "Winner Picked",
      description: "You will receive email confirmation and will be able to see your active competitions in your account on our website. The live draw date will be specified on our website.",
      icon: "award",
    },
  ];

  return (
    <div className="bg-[#001324] px-4 py-12 md:py-16 lg:py-20 mb-14">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">How it works</h2>
        <div className="grid md:grid-cols-2 gap-6 -mb-32 ">
          {steps.map((step) => (
            <Card key={step.number} className="bg-[#1e88e5] text-white border-none">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="relative">
                    <Star className="w-12 h-12 text-[#001324] fill-[#001324]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Star className="w-8 h-8 text-[#001324] fill-[#001324]" data-icon={step.icon} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-sm">STEP {step.number}</div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-white/90 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
