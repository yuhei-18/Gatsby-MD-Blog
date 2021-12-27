import React from "react"
import { useQuery, gql } from "@apollo/client"

const USERS = gql`
  query Users {
    users {
      edges {
        node {
          id
          name
          email
        }
      }
    }
  }
`

const IndexPage = () => {
  const { loading, error, data } = useQuery(USERS)
  console.log(data)
  return (
    <div>
      Hello World
    </div>
  )
}

export default IndexPage
