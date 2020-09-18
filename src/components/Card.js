import React, { Component, Fragment } from "react";

class Card extends Component {
  render() {
    const profile = this.props;

    return (
      <Fragment>
      <div className="github-profile">
        <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="bio">{profile.bio}</div>
          <div className="location">{profile.location}</div>
          <div className="url">{profile.url}</div>
          <div className="twitter">{profile.twitter}</div>
        </div>
      </div>
        <hr className="line-break" />
        </Fragment>
    );

  }
}

export default Card;
