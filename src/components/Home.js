import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';




class Home extends Component
{
    

    /* state ={
        posts :[]
    } */
    /* componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response  =>
         {
             console.log(response);
             //after getting set response into state
             this.setState({
                 posts:response.data.slice(0,10)
             })
         })
    } */
    render (){  
        const {posts} = this.props;
        
        console.log(posts.length);

         const postList =posts.map(post=>{
              return(
                  
                        
                        <div className="card" key={post.id}>
                        
                            <div className="card-image">  
                             <Link to={'/'+post.id}>                            
                            <b>Title: -{post.title}</b>
                            </Link>
                            </div>
                            <div className="card-content">
                            <p>
                                Description:-
                                {post.body}</p>
                            </div>
                        </div>
                        
                    
              )
         }) 

       return(
           <div className="http-content">
                 {postList}
           </div>
       )
   }
}

const mapStateToProps = (state) => {
    return {
      posts: state.posts
    }
  }

export default connect(mapStateToProps)(Home);