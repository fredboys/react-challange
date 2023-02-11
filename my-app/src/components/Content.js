import React, { Component } from 'react'
import css from "./css/Content.module.css";
import PostItem from './PostItem';
import {savedPosts} from "../posts.json";

export class Content extends Component {

    constructor(props){
        super(props)
    }

  render() {
    return (
      <div className={css.Content}>

        <div className={css.TitleBar}>
            <h1>My Photos</h1>
        </div>

        {/* Created just using map function */ }
        {/* <div className={css.SearchResults}>
            {
            savedPosts.map(post => {
                return <div className={css.SearchItem} key={post.title}>
                    <p>{post.title}</p>
                    <p>{post.name}</p>
                    <img src={post.image} alt='random'/>
                    <p>{post.description}</p>
                </div>
            })
        }
        </div> */}

        {/* Created using child component */}
        <div className={css.SearchResults}>
            <PostItem savedPosts={savedPosts} />
        </div>
      </div>
    )
  }
}

export default Content