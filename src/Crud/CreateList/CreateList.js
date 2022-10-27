import React, { useState } from "react";

const CreateList = ({dataObjCallback}) => {
  const inputjson = {
    firstName: "",
    lastName: "",
    age: null,
    income: null,
    id: null
  };
  
  const [formObj, setFormObj] = useState(inputjson);
  //console.log("first", formObj)

  const handleChange = (e) => {
    const {name, value} = e.target;
    //console.log("name", e.target.name);
    //console.log("value",e.target.value)
    // setFormObj ({...formObj, [name]:value})
    // console.log("first", setFormObj)
    setFormObj({ ...formObj, [name]: name === "firstName" || name === "lastName" ? value : parseInt(value),
  });
  };
 const handleSubmit = (e) =>{
    e.target.reset();
    e.preventDefault();
    if (
        formObj.firstName &&
        formObj.lastName &&
        formObj.age &&
        formObj.income &&
        formObj.id
        ) {
        
       setFormObj(inputjson)
        dataObjCallback(formObj);
        
      }
    else {
        window.alert("fill data")
    }
  }
  return (
    <>
      <div className="CreateList">
        <h3>Create List</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter First Name"
              name="firstName"
              value={formObj.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Last Name"
              name="lastName"
              value={formObj.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Your Age</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Age "
              name="age"
              value={formObj.age === null ? '' : formObj.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Income</label>
            <input
              type="text"
              className="form-control"
              placeholder="your income"
              name="income"
              value={formObj.income === null ? '' : formObj.income}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Id</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter unique id"
              name="id"
              value={formObj.id === null ? '' : formObj.id}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-success form-control mt-2">
            Add User
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateList;
