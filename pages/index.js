/* eslint-disable */
import { client } from '../libs/client'
import Link from 'next/link'
import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

export default function Home({ blog }) {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
            <Button icon={<DownloadOutlined />} type="primary" />
          </li>
        ))}
      </ul>
    </div>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' })

  return {
    props: {
      blog: data.contents,
    },
  }
}
