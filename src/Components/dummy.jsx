import { useState } from "react";


function Bucket(){
    let [str,setStr]=useState("")
    let [list,setList]=useState([])


    function read(e){
        // console.log();

        setStr(e.target.value)
        
    }

    let add=(e)=>{
        e.preventDefault()

        setList([...list,e.target[0].value])
        setStr("")
        
    }

    let edit=(value,index)=>{
        let pr=prompt(`Edit ${value}`)

        let arr=[...list]

        arr.splice(index,1,pr)

        setList(arr)
    }

    let del=(value,index)=>{

        let arr=list.filter((val,ind)=>{
            return val!=value
        })

        setList(arr)

    }



    return (
        <>

        {/* {console.log(list)
        } */}
        <h1>Your Bucket List</h1>

        <form action="" onSubmit={add} >
            <input type="text"  onChange={read} value={str} />
            <input type="submit" value="Add" />
        </form>

        <ol>
        {
            list.map((val,ind)=>{
                return (
                    // console.log(val)
                    
                       <div key={ind}>
                         <li>{val}

                            <button onClick={()=>{edit(val,ind)}}>
                            Edit
                            </button>

                            <button onClick={()=>{del(val,ind)}}>Delete</button>

                         </li>
                       </div>
                   
                    
                )
            })
        }
        </ol>
        </>
    )
}

export default Bucket