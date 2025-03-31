import { ReactNode } from "react"
import { Header } from "../header"


type Props={
    children:ReactNode
}
export const LayoutApp=({children}:Props)=>{
  return <div>
    <Header />
    <div>
        {children}
    </div>
  </div>
}