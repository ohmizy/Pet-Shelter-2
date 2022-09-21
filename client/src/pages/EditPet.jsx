import { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext, useNavigate, useParams } from 'react-router-dom';
import PetForm from '../components/PetForm';

const EditPet = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { baseUrl } = useOutletContext();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((res) => {
        setPet(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updatePet = (e, pet) => {
    e.preventDefault();
    axios
      .put(`${baseUrl}/${id}`, pet)
      .then(() => navigate('/pets'))
      .catch((err) => console.log(err));
  };

  return (
    pet && <PetForm formText={'Edit Pet'} submitHandler={updatePet} errors={[]} errorObject={{}} initialPet={pet} />
  );
};

export default EditPet;
