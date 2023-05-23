import React from 'react';

function Rows({Tabled}) {

    const changHandler = (e) => {
        if(e.target.value === '5'){
            Tabled.current.style.maxHeight = '450px';
        }else if(e.target.value === '10') {
            Tabled.current.style.maxHeight = '806px';
        }else if(e.target.value === '25') {
            Tabled.current.style.maxHeight = '1931px';
        }else if(e.target.value === 'auto') {
            Tabled.current.style.maxHeight = '2000000px';
        }
    }

    return (
        <div className="rows-page">
            <p>Rows per page:</p>
            <select onChange={(e)=>{changHandler(e)}}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="auto">Auto</option>
            </select>
            <p>0-0 of 0</p>
            <div className="next-prev">
                <span className="material-symbols-outlined">chevron_left</span>
                <span className="material-symbols-outlined">chevron_right</span>
            </div>
        </div>
    )
}

export default Rows