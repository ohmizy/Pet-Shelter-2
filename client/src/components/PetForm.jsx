import { useState } from 'react';

const PetForm = (props) => {
  const { submitHandler, initialPet, formText, errors, errorObject } = props;
  const [formState, setFormState] = useState(initialPet);

  const changeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formState.name)
  console.log(formState.type)
  console.log(formState.description)
  console.log(formState._id)
  return (
    <>
      {errors &&
        errors.map((error, idx) => {
          return <p key={idx}>{error}</p>;
        })}
        
      <div className="card">
        <h1>{formState?.name}</h1>
        <h1>{formState?.type}</h1>
        <h1>{formState?.description}</h1>
        <h5 className="card-header">{formText}</h5>
        <div className="card-body">
          <form onSubmit={(e) => submitHandler(e, formState)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Pet Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control form-control-sm"
                value={formState?.name}
                onChange={changeHandler}
              />
              {errorObject.name ? (
                <span className="form-text text-danger">
                  {errorObject.name}
                </span>
              ) : (
                ''
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Type:
              </label>
              <input
                type="text"
                name="type"
                id="type"
                className="form-control form-control-sm"
                value={formState?.type}
                onChange={changeHandler}
              />
              {errorObject.type ? (
                <span className="form-text text-danger">
                  {errorObject.type}
                </span>
              ) : (
                ''
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="type" className="form-type">
                Description:
              </label>
              <textarea
                className="form-control"
                name="description"
                id="description"
                value={formState?.description}
                onChange={changeHandler}
              ></textarea>
              {errorObject.description ? (
                <span className="form-text text-danger">
                  {errorObject.description}
                </span>
              ) : (
                ''
              )}
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary btn-sm">{formText}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PetForm;
