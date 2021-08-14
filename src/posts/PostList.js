import React, { Component } from 'react'
import PostData from '../data/posts.json'

class PostList extends Component {
  render() {
    return (
      <div>
            <h1>PostList</h1>
            {PostData.map(post =>
              <div key={post.id}>
                <h2>{post.firstName}</h2>
                
              </div>
            )}
      </div>
    )
  }
}
export default PostList