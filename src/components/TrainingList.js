import React, { useState, useEffect } from 'react';
import GridComponent from './GridComponent';
import AppBarComponent from './AppBarComponent';

export default function TrainingList() {

    const [trainings, setTrainings] = useState([]);

    const fetchData = () => {
        fetch("https://customerrest.herokuapp.com/api/trainings")
        .then(res => res.json())
        .then(data => setTrainings(data.content))
    }
 
    useEffect(fetchData, []);

    return (
        <div>
            <AppBarComponent fetchData={fetchData}/>
            <div style={{display: 'flex', justifyContent:'center'}}>
                <GridComponent fetchDataTrainings={fetchData} variant="trainings" data={trainings}/>
            </div>
        </div>
    )
}