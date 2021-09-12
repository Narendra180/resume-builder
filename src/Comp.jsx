function Comp({id, deleteComp}) {
    // console.log(id)
    return (
        <div>
            <h1>Hello, id is {id}</h1>
            <button onClick= {() => deleteComp(id)}>
                Deletecomp
            </button>
        </div>
    )
}

export default Comp;