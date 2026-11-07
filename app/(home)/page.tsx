import "./home.css";
import SiteHeader from "@/components/home/site-header";
import Hero from "@/components/home/hero";
import Problems from "@/components/home/problems";
import SelectedWork from "@/components/home/selected-work";
import HowIHelp from "@/components/home/how-i-help";
import Offers from "@/components/home/offers";
import About from "@/components/home/about";
import Faq from "@/components/home/faq";
import ClosingCta from "@/components/home/closing-cta";
import SiteFooter from "@/components/home/site-footer";

export default function Home() {
  return (
    <div className="pa-home">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        <div className="container">
          <Hero />
          <Problems />
          <SelectedWork />
          <HowIHelp />
          <Offers />
          <About />
          <Faq />
          <ClosingCta />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
