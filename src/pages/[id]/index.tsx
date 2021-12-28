import React from "react"
import Layout from "../../components/Layout"

type Pathname = {
  pathname: string
}

type PropsType = {
  location: Pathname
}

const IndexPage: React.FC<PropsType> = (props) => {
  const { location } = props
  const id = location.pathname.split("/")[1]
  return (
    <Layout>
      {id}
    </Layout>
  )
}

export default IndexPage
