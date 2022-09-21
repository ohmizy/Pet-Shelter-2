import { useState } from 'react';
import axios from 'axios';
import { useOutletContext, useNavigate } from 'react-router-dom';
import PetForm from '../components/PetForm';

const NewPet = () => {
  const navigate = useNavigate();
  const { baseUrl } = useOutletContext();
  const [errors, setErrors] = useState([]);
  const [errorObject, setErrorObject] = useState({})

  const initialPet = {
    name: '',
    type: '',
    description: '',
  };

  const insertPet = (e, pet) => {
    e.preventDefault();
    axios
      .post(baseUrl, pet)
      .then(() => {
        setErrors([]);
        navigate('/pets');
      })
      .catch((err) => {
        console.log(err);
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        const errorObj = {}
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        for (const key in errorResponse) {
          errorObj[key] = errorResponse[key].message
        }
        setErrorObject(errorObj);
        setErrors(errorArr);
      });
  };

  return (
    <PetForm
      formText={'Add Pet'}
      submitHandler={insertPet}
      initialPet={initialPet}
      errors={errors}
      errorObject={errorObject}
    />
  );
};

export default NewPet;
