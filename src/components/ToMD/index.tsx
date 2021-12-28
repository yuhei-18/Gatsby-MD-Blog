import React from "react"
import { marked } from "marked"

type Props = {
  text: string
}

const ToMD: React.FC<Props> = ({ text }) => {
  return (
    <div dangerouslySetInnerHTML={{__html: marked(text)}} />
  )
}

export default ToMD
