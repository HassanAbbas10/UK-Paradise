
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
const FreeGiveawaySection = () => {
  return (
    <div className="relative w-[40rem] bg-gradient-to-r from-blue-400 to-blue-600 py-8 flex justify-between items-center">
      <div className="px-8 flex flex-col justify-center text-white space-y-4">
        <h2 className="text-2xl font-bold">Free Giveaways!</h2>
        <p className="text-lg">Download our app to enter today</p>
        <div className="flex space-x-4">
          <a href="#" className="flex items-center bg-black px-4 py-2 rounded-md">
            <AppleIcon className="w-6 h-6 mr-2 text-white" />
            <div>
              <p className="text-sm text-white">Download on the</p>
              <p className="text-md font-bold text-white">App Store</p>
            </div>
          </a>
          <a href="#" className="flex items-center bg-black px-4 py-2 rounded-md">
            <AndroidIcon className="w-6 h-6 mr-2 text-white" />
            <div>
              <p className="text-sm text-white">Download for</p>
              <p className="text-md font-bold text-white">Android</p>
            </div>
          </a>
        </div>
      </div>
      <div className="absolute right-8 hidden md:block">
        <img
          src="/path-to-your-phone-image.png"
          alt="Mobile app"
          className="w-60 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default FreeGiveawaySection;
