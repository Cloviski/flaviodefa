import Image from "next/image";

export default function Audience() {
  return (
    <div className="relative flex h-fit w-full flex-col items-center bg-gray-200 px-11 py-24">
      <h2 className="mb-11 w-full text-center font-inter text-4xl font-bold uppercase text-green-800">
        PRA QUEM É O EBOOK VENDEDOR DE ALTA PERFORMANCE
      </h2>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="relative max-h-[430px] max-w-[300px] rounded-2xl bg-green-700">
          <Image
            className="max-h-[430px] rounded-2xl opacity-25 blur-sm grayscale"
            src="/assets/compass.jpg"
            width={300}
            height={300}
            alt="bússola"
          />
          <span className="absolute bottom-10 p-6 text-center text-xl font-bold text-white">
            Você que se sente perdido e quer dar início ao empreendedorismo
          </span>
        </div>
        <div className="relative max-h-[430px] max-w-[300px] rounded-2xl bg-green-700">
          <Image
            className="max-h-[430px] rounded-2xl opacity-25 blur-sm grayscale"
            src="/assets/failure.jpg"
            width={300}
            height={300}
            alt=""
          />
          <span className="absolute bottom-10 p-6 text-center text-xl font-bold text-white">
            Você que lida com o medo do fracasso
          </span>
        </div>
        <div className="relative max-h-[430px] max-w-[300px] rounded-2xl bg-green-700">
          <Image
            className="max-h-[430px] rounded-2xl opacity-25 blur-sm grayscale"
            src="/assets/statistics.jpg"
            width={300}
            height={300}
            alt=""
          />
          <span className="absolute bottom-10 p-6 text-center text-xl font-bold text-white">
            Você que depara com rendimento abaixo do esperado e metas
            inatingíveis
          </span>
        </div>
      </div>
    </div>
  );
}
