import React from 'react';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import { Button } from '@mui/material';

function Remove({setIsRight, setDatas, Datas, Id, setIsDeleted}) {

  const cancelHandler = () => {
    setIsRight(false);
  }

  const removeHandler = () => {
    if(Datas.length !== 1) {
      setDatas(Datas.filter(item => !(item.id === Id)));
      setIsRight(false);

      setIsDeleted(true);
      setTimeout(()=> {
        setIsDeleted(false)
      }, 2000)
    }else {
      alert('Sorry, You can\'t delete ! ')
    }
  }

  return (
    <div className='remove'>
        <div className='remove-box'>
            <NotListedLocationIcon color='error' className='error' />
            <h1>Are you sure to delete this record?</h1>
            <p>You can't undo this operation</p>
            <div className='error'>
                <Button variant="contained" onClick={() => {cancelHandler()}} color="primary">No</Button>
                <Button variant="contained" onClick={() => {removeHandler()}}  color="error">Yes</Button>
            </div>
        </div>
    </div>
  )
}

export default Remove;