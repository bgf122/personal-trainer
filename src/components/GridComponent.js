import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import moment from 'moment';
import 'moment/locale/fi';
import AddTraining from './AddTraining';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

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

    const addTrainingButton = (params) => {
        return (
            <AddTraining fetchData={props.fetchData} customer={params}/>
        )

    }

    const editButton = (params) => {
        return (
            <EditButton data={params.data} fetchData={props.fetchData}/>
        )
    }

    const deleteButton = (params) => {
        return (
            <DeleteButton data={params.data} fetchData={props.fetchData} fetchDataTrainings={props.fetchDataTrainings}/>
        )
    }

    const customerGridOptions = {
        columnDefs: [
            { headerName:'', field:'', cellRendererFramework: editButton , cellRendererParams: '', filter: false, sortable: false, width: 40, cellStyle: {padding: 0, textAlign: 'center'}},
            { headerName:'', field:'', cellRendererFramework: deleteButton, cellRendererParams: '', filter: false, sortable: false, width: 40, cellStyle: {padding: 0, textAlign: 'center'}},
            { headerName:'First Name', field:'firstname'},
            { headerName:'Last Name', field:'lastname'},
            { headerName:'Street Address', field:'streetaddress'},
            { headerName:'Postcode', field:'postcode'},
            { headerName:'City', field:'city'},
            { headerName:'Email', field:'email'},
            { headerName:'Phone', field:'phone'},
            { headerName: '', field: '', cellRendererFramework: addTrainingButton, cellRendererParams: '', filter: false, sortable: false,}
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
            { headerName:'', field:'', cellRendererFramework: deleteButton, cellRendererParams: '', filter: false, sortable: false, width: 40, cellStyle: {padding: 0, textAlign: 'center'}},
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
                rowHeight={45}
                gridOptions={customerGridOptions}
                domLayout='print'
                rowData={props.data}/> : 
            <AgGridReact 
                rowHeight={45}
                gridOptions={trainingGridOptions}
                domLayout='print'
                rowData={props.data}/>}
        </div>
    )
}