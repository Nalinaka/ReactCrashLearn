import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
// import About from "./pages/About.jsx";
// import Contact from "./pages/Contact.jsx";
import Nav from "./components/nav.jsx";
import Users from "./pages/Users.jsx";

function App() {

  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users/:username" element={<Users/>} />
        {/* <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} /> */}
      </Routes>
    </Router>

  )
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

// import Todo from "./components/Todo.jsx";
// import Title from "./components/Title.jsx";
// import Modal from "./components/Modal.jsx";
// import Counter from "./components/counter.jsx";

// underneath the function App: 

  // const [showModal, setShowModal] = useState(false);

  // function confirmModal () {
  //   setShowModal(false);
  // }


  // useEffect (() => {
  //   console.log('ONLY on mount')
  //   setShowModal(!showModal)
  // }, [])


  // useEffect (() => {
  //   console.log(`on mount AND on ${showModal}`)
  //   // setShowModal(!showModal)
  // }, [showModal])


 
  // useEffect (() => {
  //   console.log('EVERY render')
  //   // setShowModal(!showModal)
  // })


  // NEVER USE THIS - IT IS AN INFINITE LOOP IF SETSHOWMODAL ISN'T COMMENTED OUT
  // useEffect (() => {
  //   console.log()
  //   setShowModal(!showModal)
  // }, [])


  // function onTodoDelete() {
  //   setShowModal(true);
  //   console.log("onTodoDelete()");
  // }

  // function cancelModal() {
  //   setShowModal(false);
  // }

  // function confirmModal() {
  //   setShowModal(false);
  // }

//   return (

//     <div>
//     <Title />
//     <div>
//       <input
//         type="text"
//         onChange={(event) => {
//           console.log(event.target.value);
//         }}
//       />
//       <button onClick={() => setShowModal(true)}>Add todo</button>
//     </div>
//     <div className="todo__wrapper">
//       <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
//       <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" />
//       <Todo onTodoDelete={onTodoDelete} title="Land a $100k job!" />
//     </div>
//     {setShowModal && (
//       <Modal
//         cancelModal={cancelModal}
//         confirmModal={confirmModal}
//         title="Confirm Delete?"
//       />
//     )}
//     {/* <Modal title="Are you sure you want to add?"/> */}
//   </div>
//   );
// }

// export default App; ...