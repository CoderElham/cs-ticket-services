
### 1. What is JSX, and why is it used?
**Answer:** JSX is a syntax extension to JavaScript that allows you to write HTML-like markup within JavaScript files. Although it looks like HTML it is actually a JavaScript expression.

We are usign it because:
- Readability and Understanding
- Simplifying Dynamic Content
- Preventing Injection Attacks

### 2. What is the difference between State and Props?
**Answer**: There are between of State and Props are:

**State:** This component have own Data and it have internal memory. This can be changed within the component using ``useState`` and ``setState``. It using for Counter, toggle handling, status and user input.

**Props:** Data passed from the parent component to the child component. If recived component it can not be changed. Its read only. Used to pass data from parent to child component or to configure child component.

### 3. What is the useState hook, and how does it work?
**Answer:** ``useState`` hook is the most basic of the React Hooks, allowing you to add state, or variable data, to functional components. It acts as the component's own memory.
If you use it it will be return a Array distructuring.

Example:

```jsx
import React, { useState } from 'react';
const [count, setCount] = useState(0);
```

### 4. How can you share state between components in React?
**Answer:** To share state between components in React:

- Lift State Up
- React Context
- State Management Libraries

### How is event handling done in React?
**Answer:** In React, event handling is done using camelCase event names (like onClick, onChange). You pass a function as the event handler rather than a string. React wraps native events in a SyntheticEvent for cross-browser consistency. Event handlers receive the event object as a parameter and are typically defined as functions inside components.

```jsx
function MyButton() {
  function handleClick(event) {
    console.log('Button clicked!', event);
  }

  return <button onClick={handleClick}>Click me</button>;
}
```