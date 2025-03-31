

type TNavLink={
    name:string,
    path:string,
    isNav:boolean,
    private:boolean
}
export const NavLinks:TNavLink[]=[
    {
       name:"inicio",
        path:"/",
        isNav:true,
        private:false
    },
    {
        name:"entrar",
         path:"/entrar",
         isNav:true,
         private:false
     },
     {
        name:"cadastrar",
         path:"/cadastrar",
         isNav:true,
         private:false
     },
    {
        name:"anotações",
         path:"/notes",
         isNav:true,
         private:true
     },
     {
        name:"anotações-id",
         path:"/notes/:id",
         isNav:false,
         private:true
     },
     {
        name:"Lista de Tarefas",
         path:"/tasks",
         isNav:true,
         private:true
     },
     {
        name:"Lista de Tarefas-id",
         path:"/tasks/:id",
         isNav:false,
         private:true
     }
]