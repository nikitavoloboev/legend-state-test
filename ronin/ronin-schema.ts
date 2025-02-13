import { link, model, string } from "ronin/schema"

export const UserModel = model({
  slug: "user",
  fields: {
    name: string({ required: true, unique: true }),
    bio: string(),
  },
})

export const PostModel = model({
  slug: "post",
  fields: {
    title: string({ required: true }),
    likedBy: link({
      target: "user",
      kind: "many",
    }),
    content: string({ required: true }),
    createdBy: link({
      target: "user",
      required: true,
    }),
  },
})
