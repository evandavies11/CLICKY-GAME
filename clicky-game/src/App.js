import React, { Component } from "react";
import DudeCard from "./components/DudeCard";
//import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./dudes.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (

      <div>
        <Title>Space-Click-Game></Title>/>
        {this.state.friends.map(friend => (
          <DudeCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            count={this.state.count}
            handleIncrement={this.handleIncrement}
          />
        ))}
      </div>

    );
  }
}

export default App;
