import React, { Component } from 'react';
import data from './complexData.json';

class Example3 extends Component {
  render() {
    return (
      <div>
        <h3>Experiences</h3>
        {data.Experiences.map((exp, idx) => (
          <div key={idx} style={{marginBottom: '1em'}}>
            <img src={exp.logo} alt={exp.companyName} width={50} style={{verticalAlign: 'middle'}} />
            <a href={exp.url} target="_blank" rel="noopener noreferrer">
              <strong>{exp.companyName}</strong>
            </a>
            <ul>
              {exp.roles.map((role, i) => (
                <li key={i}>
                  <strong>{role.title}</strong> - {role.description} ({role.startDate} to {role.endDate}, {role.location})
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;