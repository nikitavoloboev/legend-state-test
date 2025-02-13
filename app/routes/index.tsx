import { createFileRoute } from "@tanstack/react-router"
import { observable } from "@legendapp/state"
import { createServerFn } from "@tanstack/start"
import { useQuery } from "@tanstack/react-query"
import { getUsers } from "lib/ronin/ronin"

// Type your Store interface
interface Todo {
  id: number
  text: string
  completed?: boolean
}

interface Store {
  todos: Todo[]
  total: number
  numCompleted: number
  addTodo: () => void
}

// Create a global observable for the Todos
let nextId = 0
const store$ = observable<Store>({
  todos: [],
  // Computeds
  total: (): number => {
    return store$.todos.length
  },
  numCompleted: (): number => {
    return store$.todos.get().filter((todo) => todo.completed).length
  },
  addTodo: () => {
    const todo: Todo = {
      id: nextId++,
      text: "",
    }
    store$.todos[todo.id].set(todo)
  },
})

function RouteComponent() {
  const { data } = useQuery({
    queryKey: ["/"],
    queryFn: async () => await routeQuery({}),
  })
  console.log(data, "data")

  return (
    <>
      <div>test</div>
    </>
  )
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

const routeQuery = createServerFn({
  method: "GET",
}).handler(async (ctx) => {
  const users = await getUsers()
  return users
})
