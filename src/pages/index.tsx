import React from "react"
import { useQuery } from "@apollo/client"
import { POSTS } from "../graphql/query"
import ToMD from "../components/ToDM"
import Layout from "../components/Layout"
import { PostNodeType } from "../types"
import { formatDate } from "../utils"

const IndexPage = () => {
  const { loading, error, data } = useQuery(POSTS)

  if (loading) return <div>Loading...</div>
  if (error) return <div>error: {error.message}</div>

  return (
    <Layout>
      {data.posts.edges.map((post: PostNodeType) => {
        return (
          <React.Fragment key={post.node.id}>
            <p>{post.node.id}</p>
            <p>
              作成日：{formatDate(post.node.createdAt)}
              &nbsp;
              更新日：{formatDate(post.node.updatedAt)}
            </p>
          </React.Fragment>
        )
      })}
    </Layout>
  )
}

export default IndexPage
