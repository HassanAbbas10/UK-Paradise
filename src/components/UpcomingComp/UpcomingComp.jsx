import  CashDrawCard  from "../CashDrawCard";



const UpcomingCompetitions = () =>{
  return (
    <>
    <div className="relative overflow-hidden bg-gray-100 p-10 md:p-16 md:ml-10 md:mt-[5rem]  ">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
        <span className="text-[20vw] font-bold text-gray-300">Competitions</span>
      </div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-6">Upcoming Competitions</h2>
        <div className="flex flex-wrap gap-3">
          {["VIEW ALL", "MONDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"].map((day) => (
            <button
              key={day}
              className="border-2 border-sky-400 rounded-full px-4 py-2 hover:bg-sky-100 hover:text-sky-700 transition-colors duration-200"
            >
              {day}
            </button>
          ))}
        </div>
      </div>
      <CashDrawCard/>
    </div>
    

    </>
  );
}
export default UpcomingCompetitions;