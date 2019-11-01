import React from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json"
import FriendCard from "./components/FriendCard";

class App extends React.Component {

  state = {
    friends
  };

  imageSelected(id) {
    console.log("clicked " + id);
  }

  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {
          friends.map(friend =>
            <FriendCard key={friend.id} handleClick={() => this.imageSelected(friend.id)} {...friend} />
          )
        }
      </Wrapper >
    );
  };
}

export default App;
