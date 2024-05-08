import Image from "next/image";
import MindsetIcon from "../../../public/assets/mindset.svg";
import BullseyeIcon from "../../../public/assets/bullseye.svg";
import SmileIcon from "../../../public/assets/smile.svg";

export default function Topics() {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center gap-y-6 bg-gradient-to-r from-green-700 to-sell py-24">
      <h2 className="mb-11 w-full text-center font-inter text-4xl font-bold uppercase text-white">
        Principais tópicos do ebook
      </h2>
      <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
        <div className="flex h-fit w-fit max-w-80 flex-col items-center justify-center rounded-3xl border  border-solid border-[#ffffff22] bg-[#ffffff1a] p-8 shadow-xl backdrop-blur md:mb-0">
          <Image src={MindsetIcon} width={36} height={36} alt="mindset" />
          <h3 className="my-4 font-inter text-xl font-extrabold text-white">
            Mindset Vendedor
          </h3>
          <span className="text-center text-white">
            Construa os fundamentos cultivando autoconfiança e positividade,
            além de fortalecer a resiliência.
          </span>
        </div>
        <div className="flex h-fit w-fit max-w-80 flex-col items-center justify-center rounded-3xl border border-solid border-[#ffffff22] bg-[#ffffff1a] p-8 shadow-xl backdrop-blur md:mb-0">
          <Image src={SmileIcon} width={36} height={36} alt="mindset" />
          <h3 className="my-4 font-inter text-xl font-extrabold text-white">
            Inteligência Emocional
          </h3>
          <span className="text-center text-white">
            Descubra os maiores segredos dos vendedores ligado a estratégias
            emocionais e desenvolvimento de habilidades empáticas e comunicação
            eficaz.
          </span>
        </div>
        <div className="flex h-fit w-fit max-w-80 flex-col items-center justify-center rounded-3xl border  border-solid border-[#ffffff22] bg-[#ffffff1a] p-8 shadow-xl backdrop-blur md:mb-0">
          <Image src={BullseyeIcon} width={36} height={36} alt="mindset" />
          <h3 className="my-4 font-inter text-xl font-extrabold text-white">
            Táticas Infalíveis
          </h3>
          <span className="text-center text-white">
            Abra a mente para as soluções, não apenas no produto, sabendo fazer
            negociações persuasivas.
          </span>
        </div>
      </div>
    </div>
  );
}
