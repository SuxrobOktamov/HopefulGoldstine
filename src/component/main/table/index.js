import React, { useState } from 'react';
import Lists from './lists';
import Rows from './rows';
import Search from './search';

function Table({Datas, setIsRight, setId, setIsForm, setIsEdit}) {
  const [ Searchs, setSearch ] = useState('');

  const [ Tabled ,setTable] = useState();

  return (
    <div className='employee-information'>
        <Search Searchs={Searchs} setIsForm={setIsForm}/>
        <Lists 
          setTable={setTable}
          Datas={Datas}  
          setSearch={setSearch} 
          setIsRight={setIsRight} 
          setId={setId}
          setIsEdit={setIsEdit}
          />
        <Rows Tabled={Tabled} />
    </div>
  )
}

export default Table;