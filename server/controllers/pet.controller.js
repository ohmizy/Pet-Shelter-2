const Pet = require('../models/pet.model');

const getAllPets = (_, res) => {
  Pet.find()
    .then((pets) => res.status(200).json(pets))
    .catch((err) => res.status(400).json(err));
};

const getOnePet = (req, res) => {
  Pet.findById({ _id: req.params.id })
    .then((pet) => res.status(200).json(pet))
    .catch((err) => res.status(400).json(err));
};

const insertPet = (req, res) => {
  Pet.create(req.body)
    .then((pet) => res.status(201).json(pet))
    .catch((err) => res.status(400).json(err));
};

const updatePet = (req, res) => {
  Pet.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((pet) => res.status(201).json(pet))
    .catch((err) => res.status(400).json(err));
};

const deletePet = (req, res) => {
  Pet.findByIdAndDelete({ _id: req.params.id })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(400).json(err));
};

module.exports = {
  getAllPets,
  getOnePet,
  insertPet,
  updatePet,
  deletePet,
};
