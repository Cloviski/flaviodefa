import Ebook from "./components/ebook";
import AboutMe from "./components/aboutme";
import Buy from "./components/buy";
import Footer from "./components/footer";
import FAQ from "./components/faq";
import Topics from "./components/topics";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Ebook />
      <Topics />
      <Buy />
      <AboutMe />
      <FAQ />
      <Footer />
    </main>
  );
}
