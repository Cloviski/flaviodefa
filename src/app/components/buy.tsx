import Image from "next/image";
import Link from "next/link";

export default function Buy() {
  return (
    <div className="relative flex flex-col items-center w-full h-fit bg-gray-200 p-11">
      <h2 className="w-full text-center text-4xl text-green-800 font-bold font-inter mb-11 uppercase">
        Garanta Sua Cópia
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
          <span className="text-white text-6xl font-extrabold font-inter">
            R$27,00
          </span>
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
          <span className="text-white text-6xl font-extrabold font-inter">
            R$997,00
          </span>
          <Link href="https://pay.kiwify.com.br/SDaIhL6">
            <button className="w-full rounded-l-full rounded-r-full bg-gradient-to-r from-green-700 to-sell px-6 py-3 font-sans font-bold uppercase text-white mt-6 hover:scale-105 transition-all">
              Quero ser mentorado
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-11 gap-y-6">
        <div className="flex flex-col justify-center items-center px-16 py-6 rounded-full shadow-2xl bg-gradient-to-t from-[#15803cc2] to-[#7ed956]">
          <span className="text-9xl font font-sans font-extrabold text-white">
            7
          </span>
          <span className="uppercase text-xl font-bold text-white text-center">
            DIAS
          </span>
        </div>
        <span className="p-6 bg-gradient-to-br from-[#15803ca9] to-[#7dd956b2] font-bold border border-green-600 rounded uppercase text-xl text-white text-center">
          Tenha 7 dias de garantia ou seu dinheiro de volta
        </span>
      </div>
    </div>
  );
}

/**
 *
 *
 *         <span className="text-9xl font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#15803cc2] to-[#7ed956] rounded-full">
 */
