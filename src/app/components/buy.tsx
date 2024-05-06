import Image from "next/image";
import Link from "next/link";

export default function Buy() {
  return (
    <div className="relative flex flex-col items-center w-full h-fit bg-gray-200 p-11">
      
      <h2 className="w-full text-center text-4xl text-neutral-900 font-bold font-inter mb-11 uppercase">
        Garanta Sua <span className="text-sell">Cópia</span>
      </h2>
      <div className="flex md:flex-row flex-col h-full justify-center w-full gap-12 md:gap-36">
        <div className="flex flex-col h-fit rounded-lg items-center p-8 bg-gradient-to-br from-green-950 to-green-700 backdrop-blur shadow-2xl shadow-neutral-950 border border-solid border-green-500">
          <Image
            className="mb-6 rounded-lg"
            width={150}
            height={1}
            src="/assets/pdf3d.png"
            alt="pdf"
          />
          <h3 className="text-white text-xl font-bold">EBOOK</h3>
          <span className="text-white text-xl my-2">Por apenas</span>
          <span className="text-white text-6xl font-extrabold font-inter">R$27,00</span>
          <Link href="https://pay.kiwify.com.br/SDaIhL6">
            <button className="w-full rounded-l-full rounded-r-full bg-gradient-to-r from-green-700 to-sell px-6 py-3 font-sans font-bold uppercase text-white mt-6 hover:scale-105 transition-all">
              Quero o meu agora
            </button>
          </Link>
        </div>
        <div className="flex flex-col rounded-lg items-center h-fit p-8 bg-gradient-to-br from-green-950 to-green-700 backdrop-blur shadow-2xl shadow-neutral-950 border border-solid border-green-500">
          <Image
            className="mb-6 rounded-lg"
            width={150}
            height={1}
            src="/assets/brain.png"
            alt="pdf"
          />
          <h3 className="text-white text-xl font-bold">MENTORIA</h3>
          <span className="text-white text-xl my-2">Por apenas</span>
          <span className="text-white text-6xl font-extrabold font-inter">R$997,00</span>
          <Link href="https://pay.kiwify.com.br/SDaIhL6">
            <button className="w-full rounded-l-full rounded-r-full bg-gradient-to-r from-green-700 to-sell px-6 py-3 font-sans font-bold uppercase text-white mt-6 hover:scale-105 transition-all">
              Quero ser mentorado
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
