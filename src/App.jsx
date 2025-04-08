import Counter from './counter'
import Batsman from './Batsman'
import Users from './Users'
import Friends from './Friends'
import './App.css'
import { Suspense } from 'react'

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const fetchFriends = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}


function App() {

  const friendsPromise = fetchFriends();

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

      <Suspense fallback={<h2>Friends are coming for treat.</h2>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      

      {/* <Suspense fallback={<h2>Loading...</h2>}>
        <Users fetchUsers ={fetchUsers}></Users>
      </Suspense> */}

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
