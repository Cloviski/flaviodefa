import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="relative flex h-fit w-full items-center justify-evenly bg-gray-300 bg-gradient-to-b p-12">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-transparent via-[#052e1666] to-green-900 md:bg-gradient-to-bl"></div>
      <div className="z-20 mb-96 h-fit w-[400px] rounded-3xl border border-solid border-[#ffffff22] bg-[#00000022] shadow-2xl backdrop-blur md:mb-0">
        <div className="p-8">
          <span className="text-sell">Conheça o escritor</span>
          <h2 className="my-4 font-handwritten text-4xl text-white">
            Flávio Sousa
          </h2>
          <p className="mb-4 text-neutral-300">
            Meu nome é Flávio Ribeiro de Sousa, nascido em Salvador, Bahia.
            Comecei minha jornada como vendedor de rua e, eventualmente,
            trabalhei como frentista em um posto de gasolina. Descobri minha
            paixão pela música percussiva e viajei com a banda juvenil Olodum.
          </p>
          <p className="mb-4 text-neutral-300">
            Tornei-me pai aos 19 anos e, devido à incerteza da música como
            carreira, empreendi no ramo de alimentação, embora tenha enfrentado
            desafios. Mais tarde, entrei na indústria de peças automotivas como
            motorista, visando me tornar vendedor. Após seis anos de esforço,
            alcancei meu objetivo e vendi mais de 30 milhões em vendas,
            adquirindo experiência valiosa.
          </p>
          <p className="text-neutral-300">
            Em 2021, descobri o mercado digital e me apaixonei pela escala que
            oferece. Atualmente, ensino outras pessoas a vender transformação e
            se destacar no mercado digital, compartilhando meu conhecimento e
            experiência. Minha jornada é um testemunho de determinação e paixão
            que levaram a transformações significativas em minha vida.
          </p>
        </div>
      </div>
      <div></div>
      <Image
        className="absolute bottom-0 z-0 w-full md:right-0 md:w-1/2"
        width={1080}
        height={0}
        src="/assets/flaviob&w.png"
        alt="flavio"
      />
    </div>
  );
}
