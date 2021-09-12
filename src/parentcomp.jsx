import { v4 as uuidv4 } from 'uuid';
import { useState, useRef,useEffect } from 'react';
import Comp from './Comp';

function ParentComp() {

    
    let updatedCompsArray = useRef([]);

    useEffect(() => {
        updatedCompsArray.current = compsArray;
    });

    function addComp() {
        setCompsArray(
            compsArray.concat(
                <Comp key={uuidv4()} id={uuidv4()} deleteComp={deleteComp}/>
            )
        );
    }

    function deleteComp(rid) {
        // console.log(rid)
        setCompsArray(
            updatedCompsArray.current.filter((e) => rid !== e.props.id)
        )
    }

    const [compsArray, setCompsArray] = useState(
        [<Comp key={uuidv4()} id={uuidv4()} deleteComp={deleteComp}/>]
    );

    return (
        <div>
            {compsArray}
            <button onClick= {addComp}>
                Addcomp
            </button>
        </div>
    );

}

export default ParentComp;