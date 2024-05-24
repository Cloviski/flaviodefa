import Image from "next/image";
import Link from "next/link";

export default function Buy() {
  return (
    <div className="relative flex h-fit w-full flex-col items-center bg-gray-200 p-11">
      <h2 className="mb-11 w-full text-center font-inter text-4xl font-bold uppercase text-green-800">
        Garanta Sua Cópia
      </h2>
      <div className="flex size-full flex-col justify-center gap-12 md:flex-row md:gap-x-12">
        <div className="flex h-fit flex-col items-center rounded-lg border border-solid border-green-500 bg-gradient-to-br from-green-950 to-green-700 p-8 shadow-2xl shadow-neutral-950 backdrop-blur">
          <Image
            className="mb-6 rounded-lg"
            width={150}
            height={1}
            src="/assets/pdf3d.png"
            alt="pdf"
          />
          <h3 className="text-xl font-bold text-white">EBOOK</h3>
          <span className="my-2 text-xl text-white">Por apenas</span>
          <span className="font-inter text-5xl md:text-6xl font-extrabold text-white">
            R$27,00
          </span>
          <Link href="https://pay.kiwify.com.br/SDaIhL6">
            <button className="mt-6 w-full rounded-l-full rounded-r-full bg-gradient-to-r from-green-700 to-sell px-6 py-3 font-sans font-bold uppercase text-white transition-all hover:scale-105">
              Quero o meu agora
            </button>
          </Link>
        </div>
        <div className="flex h-fit flex-col items-center rounded-lg border border-solid border-green-500 bg-gradient-to-br from-green-950 to-green-700 p-8 shadow-2xl shadow-neutral-950 backdrop-blur">
          <Image
            className="mb-6 rounded-lg"
            width={150}
            height={1}
            src="/assets/brain.png"
            alt="pdf"
          />
          <h3 className="text-xl font-bold text-white">MENTORIA</h3>
          <span className="my-2 text-xl text-white">Por apenas</span>
          <span className="font-inter text-5xl md:text-6xl font-extrabold text-white">
            R$997,00
          </span>
          <Link href="https://pay.kiwify.com.br/SDaIhL6">
            <button className="mt-6 w-full rounded-l-full rounded-r-full bg-gradient-to-r from-green-700 to-sell px-6 py-3 font-sans font-bold uppercase text-white transition-all hover:scale-105">
              Quero ser mentorado
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-11 flex flex-col items-center justify-center gap-y-6">
        <div className="flex flex-col items-center justify-center rounded-full bg-gradient-to-t from-[#15803cc2] to-[#7ed956] px-16 py-6 shadow-2xl">
          <span className="font font-sans text-9xl font-extrabold text-white">
            7
          </span>
          <span className="text-center text-xl font-bold uppercase text-white">
            DIAS
          </span>
        </div>
        <span className="rounded border border-green-600 bg-gradient-to-br from-[#15803ca9] to-[#7dd956b2] p-6 text-center text-xl font-bold uppercase text-white">
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
