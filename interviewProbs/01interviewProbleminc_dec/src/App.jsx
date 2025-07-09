import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

/*
  REACT STATE UPDATE BEHAVIOR DEMONSTRATION
  
  This component demonstrates the difference between two approaches to updating state:
  
  1. FUNCTIONAL UPDATES (addVal function):
    - Uses callback functions: setCount(prevCount => prevCount + 1)
    - Each update receives the latest state value
    - Multiple calls in one function will accumulate (4 calls = +4 total)
    - This is the CORRECT way for multiple state updates
  
  2. DIRECT STATE UPDATES (subVal function):
    - Uses current state variable: setCount(count - 1)
    - All updates use the same initial state value from current render
    - Multiple calls in one function will NOT accumulate (4 calls = -1 total)
    - This demonstrates a common React mistake
  
  KEY LEARNING:
  - React batches state updates in event handlers
  - State variables don't update until the next render
  - For multiple updates, always use functional form: setState(prev => prev + 1)
*/

function App() {
  // Initialize counter state with value 15
  const [count, setCount] = useState(15);

  // Function to increment counter - demonstrates React state batching
  const addVal = () => {
    // FUNCTIONAL UPDATE APPROACH (Recommended)
    // Each setCount uses a callback function (prevCount) => prevCount + 1
    // This ensures each update gets the latest state value from the previous update
    // Result: Counter increases by 4 (1+1+1+1)
    setCount((count) => count + 1); // count = 15 + 1 = 16
    setCount((count) => count + 1); // count = 16 + 1 = 17
    setCount((count) => count + 1); // count = 17 + 1 = 18
    setCount((count) => count + 1); // count = 18 + 1 = 19

    // DIRECT STATE UPDATE (Problematic - commented out)
    // If we used: setCount(count+1) instead
    // All four calls would use the same 'count' value (15)
    // Result: Counter would only increase by 1 (15+1=16)
    // This happens because 'count' doesn't update until the next render
    // setCount(count+1);  // Would all use count=15, final result=16
  };
  // Function to decrement counter - demonstrates INCORRECT state handling
  const subVal = () => {
    // DIRECT STATE UPDATE (Problematic)
    // Using 'count' directly instead of functional update
    // All four setCount calls use the same 'count' value from current render
    // If count is 19, all calls use 19: 19-1=18
    // Result: Counter decreases by only 1, not 4
    // This is the WRONG way to update state multiple times
    setCount(count - 1); // Uses current count (e.g., 19) -> 18
    setCount(count - 1); // Still uses current count (19) -> 18
    setCount(count - 1); // Still uses current count (19) -> 18
    setCount(count - 1); // Still uses current count (19) -> 18

    // CORRECT approach would be:
    // setCount(prevCount => prevCount - 1);
    // setCount(prevCount => prevCount - 1);
    // setCount(prevCount => prevCount - 1);
    // setCount(prevCount => prevCount - 1);
  };

  return (
    <>
      <h1>React with Sundu</h1>
      {/* Display current counter value */}
      <h2>Counter val:{count}</h2>

      {/* 
        Add button: Increments by 4 each click
        Uses functional updates - each setCount gets the latest state
      */}
      <button onClick={addVal}>
        Add {count} <br />
      </button>

      {/* 
        Subtract button: Decrements by only 1 each click
        Uses direct state reference - all setCount calls use same initial value
      */}
      <button onClick={subVal}>
        Subtract {count}
        <br />
      </button>

      {/* Footer showing current count value */}
      <p>footer:{count}</p>
    </>
  );
}

export default App;

// Key Behaviors Explained:
// 1. Add Button (Increments by 4):

// . Uses functional updates: setCount(count => count + 1)
// . Each setCount call receives the latest state value from the previous update
// . Result: 4 calls = +4 total increment

// 2. Subtract Button (Decrements by only 1):

// .Uses direct state reference: setCount(count - 1)
// .All setCount calls use the same initial count value from the current render
// .Result: 4 calls = -1 total decrement (not -4 as might be expected)

// Why This Happens:
// .React State Batching: React batches multiple state updates in event handlers
// .State Variable Timing: The count variable doesn't update until the next render cycle
// .Functional Updates: When you use setCount(prevCount => prevCount + 1), React ensures each call gets the most recent state value
// .Direct Updates: When you use setCount(count - 1), all calls use the same count value that existed when the function started
