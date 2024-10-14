import React, { useState } from 'react'


export default function Usestate() {
    // const[data,setdata]=useState("black")
    const [data, setdata] = useState({
        carname: "Range rover velar",
        edition: "Black edition",
        parentbrand: "Tata",
        price: "0.86 cr",
        modalof: "2023"

    })
    return (
        <div>
            {/* <h1>The color of the car is : {data}</h1> */}
            <h1>Details of your car.</h1>
            <h3>Car name : {data.carname} <br />
                Edition : {data.edition} <br />
                Car's parent brand : {data.parentbrand} <br />
                price : {data.price} <br />
                Car modal : {data.modalof} </h3>
        </div>
    )
}
