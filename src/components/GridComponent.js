import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function GridComponent(props) {

    const customerGridOptions = {
        columnDefs: [
            { headerName:'First Name', field:'firstname'},
            { headerName:'Last Name', field:'lastname'},
            { headerName:'Street Address', field:'streetaddress'},
            { headerName:'Postcode', field:'postcode'},
            { headerName:'City', field:'city'},
            { headerName:'Email', field:'email'},
            { headerName: 'Phone', field: 'phone'}
        ],
        defaultColDef: {
            width: 175,
            editable: true,
            filter: 'agTextColumnFilter',
            sortable: true,
        },        
    }

    const trainingGridOptions = {
        columnDefs: [
            { headerName:'Date', field:'date'},
            { headerName:'Duration', field:'duration'},
            { headerName:'Activity', field:'activity'},
           
        ],
        defaultColDef: {
            width: 175,
            editable: true,
            filter: 'agTextColumnFilter',
            sortable: true,
        },        
    }

    return (
        <div className="ag-theme-alpine">
            {props.variant === "customers" ? 
            <AgGridReact
                gridOptions={customerGridOptions}
                domLayout='print'
                rowData={props.data}/> : 
            <AgGridReact 
                gridOptions={trainingGridOptions}
                domLayout='print'
                rowData={props.data}/>}
        </div>
    )
}