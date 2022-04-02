import express from 'express';
import patientService from '../services/patientService';
import { createNewPatient } from '../utils/patientUtils';
const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getRedactedPatients());
});

router.post('/', (req, res) => {
  try {
    // createNewPatient takes any obj type (req.body) and returns an object of type NewPatient (Patient without an id).
    const newPatient = createNewPatient(req.body);
    // addPatient takes a NewPatient obj and makes it into a Patient by adding an id. Adds the Patient to the list.
    const addedPatient = patientService.addPatient(newPatient);
    // return the newly added patient.
    res.json(addedPatient);
  } catch (err) {
    let errorMessage = 'Something went wrong.';
    if (err instanceof Error) errorMessage += ' Error: ' + err.message;
    res.status(400).send(errorMessage);
  }
});

export default router;