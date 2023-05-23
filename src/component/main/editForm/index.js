import Clear from '@mui/icons-material/Clear';
import { Button } from '@mui/material';
import React from 'react';
import Form from './form';


function EditForm({Datas, setDatas, setIsEdit , Id, setIsSuccess}) {

  function isHandler() {
    setIsEdit(false)
  }

  return (
    <div className="addForm">
        <div className="formBox">
            <div className="employeeForm">
                <h2>Employee Form</h2>
                <Button variant='outlined' onClick={isHandler} color='error'><Clear color='error' /></Button>
            </div>
            <Form Datas={Datas} setDatas={setDatas} setIsEdit={setIsEdit} setIsSuccess={setIsSuccess} Id={Id} />
        </div>
    </div>
  )
}

export default EditForm;