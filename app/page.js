import ContactForm from "../components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Banner from "@/components/Banner/Banner"
import Footer from "@/components/Footer/Footer";
import About from "@/components/About/About";
import Services from "@/components/Service/ServiceSection";
import Navbar from "@/components/Navbar/Navbar";
import WorkingProcess from "@/components/WorkingProcess/WorkingProcess";
import Divider from "@/components/Divider/Divider";
import Quote from "@/components/Quote/Quote";
import SplitBackground from "@/components/splitBackground/splitBackground";
import Reviews from "@/components/Reviews/Reviews";

export default function Home() {
  return (
    <main>
     <Navbar/>
    {/* <Hero/> */}
     <Quote/>
      <About/>
      <WorkingProcess/>
      <Services/>
      <Divider/>
      <Reviews/>
      <ContactForm />
      <Footer/>
    </main>
  );
}
