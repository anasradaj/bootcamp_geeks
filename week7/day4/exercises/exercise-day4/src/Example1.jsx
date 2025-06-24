import React, { Component } from 'react';
import data from './complexData.json';

class Example1 extends Component {
  render() {
    return (
      <div>
        <h3>Social Medias</h3>
        <ul>
          {data.SocialMedias.map((url, idx) => (
            <li key={idx}>
              <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;