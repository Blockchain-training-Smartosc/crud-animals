const Animal = require('../models/animal');

const createAnimal = ({ name, weight }) => {
  const animal = new Animal(name, weight);
  global.animals.push(animal);

  return animal;
};

const findAnimals = () => {
  return global.animals;
};

const findAnimal = () => {

};

const updateAnimal = () => {

};

const removeAnimal = () => {

};

module.exports = {
  createAnimal,
  findAnimals,
  findAnimal,
  updateAnimal,
  removeAnimal,
}