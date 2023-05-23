import Clear from '@mui/icons-material/Clear';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import { Button } from '@mui/material';
import React from 'react'



function Deleted({setIsDeleted}) {

    function deletedHandler() {
        setIsDeleted(false)
    }

  return (
    <div className='deleted'> 
        <Button startIcon={<FmdBadIcon />} endIcon={<Clear onClick={deletedHandler} />} color='error'>
            Deleted Successfully
        </Button>
    </div>
   
  )
}

export default Deleted;