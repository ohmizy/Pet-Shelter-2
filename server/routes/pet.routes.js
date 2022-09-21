const express = require('express');
const petRouter = express.Router();
const {
  getAllPets,
  getOnePet,
  insertPet,
  updatePet,
  deletePet,
} = require('../controllers/pet.controller');

// /api/pets
petRouter.route('/').get(getAllPets).post(insertPet);

// /api/pets/:id
petRouter.route('/:id').get(getOnePet).put(updatePet).delete(deletePet);

module.exports = petRouter;
