import React, { Component } from "react";
import "./App.css";
import Title from './components/Title'
import ConditionalStyle from './components/ConditionalStyle'
import CardList from './components/CardList'
import Form from './components/Form'
import axios from 'axios';

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];

class App extends Component {

  state = {
    profiles: []
  }

   addNewProfile = (profileData) => {
     this.setState(prevState => ({
  profiles: [...prevState.profiles, profileData]
}))
  }
  
  render() {
 
    return (
      <div className="container">
        <Title title="The GitHub Cards App" />
        {/* <ConditionalStyle /> */}
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
