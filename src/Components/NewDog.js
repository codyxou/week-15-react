import React, { useState } from 'react';
import NewAppointmentForm from './NewAppointmentForm';

function NewDog() {

    const [showForm, setShowForm] = useState(false);
    const [pets, setPets] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        console.log('button was clicked');
        setShowForm(!showForm);
        console.log('New form opened');
    }

  return (
    <div>
    <button className='btn btn-primary p-2 m-3' onClick={(e) => handleClick(e)}>
        {!showForm ? "Add New Pet" : "Close Form"}
        </button>
    {showForm && <NewAppointmentForm setPets={setPets} />}
    </div>
  )
}

export default NewDog