import Clear from '@mui/icons-material/Clear';
import { Button } from '@mui/material';
import React from 'react';
import Form from './form';


function AddForm({setIsForm, Datas, setDatas, setIsSuccess}) {

  function isHandler() {
    setIsForm(false)
  }

  return (
    <div className="addForm">
        <div className="formBox">
            <div className="employeeForm">
                <h2>Employee Form</h2>
                <Button variant='outlined' onClick={isHandler} color='error'><Clear color='error' /></Button>
            </div>
            <Form Datas={Datas} setDatas={setDatas} setIsForm={setIsForm} setIsSuccess={setIsSuccess}/>
        </div>
    </div>
  )
}

export default AddForm;