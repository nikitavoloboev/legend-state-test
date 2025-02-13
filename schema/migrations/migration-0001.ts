import { add, alter, create, drop, get, set } from "ronin";
export default () => [
  create.model({
    slug: "user",
    fields: [{ slug: "name", required: true, unique: true, type: "string" }, { slug: "bio", type: "string" }],
  }),
  create.model({
    slug: "post",
    fields: [{ slug: "title", required: true, type: "string" }, { slug: "content", required: true, type: "string" }, {
      slug: "createdBy",
      target: "user",
      required: true,
      type: "link",
    }],
  }),
];
