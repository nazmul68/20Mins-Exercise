import React from "react";

const QuestionAns = () => {
  return (
    <div className="container my-5 text-light w-75 bg-dark p-5 rounded">
      <h2 className="text-info text-center mb-5">
        Lets Explore some important Interview Question!!
      </h2>
      <div>
        <h4>How does React works?</h4>
        <p>
          React is a javascript library , ReactJS divides the UI into isolated
          reusable pieces of code known as components. React components work
          similarly to JavaScript functions as they accept arbitrary inputs
          called properties or props. It's possible to have as many components
          as necessary without cluttering uor code.
        </p>
      </div>
      <div>
        <h4>Props Vs State?</h4>
        <p>
          Props are used to pass data from one component to another. The state
          is a local data storage that is local to the component only and cannot
          be passed to other components. The this.setState property is used to
          update the state values in the component.
        </p>
      </div>
      <div>
        <h4>What does UseEffect work other than loading data?</h4>
        <p>
          UseEffect is not only used on fetching or loading data but also add
          event listener for a button ,Perform an action when state or props
          change also used Clean up event listeners when the component
          unmounts.Moreover The useEffect Hook allows us to replace repetitive
          component lifecycle code. Essentially, a Hook is a special function
          that allows you to “hook into” React features. Hooks are a great
          solution if we hsve previously written a functional component and
          realize that we need to add state to it.
        </p>
      </div>
    </div>
  );
};

export default QuestionAns;
