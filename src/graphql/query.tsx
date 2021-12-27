import { gql } from "@apollo/client"

export const USERS = gql`
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

export const POSTS = gql`
  query Posts {
    posts {
      edges {
        node {
          id
          text
          isPublish
          author {
            id
            name
            email
            role {
              id
              name
            }
          }
        }
      }
    }
  }
`