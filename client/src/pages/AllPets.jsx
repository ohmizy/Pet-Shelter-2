import { Link, useOutletContext } from 'react-router-dom';
import axios from 'axios';

const AllPets = () => {
  const { baseUrl, pets } = useOutletContext();

  const deletePet = (id) => {
    axios
      .delete(`${baseUrl}/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <table className="table table-striped table-hover table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th className="text-end">Actions</th>
        </tr>
      </thead>
      <tbody>
        {pets &&
          pets.map((pet) => {
            return (
              <tr key={pet._id}>
                <td>
                  <Link to={`/pets/${pet._id}`}>{pet.name}</Link>
                </td>
                <td>{pet.type}</td>
                <td className="text-end">
                  <Link
                    to={`/pets/${pet._id}/edit`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deletePet(pet._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default AllPets;
