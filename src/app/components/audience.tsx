import Image from "next/image";

export default function Audience() {
  return (
    <div className="relative flex flex-col items-center w-full h-fit bg-gray-200 px-11 py-24">
      <h2 className="w-full text-center text-4xl text-green-800 font-bold font-inter mb-11 uppercase">
        PRA QUEM É O EBOOK VENDEDOR DE ALTA PERFORMANCE
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative max-w-[300px] max-h-[430px] bg-green-700 rounded-2xl">
          <Image
            className="opacity-25 rounded-2xl blur-sm grayscale max-h-[430px]"
            src="/assets/compass.jpg"
            width={300}
            height={300}
            alt="bússola"
          />
          <span className="absolute font-bold text-white text-center text-xl bottom-10 p-6">
            Você que se sente perdido e quer dar início ao empreendedorismo
          </span>
        </div>
        <div className="relative max-w-[300px] max-h-[430px] bg-green-700 rounded-2xl">
          <Image
            className="opacity-25 rounded-2xl blur-sm grayscale max-h-[430px]"
            src="/assets/failure.jpg"
            width={300}
            height={300}
            alt=""
          />
          <span className="absolute font-bold text-white text-center text-xl bottom-10 p-6">
            Você que lida com o medo do fracasso
          </span>
        </div>
        <div className="relative max-w-[300px] max-h-[430px] bg-green-700 rounded-2xl">
          <Image
            className="opacity-25 rounded-2xl blur-sm grayscale max-h-[430px]"
            src="/assets/statistics.jpg"
            width={300}
            height={300}
            alt=""
          />
          <span className="absolute font-bold text-white text-center text-xl bottom-10 p-6">
            Você que depara com rendimento abaixo do esperado e metas
            inatingíveis
          </span>
        </div>
      </div>
    </div>
  );
}
