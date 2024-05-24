import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex h-fit w-full flex-col items-center bg-green-950 p-12">
      <Image
        className="mb-6"
        src="/assets/logo.png"
        width={100}
        height={100}
        alt="logo"
      />
      <span className="text-center text-neutral-300 md:text-start">
        VENDENDOR DE ALTA PERFORMANCE Copyright © 2024 - Flávio Ribeiro | Todos
        os direitos reservados
      </span>
      <span className="mt-6 text-neutral-300">
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
