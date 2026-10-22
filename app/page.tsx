import { Footer } from "../components/site/Footer";
import { Hero } from "../components/site/Hero";
import { IntroLoader } from "../components/site/IntroLoader";
import { Navigation } from "../components/site/Navigation";
import { PortfolioSections } from "../components/site/PortfolioSections";
import { ScrollDirector } from "../components/site/ScrollDirector";

export default function HomePage() {
  // Keep the story content server-rendered; hydrate only motion and navigation controls.
  return (
    <>
      <IntroLoader />
      <ScrollDirector />
      <Navigation />
      <main id="main">
        <Hero />
        <PortfolioSections />
      </main>
      <Footer />
    </>
  );
}
