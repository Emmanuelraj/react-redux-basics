import React from 'react';



const TodoList =({todoList,deleteTodo}) =>{



    let todoCollection = '';
    if(todoList.length===0)
    {
         console.log('todoList is Zero');
          
            return(
                <div className="todo-list-collection">
                   <div>
                       <ul>                     
                          <span>Yay! your Todo is empty!</span>
                       </ul>
                    </div>
                </div>
         )
            
      
    }
  
   
    //iterate todoList using map and return the value
   
     todoCollection=   todoList.map(todo =>             {
        return(
            <div className="todo-list-collection" key={todo.id}>
               <div>
                   <ul>                     
                      <span onClick={()=>{deleteTodo(todo.id)}}>{todo.content}{todo.description}</span>
                   </ul>
                </div>
            </div>
     )
        
  })




    return(
       <div className="todo-collection">
            <ul className="collection">
            <li className="collection-item">
                {todoCollection}       
            </li>
            </ul>
      </div>
    )
}


export default TodoList;