import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import moment from 'moment';
import 'moment/locale/fi';

export default function GridComponent(props) {

    moment.locale('fi');

    const formatDate = (date) => {
        return (
            <div>
                {moment(date.value).format('L')}
            </div>
        )
    }

    const filterParams = {
        comparator: function (filterLocalDateAtMidnight, cellValue) {

            var cellDate = new Date(cellValue)

            if (filterLocalDateAtMidnight.toDateString() === cellDate.toDateString()) {
                return 0;
            }
        
            if (cellDate < filterLocalDateAtMidnight) {
                return -1;
            }
        
            if (cellDate > filterLocalDateAtMidnight) {
                return 1;
            }
        }
    }

    const customerGridOptions = {
        columnDefs: [
            { headerName:'First Name', field:'firstname'},
            { headerName:'Last Name', field:'lastname'},
            { headerName:'Street Address', field:'streetaddress'},
            { headerName:'Postcode', field:'postcode'},
            { headerName:'City', field:'city'},
            { headerName:'Email', field:'email'},
            { headerName:'Phone', field:'phone'}
        ],
        defaultColDef: {
            width: 175,
            editable: true,
            filter: 'agTextColumnFilter',
            sortable: true,
            floatingFilter: true,
            suppressMenu: true,
        },        
    }

    const trainingGridOptions = {
        columnDefs: [
            { headerName:'Date', field: 'date', cellRendererFramework: formatDate, cellRendererParams: 'date', filter: 'agDateColumnFilter', width: 250, filterParams: filterParams},
            { headerName:'Duration', field:'duration'},
            { headerName:'Activity', field:'activity'},
           
        ],
        defaultColDef: {
            width: 175,
            editable: true,
            filter: 'agTextColumnFilter',
            sortable: true,
            floatingFilter: true,
            suppressMenu: true,
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