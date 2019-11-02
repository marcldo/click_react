import React from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json"
import FriendCard from "./components/FriendCard";

class App extends React.Component {

  state = {
    shuffledFriends: [],
    clickedId: null
  };

  componentDidMount() {
    this.shuffle(friends);
  }

  imageSelected(id) {


    if (id === this.state.clickedId) {
      console.log("whoa")
    }

    this.setState({ clickedId: id })
    this.shuffle(friends);


  }

  shuffle(friends) {
    this.setState({ shuffledFriends: friends.sort(() => Math.random() - 0.5) });
  }

  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {
          this.state.shuffledFriends.map(friend =>
            <FriendCard key={friend.id} handleClick={() => this.imageSelected(friend.id)} {...friend} />
          )
        }
      </Wrapper >
    );
  };
}

export default App;
