export default function App() {
  return (
    <div
      className="relative h-screen w-screen bg-cover"
      style={{ backgroundImage: "url('/assets/sales.jpg')" }}
    >
      <div className="absolute inset-0 backdrop-blur"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-300 to-green-700 opacity-80"></div>
      <div className="absolute flex h-screen w-screen  items-center justify-center gap-x-20">
        <div className="w-1/4">
          <img
            className="from-glass shadow-lg w-48 rounded-3xl border-solid border border-border bg-gradient-to-br to-transparent p-8 backdrop-blur"
            src="/assets/brain.png"
            alt="cerébro logo"
          />
          <h1 className="text-4xl font-bold text-white">
            Desvende os segredos do sucesso em vendas escrito por um veterano
            com mais de 10 anos de experiência, explorando diversas áreas do
            negócio para alcançar a alta performance.
          </h1>
          <span></span>
          <button className="mt-8 w-full whitespace-nowrap rounded-l-full rounded-r-full bg-gradient-to-r from-green-700 to-sell px-6 py-3 font-sans font-extrabold uppercase text-white">
            Quero ser de alta performance
          </button>
        </div>
        <img className="h-96 rounded-3xl" src="/assets/seller.jpg" alt="pdf" />
      </div>
    </div>
  );
}

/** 
 * 
 * 
 *   
 *   
 *  <div className="to-green-700 relative flex h-screen w-screen items-center justify-center bg-gradient-to-br from-stone-800">
      <img
        src="/assets/sales.jpg"
        className="h-screen w-full object-none opacity-10 blur filter"
        alt=""
      >
      </img>
    </div>
 * */
