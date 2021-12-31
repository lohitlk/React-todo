function Todo(){
    const [state, setState] = React.useState("")
    const [newList, setList] = React.useState([])
    const [isActive, setActive]= React.useState(false)

    let TodoEvent = (event)=>{
        console.log(event.target.value)
        setState(event.target.value)
    }
    let Add = (event)=>{
        console.log(state)
        newList.push(state)
        console.log(newList)
        event.preventDefault();
        setState("")
    }
    let Delete = (index)=>{
        let indexOfItem = index
        newList.splice(indexOfItem,1)
        setList([...newList])
    }
    let complete=(index)=>{
        const checkstate = isActive
        setActive(!checkstate)
    }
    return <div className="div">
        <h1>Todo List</h1><br/>
        <div className="item">
        <h5>Add Todo</h5>
        <input type="text" value={state} placeholder="Add new todo..." onChange={(event)=>{TodoEvent(event)}} />
        <button onClick={Add}>Add List</button>
        </div>
        <div >
            <ul className="ListItem">
        {newList.map((val,index)=>{
            return <li  key={val+index} className={isActive? "complete" :null}>{val} <button onClick={()=>{complete(index)}}>✔</button><button onClick={()=>{Delete(index)}}>X</button></li>
            }
        )}
        </ul>
        </div>
    </div>
}

ReactDOM.render(<Todo/>, document.getElementById("container"))