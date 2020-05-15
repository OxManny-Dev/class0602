import { INCREMENT, DECREMENT } from '../types';


// Create action creator

// An action creator is just a function that returns an object
// That object must have a type property

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};
