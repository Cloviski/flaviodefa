"use client"

import { useEffect } from 'react';
import Ebook from "./components/ebook";
import AboutMe from "./components/aboutme";
import Buy from "./components/buy";
import Footer from "./components/footer";
import FAQ from "./components/faq";
import Topics from "./components/topics";
import Audience from "./components/audience";

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://d335luupugsy2.cloudfront.net/js/loader-scripts/3864883d-8038-4215-8d87-1091a4fe9be7-loader.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Ebook />
      <Topics />
      <Audience />
      <Buy />
      <AboutMe />
      <FAQ />
      <Footer />
    </main>
  );
}


