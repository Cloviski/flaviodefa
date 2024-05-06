import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col items-center w-full bg-neutral-950 h-fit p-12">
      <Image
        className="mb-6"
        src="/assets/logo.png"
        width={100}
        height={100}
        alt="logo"
      />
      <span className="text-neutral-300 text-center md:text-start">
        VENDENDOR DE ALTA PERFORMANCE Copyright © 2024 - Flávio Ribeiro | Todos
        os direitos reservados
      </span>
      <span className="text-neutral-300 mt-6">
        Desenvolvido por{" "}
        <Link
          className="text-sell"
          href="https://www.linkedin.com/in/cl%C3%A1udio-ribeiro-0000a8225/?locale=pt_BR"
        >
          Cláudio Ribeiro
        </Link>
      </span>
    </div>
  );
}
