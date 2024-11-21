import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import phone from '../../assets/images/mobile.webp'
const FreeGiveawaySection = () => {
  return (
    <div className="w-full max-w-[624px]">
      <div
        className=" bg-[#00A3FF] p-8 text-white"
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
              <AppleIcon/>
             <AndroidIcon/>
            </div>
          </div>

          <div className="flex ml-8 -mt-10 ">
            <div className=" w-48 h-64 mb-8  ">
              <img
                src={phone}
                alt="App screenshot showing a Mercedes giveaway"
                className="object-fill rounded-[2rem] border-[14px]  border-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeGiveawaySection;
