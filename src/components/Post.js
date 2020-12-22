import { render } from '@testing-library/react';
import React from 'react'
import Status from './Status'

class Post extends React.Component {

    state = {
        allPosts :[]
    }

    render() {
    return (
        <div>
        <div className="container">
            <form className="ui form" 
            style={{position: 'absolute', top: '10px', left: '50px', right: '50px', alignSelf: 'center'}}
            onSubmit={this.handleSubmit}>
                <div className="field">
                    <label>Write your post</label>
                    <textarea name="mypost" placeholder="What is on your mind?"></textarea>
                </div>
                <button className="ui button" type="submit" >Submit</button>
            </form>
            </div>
    
            <div className="ui card">
                {
                    this.state.allPosts.map(
                        (item, index) => {
                            return (
                                <div className="content" key={index}>
                                    <div className="header">Your name</div>
                                        <div className="meta">
                                            <span>2 days ago</span>
                                        </div>
                                    <p>{item}</p>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>

    )
}


handleSubmit = (event) =>{
    let newPost = event.target.elements.mypost.value;

    if(newPost.length > 0){
        this.setState({ allPosts: [...this.state.allPosts, newPost]})
        event.target.reset();
    }
    event.preventDefault();
}
}
export default Post;