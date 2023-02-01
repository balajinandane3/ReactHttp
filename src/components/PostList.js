import React, {Component} from "react";
import axios from "axios";

class PostList extends Component{

    constructor(props){
        super(props)
        this.state={
            posts:{}
        }
    }

    componentDidMount(){
       
       axios.get('http://localhost:9001/departments/')
        //axios.get('https://jsonplaceholder.typicode.com/posts')
        
        
        .then(response =>{
            console.log(response)
            const departments = response.data;
            this.setState({posts:response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const { posts } = this.state
       return (
        <div>
            List of posts
            {
                posts.length ?
                posts.map(post => <div key ={post.userId}>{post.title}</div>):
                null
            }

        </div>
       
       )
       
        
    }
}

export default PostList
