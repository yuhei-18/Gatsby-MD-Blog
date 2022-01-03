import * as React from "react"

const TwoColumn: React.FC = ({ children }) => {
  return (
    <div className="flex">{children}</div>
  )
}

export default TwoColumn
