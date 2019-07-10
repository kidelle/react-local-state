import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'

class App extends Component {
/*
  // Class constructor, takes in props which we will talk about later
  constructor(props) {
    // Call our parent class constructor
    super(props);

    // Create our local component state - this will hold our message to show
    this.state = {
      message: 'React is Fun!'
    }
  }*/

  // Shortcut way to create a component with local state
  state = {
    newMessage: {
      message: '',
      user: ''
    },
    history: []
  }

/* Don't write functions this way - `this` is undefined
  handleChange(event) {
    console.log(event.target.value);
    this.setState( 'blah' );
  }*/

    // Arrow functions make sure `this` works correctly
   /*handleChange= (event) => {
    console.log(event.target.value);
    this.setState( { message: event.target.value} );
  
   }*/

   handleClick = () => {
     // Console log out what the message should be...
     // how??? Look at state!
     
    
    // You might think we should *push* into our array in state,
    // because we've done that in the past BUT Don't!
     /* this.state.history.push({
       user: this.state.user,
       message: this.state.message
     })*/
     // State expects a new object/array - use ... or spread to get the old values
     this.setState({
       newMessage: {
         user: '',
         message: ''
       },
       history: [...this.state.history, 
       this.state.newMessage,
        ]
     })
     // WARNING - setState is asyncronous so this may still log old state
     // Correct place to console log is in the 
     console.log(this.state);
   }
   /*
   handleUser= (event) => {
    console.log(event.target.value);
    this.setState( { user: event.target.value} );
   }*/

   handleChange = (event, propertyToChange) => {
     console.log(event.target.value);
     this.setState ({ 
       newMessage: {
        ...this.state.newMessage,
      [propertyToChange]: event.target.value } 
    });
   }
   // Show the last thing from history
renderMessge = () => {
  let stuffToShow = '';
  if (this.state.history.length > 0) {
  let lastThingFromHistory = this.state.history[this.state.history.length-1]
  stuffToShow = <p>{lastThingFromHistory.user} : {lastThingFromHistory.message}</p>
  }
  return stuffToShow;
}


// Every time the component local state changes render is called.
render () {
  console.log('in render, current.state:', this.state);
  return (
    <div className="App">
       <Header /> 
       < main >
       <input type="text" value={this.state.newMessage.user}
          onChange={ (event)=> this.handleChange(event, 'user')}/>
       <input type="text" value={this.state.newMessage.message}
           onChange={ (event)=> this.handleChange(event, 'message') }/>
       <button onClick={this.handleClick}>Submit</button>

       
      {/*this.state.newMessage.user !== '' ?
     <p> {this.state.newMessage.user} : {this.state.newMessage.message}</p>
     : ''
  */}
  
    <div>
       {/* {JSON.stringify(this.state)} */}
       <h2>Message History</h2>
      <ul>
        { this.state.history.map( (item, i )=> 
          <li key={i}>{item.user} : {item.message}</li>
          )}
      </ul>
     
    </div>
    </main> 
   
    </div>
  )
}
}



export default App;
