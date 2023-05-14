import React from 'react';
import {useState, useEffect} from 'react';
import NewAppointmentForm from './NewAppointmentForm';
import NewDog from './NewDog';
import UpdateButton from './UpdateButton';



function AppointmentsList() {
const url ='https://6441ae8376540ce2257c82cd.mockapi.io/pupnsuds/info';

  const [petList, setPetList] = useState([]);
  

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
//empty array as the 2nd parameter in useEffect means changes happen upon initial load
  },[]);

  const deleteCard = (cardToDelete) => {
    fetch(url + `/${cardToDelete.id}`, {
      method:'DELETE',
    })
      .then(() => getPets());
    }



  
  let allAppointments = petList.map((petList,index) => {
  
    return (
  <div className='col d-flex justify-content-center' key={index}>

  

   <div className='card mb-3'>
      <img className='card-img-top' src={petList.image} alt='random abstract art' style={{height:'180px', width:'285px'}} />
      <div className='card-body'>
          <h5 className='card-title'>{petList.name}</h5>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>{petList.date}</li>
        <li className='list-group-item'>{petList.service}</li>
      </ul>
      <div className='card-body'>
        
        <button 
            className='btn btn-danger m-1'
            onClick={()=> deleteCard(petList)}>Delete</button>
      </div>
   </div>

  
   
  </div>
         );
      });

      return(
        
        <div>
          <h2>New Pet?</h2>
          <NewDog />
          <h2>Update an Appointment</h2>
          <UpdateButton/>
          {allAppointments}

        </div>
      );

      }

export default AppointmentsList