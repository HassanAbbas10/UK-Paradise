import CountdownTimer from "@/components/CountDown/CountDownTimer";
import FreeGiveawaySection from "@/components/CountDown/FreeGiveawaySection";
import CustomerReview from "@/components/CustomerReview/CustomerReview";
import FaqComp from "@/components/FAQ/FaqComp";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import StatisticsBar from "@/components/StaticBar/StatisticsBar";
import UpcomingCompetitions from "@/components/UpcomingComp/UpcomingComp";

const Home = () => {
  return (
    <>
      <Hero />
      <StatisticsBar />
      <div className="flex justify-around items-center gap-2 mx-12 mt-5">
        <FreeGiveawaySection />
        <CountdownTimer />
      </div>
      <UpcomingCompetitions />
      <HowItWorks/>
      <CustomerReview/>
      <FaqComp/>
    </>
  );
};

export default Home;
