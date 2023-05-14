import React, { useState, useEffect } from 'react';

function UpdateForm({setUpdateForm}) {

  const url = 'https://6441ae8376540ce2257c82cd.mockapi.io/pupnsuds/info';



  const [petList, setPetList] = useState([]);
  const [updatePetList, setUpdatePetList] = useState({});



  const getPets = async () => {
    try {
      let allPets = await fetch(url)
      allPets = await allPets.json()
      setPetList(allPets)
      console.log(allPets)
    } catch(err) {
      console.log('there seems to be an issue capturing the data', err);
    }

      
    }

  useEffect(() => {
    getPets();
    console.log(petList);
//empty array as the 2nd parameter in useEffect means changes happen upon initial load
  },[]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value= e.target.value;
    setUpdatePetList(prev => ({...prev, [name]: value}));
  
  }

  function handleUpdatePet(e) {
    e.preventDefault()
    setUpdateForm(prev =>([...prev,updatePetList]));
    let updateObject ={

      method:'PUT',
      body: JSON.stringify(updatePetList),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
    fetch(url + `/${updatePetList.id}`, updateObject)
      .then(() => getPets())
      .catch((error) => {
        console.log('Error updating data', error);
      });
  }

  return (
    <div className='form-group container'>
      <form 
          onSubmit={handleUpdatePet}
          className='form-select'>
        <select 
          name='id' 
          onChange={handleChange}
          className='form-select'>
          <option value=''>Select a pet</option>
          {petList.map((pet) => (
            <option key={pet.id} value={pet.id}>
              {pet.name}
            </option>
          ))}
        </select>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='New Pet Name'
          onChange={handleChange}
        />
        <input
          type='date'
          name='date'
          className='form-control'
          onChange={handleChange}
        />
        <input
          type='text'
          name='service'
          className='form-control'
          placeholder='Service'
          onChange={handleChange}
        />
        <button className='btn btn-warning m-2' type='submit'>
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateForm;