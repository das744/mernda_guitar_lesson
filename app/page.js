import ContactForm from "../components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Services from "@/components/Services";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Header/>
      <h1>Welcome to Our Website</h1>
      <About/>
      <Services/>
      <ContactForm />
      <Footer/>
    </main>
  );
}
