import Link from "next/link";
import Image from "next/image";

import logoImg from "@/public/logo.png";

export const Logo = () => {
  return (
    <Link href="/">
      <Image src={logoImg} alt="Logo" />
    </Link>
  );
};
