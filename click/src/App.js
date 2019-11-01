import React from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json"
import FriendCard from "./components/FriendCard";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {friends.map(friends =>
        <FriendCard {...friends} />
      )}
    </Wrapper>
  );
}

export default App;
