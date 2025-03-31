"use client"
import { CardNote } from "@/components/card-note"
import { notesList } from "@/data/notes"
import { tree } from "next/dist/build/templates/app-page"
import { useState } from "react"
import { Modal } from "rsuite"

const Page=()=>{
  const [onModal,setOnModal]=useState(false)

    return <div className="p-12 my-10">
      <main>
         <h1 className="text-3xl font-semibold uppercase">Anotações</h1>
         <p className="my-2 text-gray-500 font-medium">Crie,gerencie,atualize anotações importantes para você</p>
         <section className="sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-2 my-10">
          {
            notesList.map((n,k)=><CardNote click={()=>setOnModal(true)}  note={n} key={k} />)
          }
         </section>
      </main>
      <Modal open={onModal} onClose={()=>setOnModal(false)}>
        <Modal.Header>
          dd
        </Modal.Header>
        <Modal.Body>
          dd
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </div>
}

export default Page