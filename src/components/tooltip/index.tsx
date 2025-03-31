import { ReactNode } from "react"
import { Tooltip as Toolt, Whisper, Button, ButtonToolbar } from 'rsuite';

type Props={
    children:ReactNode,
    message:string
}



export const Tooltip=({children,message}:Props)=>{
    return  <Whisper followCursor  placement="top"  speaker={<Toolt>{message}</Toolt>}>
    {children}
  </Whisper>
}