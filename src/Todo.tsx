// type TodoType = {
//   userId: number;
//   title: string;
//   completed?: boolean; //?をつけることで必須ではなくなる
// };

import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { userId, title, completed = false } = props; //必須でないものが入る場合展開する時にデフォルト値を設定しておくとなお良し
  const completMark = completed ? "[✔︎]" : "[ ]";
  return <p>{`${completMark}${title}(ユーザー:${userId})`}</p>;
};
