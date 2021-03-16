import React, { useState, useEffect } from 'react';
import GridComponent from './GridComponent';

export default function TrainingList() {

    const [trainings, setTrainings] = useState([]);

    const fetchData = () => {
        fetch("https://customerrest.herokuapp.com/api/trainings")
        .then(res => res.json())
        .then(data => setTrainings(data.content))
    }
 
    useEffect(fetchData, []);

    return (
        <div style={{display: 'flex', justifyContent:'center'}}>
            <GridComponent variant="trainings" data={trainings}/>
        </div>
    )
}