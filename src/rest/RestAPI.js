

const APP_ENDPOINT = 'https://6441ae8376540ce2257c82cd.mockapi.io/pupnsuds/info';

class PetAPI {
    get = async () =>{
        try {
            const resp = await fetch(APP_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e){
            console.log('issue',e);
        }
    }

    put = async (pet) => {
        try{
        const resp = await fetch(`${APP_ENDPOINT}/${pet.id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pet)
        });
        return await resp.json();
    } catch(e){
        console.log('issue',e);
    }
  }

}

export const petApi = new PetAPI();