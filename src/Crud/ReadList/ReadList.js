import React from "react";

const ReadList = ({ data, handleRemove }) => {
  //console.log(data);
  //  const sum =data.reduce ((prevvalue, currvalue)=>{
  //     prevvalue.push(data.income)
  //     return (prevvalue)
  //  },[])
  // console.log((data.reduce((a,v) =>  a = a + v.income , 0 )))
  const totalIncome = data.reduce((prevvalue, currentValue) => {
    //console.log("a", prevvalue);
    //console.log("b", currentValue.income);
    return (prevvalue = prevvalue + currentValue.income);
  }, 0);
  //console.log("Total Income is", totalIncome);
  return (
    <>
      <div className="ReadList">
        <h3>Read List </h3>
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Age</th>
              <th scope="col">Income</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{item.id}</th>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.age}</td>
                    <td>{item.income}</td>
                    <td><button>Add</button></td>
                    <td><button onClick={()=>handleRemove(item.id)}>Delete</button></td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="">
        <h3>Total Income with reduce method</h3>

        <h4>{totalIncome}</h4>
      </div>
    </>
  );
};

export default ReadList;
