import Image from "next/image";
import Link from "next/link";
import Ebook from "./components/ebook";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Ebook />
      <div className="relative flex justify-center items-center w-full bg-gradient-to-b h-[800px] bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="w-1/4 h-5/6 bg-[#ffffff1a] backdrop-blur shadow-2xl border border-solid border-[#ffffff22] rounded-3xl ml-52">
          <div className="p-8">
            <span className="text-sell">Conheça o escritor</span>
            <h2 className="text-4xl font-handwritten text-white my-4">
              Flávio Sousa
            </h2>
            <p className="text-neutral-400 mb-4">
              Meu nome é Flávio Ribeiro de Sousa, nascido em Salvador, Bahia.
              Comecei minha jornada como vendedor de rua e, eventualmente,
              trabalhei como frentista em um posto de gasolina. Descobri minha
              paixão pela música percussiva e viajei com a banda juvenil Olodum.
            </p>
            <p className="text-neutral-400 mb-4">
              Tornei-me pai aos 19 anos e, devido à incerteza da música como
              carreira, empreendi no ramo de alimentação, embora tenha
              enfrentado desafios. Mais tarde, entrei na indústria de peças
              automotivas como motorista, visando me tornar vendedor. Após seis
              anos de esforço, alcancei meu objetivo e vendi mais de 30 milhões
              em vendas, adquirindo experiência valiosa.
            </p>
            <p className="text-neutral-400">
              Em 2021, descobri o mercado digital e me apaixonei pela escala que
              oferece. Atualmente, ensino outras pessoas a vender transformação
              e se destacar no mercado digital, compartilhando meu conhecimento
              e experiência. Minha jornada é um testemunho de determinação e
              paixão que levaram a transformações significativas em minha vida.
            </p>
          </div>
        </div>
        <Image
          className=""
          width={800}
          height={0}
          src="/assets/flaviob&w.png"
          alt="flavio"
        />
      </div>
    </main>
  );
}
