function TodoOutput(props) {
  return (
    <div className="TodoOutput">
      <p onClick={props.delete}>{props.toDo}</p>
    </div>
  );
}

export default TodoOutput;