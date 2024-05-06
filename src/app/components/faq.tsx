import Accordion from "./accordion";

export default function FAQ() {
  return (
    <div className="flex justify-evenly items-center w-full h-[400px] bg-gray-200">
      <span className="bg-gradient-to-r from-green-700 to-sell font-inter bg-clip-text text-transparent font-extrabold text-9xl uppercase">
        FAQ
      </span>
      <div className="p-4 bg-gray-200 rounded-lg border border-green-700">
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

