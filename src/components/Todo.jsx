import './Todo.css';

function Todo ({title, onTodoDelete }) {

  
    return (
        <div className="todo">
        <p>{title}</p>
        {/* <p>{paragraph}</p> */}
        <button onClick={onTodoDelete}>Delete</button>
      </div>
    );
}

export default Todo;

  // function deleteTodo(id) {
  //   console.log('deleteTodo()', title)
  // }