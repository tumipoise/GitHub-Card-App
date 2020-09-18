import React, { Component } from "react";

class Card extends Component {
    render() {
      
const profile = this.props

    return (
      <div className="github-profile">
        <img src={profile.avatar_url} />
        <div className="info">
                <div className="name">{profile.name}</div>
          <div className="company">{profile.bio}</div>
          <div className="company">{profile.location}</div>
          <div className="company">{profile.url}</div>
          <div className="company">{profile.twitter}</div>
        </div>
      </div>
    );
  }
}

export default Card;
