import { NavLinks } from "@/utils/navLinks"
import Link from "next/link"


export const Header=()=>{
    return <header className="bg-[#16314F] p-3.5 h-20 flex align-middle justify-between">
       <div className="bg-[url('/logo.png')] h-36 bg-cover bg-center"></div>
       <nav  >
         <ul className="flex justify-center ">
            {NavLinks.filter(i=>i.isNav).map((i,k)=><li className="text-white mx-2">
                  <Link href={i.path}>{i.name}</Link>
              </li>
            )}
         </ul>
       </nav>
    </header>
}