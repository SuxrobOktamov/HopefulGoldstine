import { Button } from '@mui/material';
import React, { useEffect, useRef } from 'react';


function Form({Datas, setDatas, setIsEdit, Id, setIsSuccess}) {

    const UsernameValue = useRef();
    const EmailValue = useRef();
    const NumberValue = useRef();
    const CityValue = useRef();
    const DepartamentValue = useRef();
    const Datal = useRef();

    useEffect(()=>{
      Datas.forEach(item => {
        if( item.id === Id) {
          UsernameValue.current.value = item.name;
          EmailValue.current.value = item.email;
          NumberValue.current.value = item.number;
          CityValue.current.value = item.departament;
          DepartamentValue.current.value = item.departament;
        }
      })
    }, [Id, Datas])

   
    const submitHandler = (e) => {
        e.preventDefault();
        checkInputs();
        setDatas(Datas.map( item => {
          if( item.id === Id) {
            item.name =  UsernameValue.current.value;
            item.email = EmailValue.current.value;
            item.number = NumberValue.current.value;
            item.departament =  DepartamentValue.current.value;
          }
          return item;
        }));

        setIsEdit(false);
        setIsSuccess(true);

        setTimeout(()=>{
          setIsSuccess(false);
        }, 2000)
    }

   

    

    function checkInputs() {
        if(UsernameValue.current.value === ''){
            UsernameValue.current.parentNode.className = 'form-control error';
        }else {
            UsernameValue.current.parentNode.className = 'form-control success';
        }

        if(EmailValue.current.value === ''){
            EmailValue.current.parentNode.className = 'form-control error';
        }else {
            EmailValue.current.parentNode.className = 'form-control success';
        }

        if(NumberValue.current.value.length < 10){
            NumberValue.current.parentNode.className = 'form-control error';
        }else {
            NumberValue.current.parentNode.className = 'form-control success';
        }

        if(CityValue.current.value === ''){
            CityValue.current.parentNode.className = 'form-control error';
        }else {
            CityValue.current.parentNode.className = 'form-control success';
        }

        if(DepartamentValue.current.value === ''){
            DepartamentValue.current.parentNode.className = 'form-control error';
        }else {
            DepartamentValue.current.parentNode.className = 'form-control success';
        }

        if(Datal.current.value === ''){
            Datal.current.parentNode.className = 'form-control error';
        }else {
            Datal.current.parentNode.className = 'form-control success';
        }

    }

    function reset() {
        UsernameValue.current.parentNode.className = 'form-control';
        EmailValue.current.parentNode.className = 'form-control';
        NumberValue.current.parentNode.className = 'form-control';
        CityValue.current.parentNode.className = 'form-control';
        DepartamentValue.current.parentNode.className = 'form-control';
        Datal.current.parentNode.className = 'form-control';
    }

  return (
    <div className="form">
        <form id="form" onSubmit={(e)=>{submitHandler(e)}}>
          <div className="form-control ">
              <input ref={UsernameValue} type="text" required placeholder="Full Name" id="username" />
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-exclamation-circle"></i>
              <small>Username cannot be blank</small>
          </div>
          <div className="form-control ">
            <p>Gender</p>
            <div className="gender">
              <label htmlFor="gender1">
                <input type="radio" required name="gender" id="gender1" />
                <span>Male</span>
              </label>
              <label htmlFor="gender2">
                <input type="radio" required name="gender" id="gender2" />
                <span>Female</span>
              </label>
              <label htmlFor="gender3">
                <input type="radio" required name="gender" id="gender3" />
                <span>Other</span>
              </label>
            </div>
          </div>
          <div className="form-control ">
              <input ref={EmailValue}  type="email" required placeholder="Email" id="email" />
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-exclamation-circle"></i>
              <small>email cannot be blank</small>
          </div>
          <div className="form-control ">
            <select ref={DepartamentValue}>
              <option value="none" ></option>
              <option value="development" >Development</option>
              <option value="marketing">Marketing</option>
              <option value="accounting">Accounting</option>
              <option value="hr">Hr</option>
            </select>
          </div>
          <div className="form-control">
              <input type="text" ref={NumberValue} required placeholder="Mobile" id="number" minLength="10" />
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-exclamation-circle"></i>
              <small>Number cannot be blank</small>
          </div>
          <div className="form-control">
            <input type="date" ref={Datal} required />
          </div>
          <div className="form-control">
              <input type="text" ref={CityValue} required placeholder="City" id="city" />
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-exclamation-circle"></i>
              <small>City cannot be blank</small>
          </div>
          <div className="form-control change">
            <Button type="submit" variant='contained'>Submit</Button>
            <Button onClick={reset} type="reset" variant='outlined'  color="secondary" >Reset</Button>
          </div>
      </form>
    </div>
  )
}

export default Form;