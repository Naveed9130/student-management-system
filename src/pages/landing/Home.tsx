import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/landing/Hero";
import Features from "../../components/landing/Features";
import DashboardPreview from "../../components/landing/DashboardPreview";
import Stats from "../../components/landing/Stats";
import Testimonials from "../../components/landing/Testimonials";
import CallToAction from "../../components/landing/CallToAction";
import Footer from "../../components/layout/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
       <Stats />
       <Testimonials />
        <CallToAction />
         <Footer />
    </>
  );
};

export default Home;