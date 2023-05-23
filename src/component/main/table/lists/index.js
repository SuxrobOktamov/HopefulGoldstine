import React, { useEffect, useRef } from 'react';
import List from './list';
import ListGroup from './listGroup';


function Lists({Datas, setSearch, setIsRight, setId, setIsEdit, setTable}) {

  const Table = useRef();

  useEffect(() => {
    setTable(Table)
  }, [setTable])

  return (
    <div ref={Table} className='table'>
        <List />
        <ListGroup 
          Datas={Datas} 
          setSearch={setSearch} 
          setIsRight={setIsRight}
          setId={setId}
          setIsEdit={setIsEdit}
          />
    </div>
  )
}

export default Lists;