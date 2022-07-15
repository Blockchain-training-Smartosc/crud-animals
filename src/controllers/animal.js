const animalService = require('../services/animal');

const createAnimal = (req, res) => {
  const { name, weight } = req.body;
  // you can validate input here

  const animal = animalService.createAnimal({ name, weight });

  return res.status(200).send({ status: 1, result: animal });
};

const getAnimals = (req, res) => {
  
  const animals = animalService.findAnimals();
  return res.status(200).send({ status: 1, result: animals });
};

const getAnimal = (req, res) => {
  const { animalIndex } = req.params;
  // animalService.findAnimal
  //....
};

const updateAnimal = (req, res) => {
  const { animalIndex } = req.params;
  const updatedFields = req.body;
  const updatedAnimal = animalService.updateAnimal(animalIndex, updatedFields);

  return res.status(200).send({ status: 1, result: updatedAnimal });
};

const removeAnimal = (req, res) => {

};

module.exports = {
  createAnimal,
  getAnimals,
  getAnimal,
  updateAnimal,
  removeAnimal,
}