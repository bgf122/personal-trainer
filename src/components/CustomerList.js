import React, { useState, useEffect } from 'react';
import GridComponent from './GridComponent';
import AppBarComponent from './AppBarComponent';

export default function CustomerList() {

    const [customers, setCustomers] = useState([]);

    const fetchData = () => {
        fetch("https://customerrest.herokuapp.com/api/customers")
        .then(res => res.json())
        .then(data => setCustomers(data.content))
    }
 
    useEffect(fetchData, []);

    return (
        <div>
            <AppBarComponent fetchData={fetchData}/>
            <div style={{display: 'flex', justifyContent:'center'}}>
                <GridComponent fetchData={fetchData} variant="customers" data={customers}/>
            </div>
        </div>
    )
}