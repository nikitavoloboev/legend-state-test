import { add, alter, create, drop, get, set } from "ronin";
export default () => [
  alter.model("post").create.field({ "slug": "likedBy", "target": "user", "kind": "many", "type": "link" }),
];
