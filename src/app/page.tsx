import Link from "next/link";
import { prisma } from "./db";
import TodoItem from "./components/TodoItem";

export const dynamic = "force-dynamic";

function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({where: {id}, data: {complete}})
}

export default async function Home() {
  const todos = await getTodos();
  
  return (
    <>
      <header className="flex justify-between items-center mb-5">
        <h1 className="text-2xl">Todo List</h1>
        <Link
          className="border-2 border-neutral-800 rounded-lg p-1 hover:bg-pink-100"
          href="/new"
        >
          Create New Item
        </Link>
      </header>

      <ul className="flex justify-between">
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/>
        ))}
      </ul>

    </>
  );
}
