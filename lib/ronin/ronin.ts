import { get, add } from "ronin"

export async function createUser() {
  const user = await add.user.with({
    name: "nikita",
    bio: "learning legend-state",
  })
  console.log(user)
}

export async function getUsers() {
  const users = await get.users()
  return users
}
