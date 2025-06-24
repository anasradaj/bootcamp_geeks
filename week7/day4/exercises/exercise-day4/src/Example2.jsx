import React, { Component } from 'react';
import data from './complexData.json';

class Example2 extends Component {
  render() {
    return (
      <div>
        <h3>Skills</h3>
        {data.Skills.map((area, idx) => (
          <div key={idx}>
            <strong>{area.Area}</strong>
            <ul>
              {area.SkillSet.map((skill, i) => (
                <li key={i}>
                  {skill.Name} {skill.Hot ? <span style={{color: 'red'}}>(Hot)</span> : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;