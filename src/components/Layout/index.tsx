import * as React from "react"
import * as styles from "./styles.module.scss"

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.contents}>
        {children}
      </div>
    </div>
  )
}

export default Layout
