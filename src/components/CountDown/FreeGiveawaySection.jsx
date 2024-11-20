import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
const FreeGiveawaySection = () => {
  return (
    <div className="w-full max-w-[768px]">
      <div
        className="relative overflow-hidden bg-[#00A3FF] p-8 text-white"
        style={{
          clipPath: "polygon(0 0, 92% 0, 100% 8%, 100% 100%, 0 100%)",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-4">
            <h2 className="text-5xl font-bold leading-tight">
              Free Giveaways!
            </h2>
            <p className="text-2xl">Download our app to enter today</p>
            <div className="flex gap-4 pt-2">
              <img
                src="/placeholder.svg?height=60&width=200"
                alt="Download on the App Store"
                width={200}
                height={60}
                className="h-[60px] w-auto"
              />
              <img
                src="/placeholder.svg?height=60&width=200"
                alt="Get it on Google Play"
                width={200}
                height={60}
                className="h-[60px] w-auto"
              />
            </div>
          </div>

          <div className="flex-shrink-0 ml-8">
            <div className="relative w-[300px] h-[200px]">
              <img
                src="/placeholder.svg?height=800&width=400"
                alt="App screenshot showing a Mercedes giveaway"
                className="object-cover rounded-[2rem] border-[14px] border-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeGiveawaySection;
