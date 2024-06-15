import Link from "next/link";
import { prisma } from "../db";
import { redirect } from "next/navigation";
import { useState } from "react";

export const dynamic = "force-dynamic";

async function createTodo(data: FormData) {
  "use server"

  const title = data.get("title")?.valueOf()

  if (typeof title !== "string" || title.length === 0) {
      throw new Error("Title is not a string")
  }
  await prisma.todo.create({data: {title, complete: false}})
  redirect("/")
}

export default function New() {

  return (
    <>
      <header className="flex justify-between items-center mb-5">
        <h1 className="text-2xl">New</h1>
      </header>

      <form className="flex flex-col gap-2" action={createTodo}>
        <input
          type="text"
          name="title"
          className="border border-neutral-800 bg-transparent rounded px-2 py-1 outline-none focus-within:border-neutral-400"
        />

        <div className="flex gap-1 justify-end">
          <button
            type="submit"
            className="border-2 border-neutral-800 rounded-lg p-1 hover:bg-pink-100"
          >
            Submit
          </button>

          <Link
            href=".."
            className="border-2 border-neutral-800 rounded-lg p-1 hover:bg-pink-100"
          >
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
}
