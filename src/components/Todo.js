import React,{Component} from 'react';
import TodoList from './TodoList'
import AddTodo from './AddTodo';


class TodoApp extends Component
{

  state = {
    todos:[
       {id:1,description : 'Learn Reactjs'},
       {id:2,description : 'Impl TodoProject'}
    ]
  }


  deleteTodo = (id) =>
    {
      console.log(id)

      const todos =this.state.todos.filter(todo =>{
        return todo.id !==id;
      });
      this.setState({
        todos
      })
    }

    handleChange =(e) =>
    {
           console.log('handleChange')
    }
    onSubmitForm =(e) =>
    {
        e.preventDefault();
        console.log('onSubmit form method')
    }


    addTodo =(todo) =>
     {
       //set id as random id
      todo.id=Math.random();
      let todos =[...this.state.todos,todo];
      this.setState({
        todos:todos
     })
     }

    
    render()
     {    
         return(
           
              <div className="todos collection">
                 <h4 className="center">TodoApp</h4>  
                   <ul align="center">                   
                    <TodoList todoList ={this.state.todos} deleteTodo={this.deleteTodo}></TodoList> 
                    <AddTodo addTodo={this.addTodo}></AddTodo>
                   </ul>
                </div>
         )
     }
}



export default TodoApp