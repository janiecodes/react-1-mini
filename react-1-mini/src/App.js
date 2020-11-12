import React, { Component } from 'react';
import './App.css';

//The goal of this project is to create a simple interface for creating 
//a list of friends with their name and picture.
class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

  updatePicture = (value) => {
    this.setState({
      picture: value
    });
  }

  updateName = value => {
    this.setState({
      name: value
    })
  }

  //does not take in any parameters
  //we update state using setState
  //can't use .push bc you cant mutate or change state
  //change the friends array 
  //[...friends] whatever is already existing on the friends array; the spread operator makes a copy
  //{name, picture}: this adds an object with a name and picture property
  //then clear out the input fields so name and picture = an empty string
  addFriend = () => {
    const {name, picture, friends} = this.state;
    this.setState({
      friends: [...friends, {name, picture}],
      name: '',
      picture: ''
    })
  }

  render(){
    //this makes the list of friends visible
    //map through the friends array on state
    //map will loop through the array for every single element in the array
    //in this case, the coe we want to run is a callback function that returns 
    //we need to see what the name is of each element and an image
    //each element inside of the friends array is an object
    //element is each object in that array
    //each element has a name and picture property in that object
    //hence, the curly brackets 
    const mappedFriends = this.state.friends.map(element => {
      return (
      <div>
        <img width="200px" src={element.picture}/>
        <span>{element.name}</span>
      </div>
      //each mapped element will be a div with the picture and name 
    )});

    return (
      <div>
        <span>Name:</span>
        <input 
        placeholder="Name..." 
        value={this.state.name} 
        onChange={e => this.updateName(e.target.value)}/>
        
        <span>Picture:</span>
        <input 
        placeholder="Image URL..."
        value={this.state.picture}
        onChange={e => this.updatePicture(e.target.value)}/>
        
        <button onClick={() => this.addFriend()}>Add Friend</button>

        {mappedFriends}
      </div>
    )
  }
}

export default App;
