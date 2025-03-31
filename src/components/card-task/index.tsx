import { TNotes } from "@/data/notes"
import { Ttask } from "@/data/tasks"
import Link from "next/link"
import { Button, Card,Text } from "rsuite"
import { GoListUnordered as ListIcon} from "react-icons/go";


type Props={
    task:Ttask,
    click:()=>void
}
78
export const CardTask=({task,click}:Props)=>{

    const  OnClick=()=>{
      click()
    }

    return <div className="bg-emerald-200  h-auto rounded transition-all hover:shadow" >
      <div className="bg-emerald-400 rounded p-3 m-2 flex align-middle ">
        <ListIcon className="text-emerald-400 bg-emerald-200 rounded p-1 mx-1.5 text-2xl" />
       <h2 className=" font-semibold text-white">{task.title}</h2>
      </div>
      <div className="flex justify-center my-4" >
          <Button appearance="primary" onClick={OnClick} className="w-36" color="blue">abrir</Button>
      </div>
    </div>
}