# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a javascript library that helps build web applications that can change data without reloading the page. React uses components that help make the code DRY. It creates a virtual DOM and updates only modified elements in the native DOM to reduce browser load.


2. Describe component state.

A component state is a piece of data that is used to change the behavior/appearance of a component. When the state is being changed, React renders the component again.


3. Describe props.

Props are variables that are passed into component functions / component constructors. Those props in turn can be passed to its child components.


4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

A side effect in React is a function that is invoked after the component is rendered. It has access to the component variables. A side effect can be invoked after first render, after every render or on state change. To do that, an array with states must be passed as a second argument to a useEffect method.
