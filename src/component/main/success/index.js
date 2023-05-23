import Clear from '@mui/icons-material/Clear';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Button } from '@mui/material';
import React from 'react'



function Success({setIsSuccess}) {

    function successHandler() {
        setIsSuccess(false)
    }

  return (
    <div className='success'> 
        <Button startIcon={<TaskAltIcon />} endIcon={<Clear onClick={successHandler} />} color='success'>
            Submited Successfully
            {/* <Clear onClick={successHandler} /> */}
        </Button>
    </div>
   
  )
}

export default Success;