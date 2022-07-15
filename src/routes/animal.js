const router = require('express').Router();

const animalController = require('../controllers/animal');

router.post('/animals', animalController.createAnimal);
router.get('/animals', animalController.getAnimals);
router.get('/animals/:animalIndex', animalController.getAnimal);
router.put('/animals/:animalIndex', animalController.updateAnimal);
router.delete('/animals/:animalIndex', animalController.removeAnimal);

module.exports = router;
