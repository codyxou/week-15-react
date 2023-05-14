import React, { useState } from 'react';
import UpdateForm from './UpdateForm';

function UpdateButton() {
    const [showForm, setShowForm] = useState(false);
    const [updatePets, setUpdatePets] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        console.log('button was clicked');
        setShowForm(!showForm);
        console.log('review form opened');
    }


  return (
    <div>
    <button className='btn btn-primary p-2 m-3' 
            onClick={(e) => handleClick(e)}>
                {!showForm ? "Update Info" : "Close Form"}  
    </button>
    {showForm && <UpdateForm setUpdateForm={setUpdatePets} />}
    </div>
  )
}
export default UpdateButton