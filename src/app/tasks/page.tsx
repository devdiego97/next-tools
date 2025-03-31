"use client"
import { CardTask } from "@/components/card-task";
import { tasksLists } from "@/data/tasks";
import { useState } from "react";
import { Modal } from "rsuite";

const Page=()=>{
        const [onModal,setOnModal]=useState(false)
       
           return <div className="p-12 my-10">
             <main >
                <h1 className="text-3xl font-semibold uppercase">Lista de Tarefas</h1>
                <p className="my-2 text-gray-500 font-medium">Crie,gerencie,atualize tarefas importantes para você</p>
                <section className="sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-2 my-10">
                 {
                   tasksLists.map((t,k)=><CardTask click={()=>setOnModal(true)} task={t} key={k} />)
                 }
                </section>
             </main>
             <Modal open={onModal} onClose={()=>setOnModal(false)} className="mt-44">
               <Modal.Header>
                  
               </Modal.Header>
               <Modal.Body>

               </Modal.Body>
             </Modal>
           </div>
  
}

export default Page;