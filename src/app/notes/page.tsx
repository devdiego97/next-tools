"use client"
import { CardNote } from "@/components/card-note"
import { useAppContext } from "@/context/ui"
import { notesList, TNotes } from "@/data/notes"
import { useStore } from "@/stores/useStore"
import { useState } from "react"
import { GoBook } from "react-icons/go"
import { IconButton, Modal } from "rsuite"
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Tooltip } from "@/components/tooltip"

const Page=()=>{
  const {note,handleNote}=useStore()
  const [ onModal,handleModal ] = useState<boolean>(false)


  const setNoteModal=(n:TNotes)=>{
    handleNote(n)
    handleModal(true)
  }

  
    return <div className="p-12 my-10">
      <main>
         <h1 className="text-3xl font-semibold uppercase">Anotações</h1>
         <p className="my-2 text-gray-500 font-medium">Crie,gerencie,atualize anotações importantes para você</p>
         <section className="sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-2 my-10">
          {
            notesList.map((n,k)=><CardNote click={()=>setNoteModal(n)}  note={n} key={k} />)
          }
         </section>
      </main>
      <Modal open={onModal} className="p-0 m-0"  onClose={()=>handleModal(false)}>
          <Modal.Header className="bg-blue-200 p-3">
            <div className="flex align-middle h-full">
              <GoBook className="text-gray-700 bg-gray-200 rounded p-1 mx-1.5 text-4xl" />
              <h3 className="text-emerald-700">{note?.title}</h3>
            </div>
          </Modal.Header>
          <Modal.Body className="bg-blue-200 h-52 p-3 rounded">
            <p>{note?.content}</p>
          </Modal.Body>
          <Modal.Footer className="py-3.5">
            <Tooltip message="deletar">
              <IconButton appearance="primary" color="red" icon={<FaTrashAlt />} />
            </Tooltip>
            <Tooltip message="editar">
              <IconButton appearance="primary" color="green" icon={<FaEdit />} />
            </Tooltip>
          </Modal.Footer>
      </Modal>
    </div>
}

export default Page