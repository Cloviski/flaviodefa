import Image from "next/image";
import Ebook from "./components/ebook";
import AboutMe from "./components/aboutme";
import Link from "next/link";
import Buy from "./components/buy";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Ebook />
      <AboutMe />
      <Buy />
      <Footer />
    </main>
  );
}
