
import './App.css'
import Counter from './counter'
import Batsman from './Batsman'

function App() {

  function handleClick() {
    alert('I am Clicked')
  }

  const handleClick3 = () => {
    alert('clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }


  return (
    <>
      <h1>Vite + React</h1>

      <Batsman></Batsman>  
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button> 
      <br /> <br />
      <button onClick={function handleClick2(){
        alert('clicked 2')
      }}>Click Me 2</button>

      <button onClick={handleClick3}>Click Me 3</button>

      <button onClick={() => alert('Click Me i am number 4')}>Clock Me four 4</button>

      <button onClick={() => handleAdd5(45)}>Click add 5</button>

    </>
  )
}

export default App
