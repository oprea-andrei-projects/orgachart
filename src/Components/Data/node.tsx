import React from 'react';
import {Card} from './node.styles';
import { Person } from '../models/person';

export interface Data {
  person:Person;
}


const MyComponent: React.FC<Data> = ({ person }) => {
  return (
    <Card>
      <h2>Mr/Ms {person.name}</h2>
      <p>You are {person.position} of this company</p>
      <p> The {person.department} department</p>
    </Card>
  );
};

export default MyComponent;
