import { ReactNode } from "react"
import { Header } from "../header"
import { Container } from "rsuite"


type Props={
    children:ReactNode
}
export const LayoutApp=({children}:Props)=>{
  return <Container>
    <Header />
    <div>
        {children}
    </div>
  </Container>
}