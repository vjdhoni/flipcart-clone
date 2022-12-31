import axios from "axios"

import { useState, useEffect } from "react"

export default function Crud() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [APIdata, setAPI] = useState([])

    useEffect(function () {
        axios.get('https://63a92b1a100b7737b98b4925.mockapi.io/fakeData')
            .then(function (res) {
                setAPI(res.data)
            })
    },[])

    function postData() {
        axios.post('https://63a92b1a100b7737b98b4925.mockapi.io/fakeData', {
            fname : firstName,
            lname : lastName
        }).then(function(res){
            setAPI([...APIdata , res.data])
        })

    }

    return (
        <div>
            <h3 className="my-4">Add Data</h3>



            <input className="w-50 p-1" placeholder="First Name" onChange={function (e) {
                setFirstName(e.target.value)
            }} /><br />



            <input className="w-50 my-3 p-1" placeholder="Last Name" onChange={function (e) {
                setLastName(e.target.value)
            }} /><br />

            <button type="submit" className="btn btn-primary w-50" onClick={postData}>Submit</button>


            <div className="container">
                <h3>View Datas</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            APIdata.map(function (datas , i) {
                                return (
                                    <tr key={i}>
                                        <td>{datas.id}</td>
                                        <td>{datas.fname}</td>
                                        <td>{datas.lname}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

