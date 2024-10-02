import React, { useState } from "react";

function Employees() {
  const [data, setData] = useState([
    {
      id: 101,
      name: "Samir",
      age: 19,
      address: "150 feet ring road, Rajkot",
    },
    {
      id: 102,
      name: "Sahil",
      age: 16,
      address: "behind crystal mall, Rajkot",
    },
    {
      id: 103,
      name: "Masoud",
      age: 18,
      address: "Near reliance mall, surat",
    },
    {
        id: 104,
        name: "Irshad",
        age: 16,
        address: "Veraval",
      },
      {
        id: 105,
        name: "Arshad",
        age: 19,
        address: "Veraval",
      },
  ]);

  function upddata () {
    setData([
        {
            id: 106,
            name: "Aftab shahmadar",
            age: 19,
            address: "Bada bajrang road, bag-e-asra, BA-6, Upleta",
          },
          {
            id: 107,
            name: "mahir",
            age: 16,
            address: "Jamnagar",
          },
          {
            id: 108,
            name: "Ayan",
            age: 17,
            address: "Jetpur",
          },
          {
            id: 109,
            name: "Aditya",
            age: 19,
            address: "Dhoraji",
          },
          {
            id: 110,
            name: "Alfez",
            age: 20,
            address: "Jetpur",
          },
    ])
  }

  return (
    <>
      <h1>Student Details:</h1>
      {data.map((employee) => (
        <div key={employee.id}>
          <p>
            Student ID: <b>{employee.id}</b> <br />
            Student Name: <b>{employee.name}</b> <br />
            Student Age: <b>{employee.age}</b> <br />
            Student Address: <b>{employee.address}</b>
          </p>
        </div>
      ))}
      <h2>
        <button type="button" onClick={upddata}>Click for Update</button>
      </h2>
    </>
  );
}

export default Employees;
