import React from 'react'

function List() {
  return (
    <ul className="table-information">
        <li className="table-item">Employee Name <span className="material-symbols-outlined">arrow_upward</span></li>
        <li className="table-item">Email Address (Personal)<span className="material-symbols-outlined">arrow_upward</span></li>
        <li className="table-item">Mobile Number<span className="material-symbols-outlined">arrow_upward</span></li>
        <li className="table-item">Departament<span className="material-symbols-outlined">arrow_upward</span></li>
        <li className="table-item">Actions</li>
    </ul>
  )
}

export default List