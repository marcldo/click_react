import React from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json"
import FriendCard from "./components/FriendCard";

class App extends React.Component {

  state = {
    shuffledFriends: [],
    clickedId: null,
    title: "Click an image"
  };

  componentDidMount() {
    this.shuffle(friends);
  }

  imageSelected(id) {


    if (id === this.state.clickedId) {
      console.log("whoa");
      this.setState({ title: "You Guessed Wrong" });
    } else {
      this.setState({ title: "You Guessed Right!" });
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
        <Title>{this.state.title}</Title>
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
