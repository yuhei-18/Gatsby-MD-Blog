import * as React from "react"
import clsx from "clsx"
import { useQuery } from "@apollo/client"
import { POSTS } from "../../graphql/query"
import Layout from "../../components/Layout"
import ToMD from "../../components/ToMD"
import TwoColumn from "../../components/TwoColumn"
import Header from "../../components/Header"
import { PostNodeType, PostType } from "../../types"
import * as styles from "./styles.module.scss"

type Pathname = {
  pathname: string
}

type PropsType = {
  location: Pathname
}

const IndexPage: React.FC<PropsType> = (props) => {
  const { location } = props
  const id = location.pathname.split("/")[1]
  const [textState, setTextState] = React.useState("")
  const { loading, error, data } = useQuery(POSTS)

  if (loading) return <div>Loading...</div>
  if (error) return <div>error: {error.message}</div>

  const posts: PostNodeType = data.posts.edges.filter((post: PostNodeType) => post.node.id == id)
  const post: PostType = posts[0].node

  // 文字をリアルタイムでMDに変換
  const handleOnChange = (e) => {
    setTextState(e.target.value)
  }

  // DBからの情報を取得したタイミングで再表示
  React.useEffect(() => {
    setTextState(post.text)
  }, [post.text])

  return (
    <Layout>
      <Layout.Header>
        <Header>
          <ul className={styles.header}>
            <li>
              <a className={clsx(styles.button, styles.back_button)} href="../">BackHome</a>
            </li>
            <li>
              <a className={clsx(styles.button, styles.save_button)}>Save</a>
            </li>
            <li>
              <a className={clsx(styles.button, styles.delete_button)}>Delete</a>
            </li>
          </ul>
        </Header>
      </Layout.Header>

      <Layout.Body>
        <TwoColumn>
          <textarea
            onChange={handleOnChange}
            defaultValue={post.text}
            autoFocus={true}
            className={styles.textarea}
          />
          <ToMD text={textState} />
        </TwoColumn>
      </Layout.Body>
    </Layout>
  )
}

export default IndexPage
