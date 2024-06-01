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
            Flávio Ribeiro de Sousa, nascido em Salvador, Bahia, começou como
            vendedor de rua e frentista antes de descobrir sua paixão pela
            música percussiva, viajando com a banda juvenil Olodum. Tornou-se
            pai aos 19 anos e, devido à incerteza na carreira musical,
            empreendeu no ramo de alimentação, enfrentando desafios.
            Posteriormente, trabalhou como motorista na indústria de peças
            automotivas, almejando se tornar vendedor.
          </p>
          <p className="mb-4 text-neutral-300">
            Após seis anos de esforço, conseguiu vender mais de 30 milhões,
            adquirindo experiência valiosa. Em 2021, descobriu o mercado
            digital, apaixonando-se por sua escala, e agora ensina outras
            pessoas a se destacarem nesse mercado, compartilhando seu
            conhecimento e experiência. Sua jornada reflete determinação e
            paixão, resultando em transformações significativas em sua vida.
          </p>
        </div>
      </div>
      <div></div>
      <Image
        className="absolute bottom-0 z-0 w-full md:right-0 md:w-[45%]"
        width={1080}
        height={0}
        src="/assets/flaviob&w.png"
        alt="flavio"
      />
    </div>
  );
}
