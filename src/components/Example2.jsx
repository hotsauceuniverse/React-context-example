// 데이터를 Get 하기(2) - class

import React from 'react';
import PersonContext from '../contexts/PersonContext';

export default class Example2 extends React.Component {
  static contextType = PersonContext
  render() {
    const persons = this.context
    return (
      <ul>
        {persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    )
  }
}

// 단점 : 여러개를 지정할 수 없다.