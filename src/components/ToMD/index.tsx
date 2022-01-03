import * as React from "react"
import { marked } from "marked"

type PropsType = {
  text: string
}

const ToMD: React.FC<PropsType> = (props) => {
  const { text } = props
  return (
    <div dangerouslySetInnerHTML={{__html: marked(text)}} />
  )
}

export default ToMD
