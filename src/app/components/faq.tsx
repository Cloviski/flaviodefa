import Accordion from "./accordion";

export default function FAQ() {
  return (
    <div className="flex flex-col md:flex-row py-24 justify-center items-center w-full h-fit bg-gray-200 gap-y-6 md:gap-36">
      <span className="bg-gradient-to-r from-green-700 to-sell font-inter bg-clip-text text-transparent font-extrabold text-6xl md:text-9xl uppercase">
        FAQ
      </span>
      <div className="p-4 max-w-min bg-gray-200 rounded-lg border border-green-700">
        <Accordion
          title="Funciona pra mim?"
          answer="O ebook é tanto pra iniciantes quanto pra vendedores experientes."
        />
        <Accordion
          title="Quanto tempo terei acesso?"
          answer="O acesso é vitalício."
        />
        <Accordion
          title="O que vou aprender nesse ebook?"
          answer="Você aprenderá como ter a mentalidade de um vendedor de alta performance."
        />
      </div>
    </div>
  );
}

