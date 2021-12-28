import React from "react"
import { useQuery } from "@apollo/client"
import { POSTS } from "../graphql/query"
import Layout from "../components/Layout"
import Card from "../components/Card"
import { PostNodeType } from "../types"

const IndexPage = () => {
  const { loading, error, data } = useQuery(POSTS)

  if (loading) return <div>Loading...</div>
  if (error) return <div>error: {error.message}</div>

  return (
    <Layout>
      <div className="m-8" />
      {data.posts.edges.map((post: PostNodeType) => (
        <Card
          id={post.node.id}
          title={post.node.id}
          createdAt={post.node.createdAt}
          updatedAt={post.node.updatedAt}
        />
      ))}
    </Layout>
  )
}

export default IndexPage
