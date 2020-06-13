import React,{Component} from 'react';
//import SpringDataList from '../components/SpringDataList'









class SpringHttp extends Component
{

   state={
    posts :[]
 

   } 
    componentDidMount() {
        //setInterval(this.hello, 250);
    }
 
    hello = () => {
        fetch('/allBy')
        .then(response => response.text())
        .then(message => 
            {
            this.setState({message: message});
        });
    };
    
 
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    
                    <h1 className="App-title" onClick={this.hello}>{this.state.message} Hi </h1>
                   
                    {this.state.message}
                </header>
               
            </div>
        );
    }

}



export default SpringHttp