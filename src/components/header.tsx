'use client';
import Image from "next/image";
import Link from "../../node_modules/next/link";
import { usePathname } from "../../node_modules/next/navigation";
type Props = {};
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Posts" },
  { href: "/create-post", label: "Create post" },
];
export default function Header({}: Props) {
    const pathName = usePathname();
  return (
    <header className="flex justify-between items-center border-b py-4 px-7">
      <Link href="/">
        <Image
          className="w-[35px] h-[35px]"
          src="vercel.svg"
          alt="logo"
          width="35"
          height="35"
        />
      </Link>
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={pathName === link.href ? "text-zinc-900" : "text-zinc-400"}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
