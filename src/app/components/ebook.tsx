import Image from "next/image";
import Link from "next/link";

export default function Ebook() {
  return (
    <div
      className="relative h-screen w-screen bg-cover"
      style={{ backgroundImage: "url('/assets/sales.jpg')" }}
    >
      <div className="absolute inset-0 backdrop-blur-lg"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black to-green-700 opacity-80"></div>
      <div className="absolute flex h-screen w-screen flex-col items-center justify-center md:flex-row md:gap-x-40">
        <div className="flex w-min flex-col gap-8">
          <div className="flex w-96 items-center gap-3">
            <Image
              width={96}
              height={96}
              src="/assets/brain.png"
              alt="cerebro logo"
            />
            <h2 className="font-handwritten text-4xl text-sell">
              Flávio Sousa
            </h2>
          </div>
          <h1 className="w-full text-3xl font-semibold text-white ">
            Desvende os segredos do sucesso em vendas escrito por um veterano
            com mais de 10 anos de experiência, explorando diversas áreas do
            negócio para alcançar a alta performance.
          </h1>
          <Link href="https://pay.kiwify.com.br/SDaIhL6">
            <button className="w-full rounded-l-full rounded-r-full bg-gradient-to-r from-green-700 to-sell px-6 py-3 font-sans font-bold uppercase text-white transition-all hover:scale-105">
              Quero ser de alta performance
            </button>
          </Link>
        </div>
        <Image
          className="hidden rounded-3xl shadow-2xl shadow-green-900 md:block"
          width={325}
          height={1}
          src="/assets/seller.jpg"
          alt="pdf"
        />
      </div>
    </div>
  );
}
