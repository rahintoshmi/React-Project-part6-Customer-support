## 1. What is JSX and why is it used?
**Answer:** JSX is a way to write HTML inside JavaScript. It makes React code easier to read and lets us design UI in a simple way.

**Example:**
```jsx
const element = <h1>Hello, JSX!</h1>;
````
---
## 2. What is the difference between State and Props?

**Answer:**

* **State**: Data that belongs to a component and can change over time.
* **Props**: Data passed from one component to another and they cannot be changed by the receiving component.

**Example:**

```jsx
// State example
function Counter() {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

// Props example
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
<Welcome name="Rahin" />;
```

---

## 3. What is the useState hook and how does it work?

**Answer:** `useState` is a React hook that lets us add state to a function component. It gives two things: a value (current state) and a function to update that value.

**Example:**

```jsx
function Toggle() {
  const [isOn, setIsOn] = React.useState(false);
  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}
```

---

## 4. How can you share state between components in React?

**Answer:** I can lift the state up to a common parent component and pass it down as props or use context for sharing across many components.

**Example:**

```jsx
function Parent() {
  const [message, setMessage] = React.useState("Hi");

  return <Child message={message} />;
}

function Child({ message }) {
  return <p>{message}</p>;
}
```

---

## 5. How is event handling done in React?

**Answer:** Event handling is done by adding functions (event handlers) to JSX elements like `onClick={handleClick}`. React uses Camelcase names for events.

**Example:**

```jsx
function ClickMe() {
  function handleClick() {
    alert("Button Clicked!");
  }
  return <button onClick={handleClick}>Click</button>;
}
```
