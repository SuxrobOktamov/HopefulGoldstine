import React, { useEffect, useRef } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
function ListGroup({setSearch, setIsRight, setId, Datas, setIsEdit}) {

  const listGroup = useRef();
  useEffect(()=> {
    setSearch(listGroup);
  })

   function removeHandler(id) {
    setId(id)
    setIsRight(true)
  }

  function editHandler(id) {
    setId(id)
    setIsEdit(true)
  }


  return (
    <div ref={listGroup}>
        {Datas.map((item)=>(
            <ul key={item.id} className="list-group">
                <li className="list-item">{item.name}</li>
                <li className="list-item">{item.email}</li>
                <li className="list-item">{item.number}</li>
                <li className="list-item">{item.departament}</li>
                <li className="list-item">
                    <Button variant="outlined" onClick={()=> {editHandler(item.id) }} color='secondary'>
                        <EditIcon color='secondary' />
                    </Button>
                    <Button variant="outlined"  color='error' onClick={() => {removeHandler(item.id)}} >
                        <ClearIcon color='error'  />
                    </Button>
                </li>
          </ul>
        ))}
    </div>
  )
}

export default ListGroup;