import { get, add } from "ronin"
import { UserModel } from "ronin/ronin-schema"

export async function createUser() {
  const user = await add.user.with({
    name: "nikita",
    bio: "learning legend-state",
  })
  console.log(user)
}

export async function getUsers(): Promise<(typeof UserModel)[]> {
  const users = await get.users()
  return users as (typeof UserModel)[]
}
