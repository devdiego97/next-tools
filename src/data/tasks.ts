
export type Ttask={
    id:number,
    title:string,
    taskList: {
        id:number,
       taskItem:string,
       state:'concluida' | 'pendente'
    }[]
}

export const tasksLists: Ttask[] = [
    {
      id: 1,
      title: "Tarefas Matinais",
      taskList: [
        { id: 1, taskItem: "Tomar café", state: "concluida" },
        { id: 2, taskItem: "Escovar os dentes", state: "concluida" },
        { id: 3, taskItem: "Fazer alongamento", state: "pendente" }
      ]
    },
    {
      id: 2,
      title: "Trabalho",
      taskList: [
        { id: 1, taskItem: "Responder e-mails", state: "pendente" },
        { id: 2, taskItem: "Reunião com equipe", state: "concluida" },
        { id: 3, taskItem: "Entregar relatório", state: "pendente" }
      ]
    },
    {
      id: 3,
      title: "Compras do Mês",
      taskList: [
        { id: 1, taskItem: "Arroz e feijão", state: "pendente" },
        { id: 2, taskItem: "Frutas e verduras", state: "pendente" },
        { id: 3, taskItem: "Produtos de limpeza", state: "concluida" }
      ]
    },
    {
      id: 4,
      title: "Projeto Pessoal",
      taskList: [
        { id: 1, taskItem: "Escrever documentação", state: "pendente" },
        { id: 2, taskItem: "Testar funcionalidades", state: "concluida" },
        { id: 3, taskItem: "Revisar código", state: "pendente" }
      ]
    },
    {
      id: 5,
      title: "Rotina de Estudos",
      taskList: [
        { id: 1, taskItem: "Assistir aula de React", state: "concluida" },
        { id: 2, taskItem: "Fazer exercícios práticos", state: "pendente" },
        { id: 3, taskItem: "Revisar anotações", state: "pendente" }
      ]
    },
    {
      id: 6,
      title: "Organização Casa",
      taskList: [
        { id: 1, taskItem: "Lavar roupa", state: "pendente" },
        { id: 2, taskItem: "Limpar geladeira", state: "concluida" },
        { id: 3, taskItem: "Organizar armário", state: "pendente" }
      ]
    },
    {
      id: 7,
      title: "Preparativos Viagem",
      taskList: [
        { id: 1, taskItem: "Fazer malas", state: "pendente" },
        { id: 2, taskItem: "Confirmar reservas", state: "concluida" },
        { id: 3, taskItem: "Comprar itens necessários", state: "pendente" }
      ]
    },
    {
      id: 8,
      title: "Saúde e Bem-estar",
      taskList: [
        { id: 1, taskItem: "Ir à academia", state: "concluida" },
        { id: 2, taskItem: "Agendar check-up", state: "pendente" },
        { id: 3, taskItem: "Beber 2L de água", state: "pendente" }
      ]
    },
    {
      id: 9,
      title: "Finanças Pessoais",
      taskList: [
        { id: 1, taskItem: "Pagar contas", state: "concluida" },
        { id: 2, taskItem: "Atualizar planilha", state: "pendente" },
        { id: 3, taskItem: "Analisar investimentos", state: "pendente" }
      ]
    },
    {
      id: 10,
      title: "Lazer",
      taskList: [
        { id: 1, taskItem: "Assistir novo episódio", state: "pendente" },
        { id: 2, taskItem: "Ler livro novo", state: "concluida" },
        { id: 3, taskItem: "Encontrar amigos", state: "pendente" }
      ]
    }
  ];