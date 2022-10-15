import React from 'react'
import { useState } from 'react'
import Axios from 'axios';

export default function Form1() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("0");
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [wage, setWage] = useState("0");

    const displayInfo = () => {
        console.log(name + age + country + position + wage)
    };

    const addForm = () => {
        Axios.post('http://localhost:3000/create');
    }

    return (

        <div className="div1">
            <label>Name    :</label>
            <input type="text" onChange={(event) => { setName(event.target.value); }} /><br /><br />
            <label>Age    :</label>
            <input type="number" onChange={(event) => { setAge(event.target.value); }} /><br /><br />
            <label>Country    :</label>
            <input type="text" onChange={(event) => { setCountry(event.target.value); }} /><br /><br />
            <label>Position    :</label>
            <input type="text" onChange={(event) => { setPosition(event.target.value); }} /><br /><br />
            <label>Wage (Year) Rs  =  </label>
            <input type="number" onChange={(event) => { setWage(event.target.value); }} /><br /><br />
            <button className="button1" onClick={displayInfo}>Add Employee</button>
            <button className="button2" onClick={addForm}>Add Data in Form</button>

            {/* <button className="button1">Add Employee</button> */}

        </div>
    )
}



