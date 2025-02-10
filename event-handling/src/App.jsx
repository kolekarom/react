import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
function handleclick(){
  alert("i am clicked");
}
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
// function handlemouse(){
//   alert("i am hovered");
// }

//   return (
//    <div>

//     <p onMouseOver={handlemouse}>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias harum cupiditate labore atque? Officia quaerat assumenda, totam ex optio odit aliquid sint facere quam repellat?
//     </p>
//     <button onClick={handleclick}>
//       click me
//     </button>
//    </div>
  )
}

export default App
