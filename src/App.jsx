
import './App.css';
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';
import Modal from './components/Modal.jsx';
import Counter from './components/counter.jsx'
import React, {useState, useEffect} from 'react';

function App() {
  const [showModal, setShowModal] = useState(false) 

  function onTodoDelete() {
    setShowModal(true)
    console.log('onTodoDelete()')
  }

  function cancelModal () {
    setShowModal(false)
  }

  function confirmModal () {
    setShowModal(false)
  }

  return (
    <div>
      <Title/>
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
}}/>
      <button onClick={()=> setShowModal(true)}>Add todo</button>
      </div>
      <div className='todo__wrapper'> 
      <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified"/>
      <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section"/>
      <Todo onTodoDelete={onTodoDelete} title="Land a $100k job!"/>
      </div>
      {setShowModal && <Modal cancelModal = {cancelModal} confirmModal = {confirmModal} title="Confirm Delete?"/>}
      {/* <Modal title="Are you sure you want to add?"/> */}
    </div>
  );
}

export default App;


// import logo from './logo.svg';


        /* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */

          // 1. Create a counter.jsx Component
  // 2. Create a default `count` of 0
  // 3. Create a button to increment `count` by 1
  // 4. Create a button to decrement `count` by 1
  // 5. Import your Counter in App.jsx and test it


  // return <Counter/>
  // const [isModalOpen, setShowModal] = useState(false)


  // function toggleModal() {
  //   isModalOpen = !isModalOpen
  //   console.log(isModalOpen)
  // }