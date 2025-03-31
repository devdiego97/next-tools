

export type TNotes={
    id:number,
    title:string,
    content:string,
    created:Date
}

export const notesList: TNotes[] = [
    {
      id: 1,
      title: "Lista de Compras",
      content: "Leite, ovos, pão, frutas e café",
      created: new Date("2023-05-15")
    },
    {
      id: 2,
      title: "Ideias para Projeto",
      content: "Criar um app de notas com markdown e sincronização em nuvem",
      created: new Date("2023-06-20")
    },
    {
      id: 3,
      title: "Lembretes Importantes",
      content: "Reunião com cliente às 14h, pagar conta de luz",
      created: new Date("2023-07-10")
    },
    {
      id: 4,
      title: "Livros para Ler",
      content: "O Hobbit, Clean Code, Dom Casmurro",
      created: new Date("2023-08-05")
    },
    {
      id: 5,
      title: "Senhas Temporárias",
      content: "Email novo: temp123, WiFi: casa#2023",
      created: new Date("2023-09-12")
    },
    {
      id: 6,
      title: "Receita de Bolo",
      content: "3 ovos, 2 xícaras de farinha, 1 xícara de açúcar, 1/2 xícara de óleo",
      created: new Date("2023-10-18")
    },
    {
      id: 7,
      title: "Metas Pessoais",
      content: "Aprender TypeScript, fazer exercícios 3x na semana, ler 1 livro por mês",
      created: new Date("2023-11-22")
    },
    {
      id: 8,
      title: "Dicas de Viagem",
      content: "Levar carregador portátil, guarda-chuva, cópia do passaporte",
      created: new Date("2023-12-05")
    },
    {
      id: 9,
      title: "Filmes para Assistir",
      content: "Interestelar, O Poderoso Chefão, Parasita",
      created: new Date("2024-01-15")
    },
    {
      id: 10,
      title: "Anotações de Aula",
      content: "React hooks: useState, useEffect, useContext. Próxima aula: useReducer",
      created: new Date("2024-02-20")
    }
  ];