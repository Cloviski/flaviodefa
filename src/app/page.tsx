import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
    <div
      className="relative h-screen w-screen bg-cover"
      style={{ backgroundImage: "url('/assets/sales.jpg')" }}
    >
      <div className="absolute inset-0 backdrop-blur-lg"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black to-green-700 opacity-80"></div>
      <div className="absolute flex flex-col md:flex-row h-screen w-screen items-center justify-center gap-x-40">
        <div className="flex w-1/4 flex-col gap-8">
          <div className="flex w-96 items-center gap-3">
            <Image width={96} height={96} src="/assets/brain.png" alt="cerebro logo" />
            <h2 className="text-4xl font-handwritten text-sell">
              Flávio Sousa
            </h2>
          </div>
          <h1 className="text-3xl font-bold text-white">
            Desvende os segredos do sucesso em vendas escrito por um veterano
            com mais de 10 anos de experiência, explorando diversas áreas do
            negócio para alcançar a alta performance.
          </h1>
          <Link href="https://pay.kiwify.com.br/SDaIhL6">
            <button className="w-full rounded-l-full rounded-r-full bg-gradient-to-r from-green-700 to-sell px-6 py-3 font-sans font-extrabold uppercase text-white">
              Quero ser de alta performance
            </button>
          </Link>
            
        </div>
        <img className="h-1/2 rounded-3xl shadow-2xl shadow-green-900" src="/assets/seller.jpg" alt="pdf" />
      </div>
    </div>
    </main>
  );
}