"use client"

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void
  removeTodo: (id: string) => void
};

export default function TodoItem({ id, title, complete, toggleTodo, removeTodo}: TodoItemProps) {
  return (
    <li className="flex flex-col gap-1 items-center bg-white w-1/4 aspect-square border rounded-md border-black justify-start">
      <h1 className="text-3xl text-center p-2">{title}</h1>
      <input id={id} type="checkbox" className="cursor-pointer peer p-2" defaultChecked={complete} onChange={e => toggleTodo(id, e.target.checked)}/>
      <label htmlFor={id} className="peer-checked:line-through cursor-pointer p-1">
      </label>
      <button className="border-2 border-neutral-800 rounded-lg p-1 hover:bg-pink-100" onClick={e => removeTodo(id)}>
        Delete
      </button>
    </li>
  );
}
