import React from "react"
import { useQuery } from "@apollo/client"
import { POSTS } from "../graphql/query"
import ToMD from "../components/toMD"

const IndexPage = () => {
  const { loading, error, data } = useQuery(POSTS)

  if (loading) return <div>Loading...</div>
  if (error) return <div>error: {error.message}</div>

  return (
    <div>
      {data.posts.edges.map((post) => (
        <React.Fragment key={post.node.id}>
          <p>{post.node.id}</p>
          <p>{post.node.author.name}</p>
          <ToMD text={post.node.text} />
          <p>{post.node.author.email}</p>
        </React.Fragment>
      ))}
    </div>
  )
}

export default IndexPage
