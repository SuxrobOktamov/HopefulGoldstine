import React, { useEffect, useState } from 'react';
import Account from './account';
import Header from './header';
import Table from './table';
import Remove from './remove';
import { Data } from '../../Data';
import AddForm from './addForm';
import EditForm from './editForm';
import Success from './success';
import Deleted from './deleted';


function Main() {
  const [ Datas, setDatas ] = useState([]);
  const [ Id, setId ] = useState(1);
  const [ isRight, setIsRight ] = useState(false);
  const [ isForm, setIsForm ] = useState(false);
  const [ isEdit, setIsEdit ] = useState(false);
  const [ isSuccess, setIsSuccess ] = useState(false);
  const [ isDeleted, setIsDeleted ] = useState(false);

  useEffect(()=> {
    setDatas(Data);
  }, [])

  return (
    <div className='box2'>
        <Header />
        <Account />
        <Table  
          Datas={Datas} 
          setIsRight={setIsRight} 
          setId={setId}
          setIsForm={setIsForm}
          setIsEdit={setIsEdit}

          />
        {isRight?<Remove
          setDatas={setDatas}
          setIsRight={setIsRight} 
          Datas={Datas} 
          Id={Id}
          setIsDeleted={setIsDeleted}
        />:null}
        {isForm? <AddForm 
          setIsForm={setIsForm}  
          Datas={Datas}
          setDatas={setDatas} 
          setIsSuccess={setIsSuccess}
        />:null}
        {isEdit? <EditForm 
          setIsEdit={setIsEdit} 
          Datas={Datas}
          setDatas={setDatas}
          Id={Id} 
          setIsSuccess={setIsSuccess}
        />: null}
        {isSuccess? <Success setIsSuccess={setIsSuccess} /> : null}
        {isDeleted? <Deleted setIsDeleted={setIsDeleted} /> : null}
    </div>
  )
}

export default Main;