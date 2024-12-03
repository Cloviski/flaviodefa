import type { Metadata } from "next";
import { Inter, Open_Sans, Sacramento } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sacramento",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "VENDEDOR DE ALTA PERFORMACE",
  description: "Venda de Ebook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sacramento.variable} ${open_sans.variable} ${inter.variable}`}
    >
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '410391054682934'); 
              fbq('track', 'PageView');
            `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=410391054682934&ev=PageView&noscript=1"
        />
      </noscript>
      <body>{children}</body>
    </html>
  );
}
