import * as React from "react"
import { marked } from "marked"
import "./styles.scss"

type PropsType = {
  text: string
  className: string
}

const ToMD: React.FC<PropsType> = (props) => {
  const { text, className } = props
  return (
    <div className={"md " + className} dangerouslySetInnerHTML={{__html: marked(text)}} />
  )
}

export default ToMD
