import React, {useState, useEffect} from 'react';
import { petApi } from '../rest/RestAPI';

const NewAppointmentForm = ({setPets}) => {

  const url = 'https://6441ae8376540ce2257c82cd.mockapi.io/pupnsuds/info';

  
  const [petApp, setPetApp] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await petApi.get();
    };

    fetchData();
  }, []);
  
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value= e.target.value;
    setPetApp(prev => ({...prev, [name]: value}));
  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPets(prev =>([...prev, petApp]));
    let postObject = {
      method:'POST',
      body: JSON.stringify(petApp),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    fetch(url,postObject)
      .then((resp) =>resp.json())
      .then((data) => {
      console.log('Data posted', data);
      fetchData();
  })
  .catch((error) => {
    console.log('Error posting data', error);
  });
  }

  const fetchData = () => {
    petApi
    .get()
    .then((data) => {
      setPets(data);
    })
  
  .catch((error) => {
    console.log('error fetching data', error);
  });
};

  
  
  return (
    <div className='card container'>
      <h3 className='text-center'>New Pet Information</h3>

      <form onSubmit={handleSubmit}>
      
      <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Pet Name'
          onChange={handleChange} />
      <input
          type='date'
          name='date'
          className='form-control'
          placeholder='Date'
          onChange={handleChange} />
      <input
          type='text'
          name='service'
          className='form-control'
          placeholder='Service'
          onChange={handleChange} />
      <button
          className='btn btn-warning m-1'
          type='submit'>Submit</button>

      </form>

    </div>
  )
}

export default NewAppointmentForm