import { useOutletContext, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ShowPet = () => {
  const { id } = useParams();
  const { baseUrl } = useOutletContext();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((res) => setPet(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="card">
      <h5 className="card-header">Pet Details</h5>
      {pet && (
        <div className="card-body">
          <h5 className="card-name">Name: {pet.name}</h5>
          <h6>Type: {pet.type}</h6>
          <p>Description: {pet.description}</p>
        </div>
      )}
    </div>
  );
};

export default ShowPet;
