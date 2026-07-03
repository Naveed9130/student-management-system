import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/landing/Hero";
import Features from "../../components/landing/Features";
import StatCard from "../../components/cards/StatCard";
import { GraduationCap } from "lucide-react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />

      <div className="max-w-7xl mx-auto py-20 px-6">
        <StatCard
          title="Students"
          value="12,560"
          icon={<GraduationCap size={28} />}
          color="bg-blue-600"
        />
      </div>
    </>
  );
};

export default Home;