import Accordion from "./accordion";

export default function FAQ() {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center gap-y-6 bg-gray-200 py-24 md:flex-row md:gap-36">
      <span className="bg-gradient-to-r from-green-700 to-sell bg-clip-text font-inter text-6xl font-extrabold uppercase text-transparent md:text-9xl">
        FAQ
      </span>
      <div className="max-w-min rounded-lg border border-green-700 bg-gray-200 p-4">
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
