function Todo({todo,index,remove}){
  function handle(){
    remove(index); // this removes an item from the to-do list
  }
  return <div className="todo" onClick={handle}>{todo.text} (-)</div>
}
