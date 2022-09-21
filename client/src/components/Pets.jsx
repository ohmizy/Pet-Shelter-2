import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Pets = () => {
  const baseUrl = 'http://localhost:8000/api/pets';
  const [pets, setPets] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => setPets(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="col">
      <Outlet context={{ baseUrl, pets, setPets }} />
    </div>
  );
};

export default Pets;
