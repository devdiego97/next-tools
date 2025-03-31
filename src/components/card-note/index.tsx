import { TNotes } from "@/data/notes"
import Link from "next/link"
import { Button, Card,Text } from "rsuite"
import { GoBook } from "react-icons/go"; 


type Props={
    note:TNotes,
    click:()=>void
}
78
export const CardNote=({note,click}:Props)=>{

    const  OnClick=()=>{
      click()
    }

    return <div className="bg-gray-200 h-auto rounded transition-all hover:shadow" >
      <div className="bg-gray-300 rounded p-3 m-2 flex align-middle">
        <GoBook className="text-gray-700 bg-gray-200 rounded p-1 mx-1.5 text-2xl" />
        <h2 className="text-gray-700 font-semibold">{note.title}</h2>
      </div>
      <div  className="rounded m-2 h-24 bg-gray-300 ">
        <p className="text-gray-700 p-3"  >{note.content}</p>
      </div>
      <div className="flex justify-center my-4" >
          <Button appearance="primary" onClick={OnClick} className="w-36" color="blue">abrir</Button>
      </div>
    </div>
}