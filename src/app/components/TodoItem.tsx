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
    <li className="flex flex-col gap-1 items-center bg-white w-1/3 aspect-square border border-black justify-center top">
      <input id={id} type="checkbox" className="cursor-pointer peer" defaultChecked={complete} onChange={e => toggleTodo(id, e.target.checked)}/>
      <label htmlFor={id} className="peer-checked:line-through cursor-pointer">
        {title}
      </label>
      <button className="border-2 border-neutral-800 rounded-lg p-1 hover:bg-pink-100" onClick={e => removeTodo(id)}>
        Delete
      </button>
    </li>
  );
}
