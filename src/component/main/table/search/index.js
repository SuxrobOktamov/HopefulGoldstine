import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';


function Search({Searchs, setIsForm}) {
    const searchHandler = (e) => {
        let type = e.target.value.trim().toLowerCase();
        Array.from(Searchs.current.children).forEach(item=>{
            let index = item.children[0].textContent.toLowerCase();
            if(index.indexOf(type) !== 0){
                item.style.display = 'none';
            }else {
                item.style.display = 'flex';
            }
        })
    }

    function isHandler() {
        setIsForm(true)
    }

    return (
        <div className="employee-div">
            <div className="list-search">
                <input type="search" onChange={(e)=>{searchHandler(e)}} />
                <label className="label">Search Employees</label>
                <span className="material-symbols-outlined ">search</span>
            </div>
            <Button onClick={isHandler} variant="outlined" startIcon={<Add/>}>Add New</Button>
        </div>
    )
}

export default Search;