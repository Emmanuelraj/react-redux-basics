import React,{Component} from 'react';


class AddTodo extends Component
{


    handleChange =(e) =>
    {
           console.log('handleChange')
           this.setState({
               content: document.getElementsByTagName("input")[0].value
           })
    }
    onSubmitForm =(e) =>
    {
        e.preventDefault();
        console.log('onSubmit form method');
        this.props.addTodo(this.state);
    }



       render() {
        return(
            
            <div className="add-todo">
                    <div className="row">
                        <form className="col s12" onSubmit={this.onSubmitForm}>
                        <div className="row">
                        <div className="input-field col s12">
                                <input type="text" placeholder="Enter your todo" id="todo" onChange={this.handleChange}/>
                                <label htmlFor="todo"></label>
                                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                    <i className="material-icons right"></i>
                                </button>
                           </div>
                          </div>
                        </form>
                    </div>
            </div>  
           
        )
       }    
      
} 




export default AddTodo;