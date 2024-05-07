import Image from "next/image";
import MindsetIcon from "../../../public/assets/mindset.svg";
import BullseyeIcon from "../../../public/assets/bullseye.svg";
import SmileIcon from "../../../public/assets/smile.svg";

export default function Topics() {
  return (
    <div className="flex flex-col py-24 justify-center items-center w-full h-fit bg-gradient-to-r from-green-700 to-sell gap-y-6">
      <h2 className="w-full text-center text-4xl text-white font-bold font-inter mb-11 uppercase">
        Principais tópicos do ebook
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <div className="flex flex-col justify-center items-center max-w-80 w-fit h-fit bg-[#ffffff1a] shadow-xl  backdrop-blur border border-solid border-[#ffffff22] rounded-3xl md:mb-0 p-8">
          <Image src={MindsetIcon} width={36} height={36} alt="mindset" />
          <h3 className="text-xl font-inter text-white my-4 font-extrabold">
            Mindset Vendedor
          </h3>
          <span className="text-white text-center">
            Construa os fundamentos cultivando autoconfiança e positividade,
            além de fortalecer a resiliência.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center max-w-80 w-fit h-fit bg-[#ffffff1a] shadow-xl backdrop-blur border border-solid border-[#ffffff22] rounded-3xl md:mb-0 p-8">
          <Image src={SmileIcon} width={36} height={36} alt="mindset" />
          <h3 className="text-xl font-inter text-white my-4 font-extrabold">
            Inteligência Emocional
          </h3>
          <span className="text-white text-center">
            Descubra os maiores segredos dos vendedores ligado a estratégias
            emocionais e desenvolvimento de habilidades empáticas e comunicação
            eficaz.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center max-w-80 w-fit h-fit bg-[#ffffff1a] shadow-xl  backdrop-blur border border-solid border-[#ffffff22] rounded-3xl md:mb-0 p-8">
          <Image src={BullseyeIcon} width={36} height={36} alt="mindset" />
          <h3 className="text-xl font-inter text-white font-extrabold my-4">
            Táticas Infalíveis
          </h3>
          <span className="text-white text-center">
            Abra a mente para as soluções, não apenas no produto, sabendo fazer
            negociações persuasivas.
          </span>
        </div>
      </div>
    </div>
  );
}
