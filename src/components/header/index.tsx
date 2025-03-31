"use client"
import { NavLinks } from "@/utils/navLinks";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Nav, Navbar } from "rsuite";
import CogIcon from '@rsuite/icons/legacy/Cog';
import NavItem from "rsuite/esm/Nav/NavItem";


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Fechar menu ao clicar em um link
  const closeMenu = () => setIsMenuOpen(false);

  // Efeito de scroll para o header


  return (
    <header className={'bg-[#16314F] h-24 flex justify-between align-middle '}>
      <div className="">
        <Image src="/logo.png" height={70} width={150} className="h-full" alt="logo do site" />
      </div>
      <div >
          <nav className="h-full ">
           <ul className="flex align-middle">
            {
               NavLinks.filter(i=>i.isNav).map((l,k)=><li key={k} className="text-white mx-4"><Link href={l.path}>{l.name}</Link></li>)
            }
           </ul>
          </nav>
      </div>
    </header>
  );
};