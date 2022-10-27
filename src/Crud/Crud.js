import React, { useState } from 'react';
import ReadList from "./ReadList/ReadList"
import CreateList from './CreateList/CreateList'

const json = [
    {
        firstName: "Renu",
        lastName: "Tayde",
        age: 24,
        income: 30,
        id: 11
    },
    {
        firstName: "Pranav",
        lastName: "Magare",
        age: 22,
        income: 30,
        id: 21 
    },
    {
        firstName: "Kanchan",
        lastName: "Singh",
        age: 24,
        income: 30,
        id: 31
    },
    {
        firstName: "Vinod",
        lastName: "jadhav",
        age: 26,
        income: 90,
        id: 31
    },
]



const Crud = (props) => {


const [list, setlist] = useState(json);
const dataObjCallback =(obj)=>{

const findIndexItem =list.findIndex((item) => item.id === obj.id);

findIndexItem === -1
  ? setlist([...list, obj])
  : alert("Id already present in table");

    
}
//Delete data
const handleRemove = (id) => {
    console.log(id);
    const newList = list.filter((item) => item.id !== id);
    setlist(newList);
  }
    return (
        <>
            <div className='Crud'>
                <div className='containerr'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <ReadList data={list} handleRemove={handleRemove} />
                        </div>
                        <div className='col-sm-6'>
                            <CreateList dataObjCallback ={dataObjCallback}/>
                        </div>
                    </div>
                </div>

            </div>
            
        </>
    )
}

export default Crud