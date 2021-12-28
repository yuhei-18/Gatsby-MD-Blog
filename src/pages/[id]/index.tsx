import React from "react"
import { useQuery } from "@apollo/client"
import { POSTS } from "../../graphql/query"
import Layout from "../../components/Layout"
import ToMD from "../../components/ToMD"
import { PostNodeType, PostType } from "../../types"

type Pathname = {
  pathname: string
}

type PropsType = {
  location: Pathname
}

const IndexPage: React.FC<PropsType> = (props) => {
  const { location } = props
  const id = location.pathname.split("/")[1]
  const { loading, error, data } = useQuery(POSTS)

  if (loading) return <div>Loading...</div>
  if (error) return <div>error: {error.message}</div>

  const posts: PostNodeType = data.posts.edges.filter((post: PostNodeType) => post.node.id == id)
  const post: PostType = posts[0].node

  return (
    <Layout>
      <ToMD text={post.text} />
    </Layout>
  )
}

export default IndexPage
