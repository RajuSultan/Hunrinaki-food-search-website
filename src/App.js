import logo from './logo.svg';
import './App.css';
import Products from './Products/Products';

function App() {
  return (
    <div className="main-Box">
      <h1>Hunrinaki</h1>
      <Products></Products>
      <div className='question'>
        <h1>Question</h1>
        <h3>How React works?</h3>
        <p>React is a declarative, efficient, and versatile JavaScript library for building user interfaces. It permits you to compose complicated UIs from tiny and isolated items of code known as “components”.

          React includes a few totally different varieties of parts, however we’ll begin with React.Component subclasses. We’ll get to the funny XML-like tags before long. we tend to use parts to inform React what we would like to check on the screen. once our knowledge changes, React can with efficiency update and re-render our Component.</p>
        <h3>Difference between props and state?</h3>
        <p> State - it's a special changeable property that hold a component information. it's default value once component mounts.
          Props - it's a special property that is immutable naturally and utilized in case of travel price from parent to kid. props ar simply a line between parts, perpetually moving from top (parent) to buttom (child).

          The difference is that state is something like attributes in OOP. it's something native to a category (component), accustomed higher describe it. Props ar like parameters - they're passed to a component from the caller of a component (the parent) : as if you known as a perform with bound parameters.
        </p>
        <h3>How useState works?</h3>
        <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
          It’s especially useful for local component state, but larger projects might require additional state management solutions.</p>
      </div>

    </div>
  );
}

export default App;
