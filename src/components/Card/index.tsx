import React from "react"
import { formatDate } from "../../utils"

type PropsType = {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

const Card: React.FC<PropsType> = (props) => {
  const { id, title, createdAt, updatedAt } = props
  return (
    <div key={id} className="mb-8 p-4 w-3/4 mx-auto rounded bg-gray-200">
      <h1 className="text-2xl mb-2">{title}</h1>
      <p>
        作成日：{formatDate(createdAt)}
        &nbsp;
        更新日：{formatDate(updatedAt)}
      </p>
    </div>
  )
}

export default Card
