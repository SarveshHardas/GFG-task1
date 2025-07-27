import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pyhack from "@/components/Pyhack";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Page() {
  return(
      <main className="px-[6%] lg:px-[12%] py-7">
        <Navbar/>
        <div className="space-y-[100px] sm:space-y-[200px] md:space-y-[250px] lg:space-y-[275px]">
          <Hero/>
          <Features/>
          <Pyhack/>
          <FAQ/>
          <Footer/>
        </div>
      </main>
  )
}