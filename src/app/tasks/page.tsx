"use client"
import { CardTask } from "@/components/card-task";
import { tasksLists, Ttask } from "@/data/tasks";
import { useState } from "react";
import { Button, Checkbox, Drawer, IconButton, Input, Modal } from "rsuite";
import { useStore } from "@/stores/useStore";
import { IoIosAdd } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { Tooltip } from "@/components/tooltip";
import { GoListUnordered as ListIcon} from "react-icons/go";


const Page=()=>{
     
   const {task,handleTask}=useStore()
    const [ onDrawer,handleDrawer] = useState<boolean>(false)
  
  
    const setTaskDrawer=(t:Ttask)=>{
      handleTask(t)
      handleDrawer(true)
    }


 return <div className="p-12 my-10">
             <main >
                <h1 className="text-3xl font-semibold uppercase">Lista de Tarefas</h1>
                <p className="my-2 text-gray-500 font-medium">Crie,gerencie,atualize tarefas importantes para você</p>
                <section className="sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-2 my-10">
                 {
                   tasksLists.map((t,k)=><CardTask click={()=>setTaskDrawer(t)} task={t} key={k} />)
                 }
                </section>
             </main>
             <Drawer size={"50rem"} placement={"right"} open={onDrawer} onClose={() => handleDrawer(false)}>
        <Drawer.Header className="bg-emerald-500">
          <ListIcon className="text-emerald-400 bg-emerald-200 rounded p-1 mx-1.5 text-4xl" />
          <p className="text-white font-semibold">{task?.title}</p>
        </Drawer.Header>
        <Drawer.Body>
          <div className="flex">
            <Input placeholder="digite uma nova tarefa" />
            <IconButton className="mx-2.5" icon={<IoIosAdd className="text-2xl font-bold" />} appearance="primary" color="blue" />
          </div>
           {
            <ul className="my-10">
              {
                task?.taskList.map((i,k)=><div key={k} className="flex my-2 justify-between border-b pb-2 border-gray-100">
                  <div className="flex">
                   <Checkbox /><li >{i.taskItem}</li>
                  </div>
                  <div>
                    <Tooltip message="deletar">
                      <IconButton appearance="primary" color="red" icon={<FaTrashAlt />} />
                    </Tooltip>
                  </div>
                </div>
                )
              }
            </ul>
           }
        </Drawer.Body>
      </Drawer>
           </div>
  
}

export default Page;