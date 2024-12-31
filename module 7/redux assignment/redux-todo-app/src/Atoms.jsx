// src/atoms.js
import { atom } from 'recoil';

// Atom to store the list of tasks
export const todoListState = atom({
  key: 'todoListState', // unique ID (with respect to other atoms/selectors)
  default: [],          // initial state: an empty array of tasks
});
