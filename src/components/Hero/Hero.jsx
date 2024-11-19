const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[35rem]"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url('https://static.independent.co.uk/2023/05/01/23/SNOOKER%20World%20%2022312504.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col items-start ml-28 justify-center text-center h-full text-white px-4">
        <h2 className=" text-lg md:text-xl lg:text-2xl flex items-start font-medium mb-2">
          Over £110,000 Worth Of Instant Wins...
        </h2>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          Be Christmas Ready! 400 Instant Wins!
        </h1>

        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full flex items-center">
            ENTER NOW
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
