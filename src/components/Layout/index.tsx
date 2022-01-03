import * as React from "react"

const Layout: React.FC = ({ children }) => {
  return (
    <div className="w-full">
      <div className="w-11/12 mx-auto">
        {children}
      </div>
    </div>
  )
}

export default Layout
