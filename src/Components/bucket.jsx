import { useState } from "react";

function Bucket(){
    let [str, setStr] = useState("");
    let [list, setList] = useState([]);
    let [readItems, setReadItems] = useState([]); // Track read items

    function read(e){
        setStr(e.target.value);
    }

    let add = (e) => {
        e.preventDefault();
        setList([...list, str]);
        setStr(""); // Clear input after adding to list
    };

    let edit = (value, index) => {
        let pr = prompt(`Edit ${value}`);
        let arr = [...list];
        arr.splice(index, 1, pr);
        setList(arr);
    };

    let del = (value, index) => {
        let arr = list.filter((val) => val !== value);
        setList(arr);
    };

    let markAsRead = (index) => {
        // Toggle read status
        if (readItems.includes(index)) {
            setReadItems(readItems.filter((i) => i !== index));
        } else {
            setReadItems([...readItems, index]);
        }
    };

    return (
        <>
            <h1>Your Bucket List</h1>

            <form onSubmit={add}>
                <input 
                    type="text" 
                    onChange={read} 
                    value={str} // Bind input to str state
                />
                <input type="submit" value="Add" />
            </form>

            <ol>
                {list.map((val, ind) => (
                    <div key={ind}>
                        <li 
                            style={{
                                textDecoration: readItems.includes(ind) ? "line-through" : "none"
                            }}
                        >
                            {val}

                            <button onClick={() => edit(val, ind)}>Edit</button>
                            <button onClick={() => del(val, ind)}>Delete</button>
                            <button onClick={() => markAsRead(ind)}>
                                {readItems.includes(ind) ? "Unmark" : "Mark as Read"}
                            </button>
                        </li>
                    </div>
                ))}
            </ol>
        </>
    );
}

export default Bucket;
