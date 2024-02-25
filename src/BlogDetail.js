import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'

const BlogDetail = () => {
  const {id} = useParams()
  return (
    <div>
      <Header />
      blog detail - {id}
    </div>
  )
}

export default BlogDetail
