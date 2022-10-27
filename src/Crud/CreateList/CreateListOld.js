import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const CreateListOld = () => {
  const [entries, seEntries] = useState({
      firstName:"",
      lastName:"",
      age:"",
      income:""
  })
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [age, setAge] = useState("");
  // const [income, setIncome] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    seEntries({ ...entries, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecords ={...entries}
    console.log(newRecords);
    // const ids = uuid();
    // let uniqueId = ids.slice(0, 8);
    // let a = firstName;
    // let b = lastName;
    // let c = age;
    // let d = income;
  };
  return (
    <>
      <div className="ReadList">
        <h3>Create List </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              onChange={handleChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              LastName
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Age
            </label>
            <input
              type="text"
              className="form-control"
              id="age"
              name="age"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Income
            </label>
            <input
              type="number"
              className="form-control"
              id="income"
              name="income"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateListOld;
