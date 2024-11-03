import { useState } from "react";

function Todo() {
  // State to handle form inputs
  const [state, setState] = useState({
    user: "",
    pass: "",
    arr: [],
  });

  // State to store form submissions
  // const [submissions, setSubmissions] = useState([]);

  function change(e) {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function del(val, index) {
    let delArr = state.arr.filter((val, ind) => {
      return index != ind;
    });

    setState((prevState) => ({
      arr: delArr,
    }));
  }

  function edit(val, ind) {
    let pr = prompt("Enter Username " + val.user);
    let pr1 = prompt("Enter password " + val.pass);

    let obj1 = {
      user: pr,
      pass: pr1,
    };

    state.arr.splice(ind, 1, obj1);

    setState((prevState) => ({
      arr: state.arr,
    }));
  }

  function enter(e) {
    e.preventDefault();
    let obj = { user: state.user, pass: state.pass };

    setState((prevState) => ({
      ...prevState,
      // {console.log(prevState)},

      arr: [...prevState.arr, obj],
    }));

    // Clear the form inputs after submission
    // setState(prevState => ({
    //     ...prevState,
    //     user: "",
    //     pass: ""
    // }));
  }

  return (
    <>
      <h1>Your TODO List</h1>
      <form onSubmit={enter}>
        <input
          type="text"
          name="user"
          onChange={change}
          placeholder="Username"
        />
        <input
          type="text"
          name="pass"
          onChange={change}
          placeholder="Password"
        />
        <input type="submit" value="Submit" />
      </form>
      {console.log(state.arr)}

      {state.arr.map((item, index) => (
        <ol key={index}>
          <li>User: {item.user}</li>
          <li> Pass: {item.pass}</li>
          <button
            onClick={() => {
              del(item, index);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              edit(item, index);
            }}
          >
            Edit
          </button>
        </ol>
      ))}
    </>
  );
}

export default Todo;
