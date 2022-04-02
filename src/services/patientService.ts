import { Patient, PatientRedacted, NewPatient } from '../types';
import { patients } from '../data/patients';
// import {v1 as uuid } from 'uuid';
import { v1 as uuid } from 'uuid';

const patientList: Patient[] = patients; 

const getPatients = (): Patient[] => {
  return patientList;
};

const getRedactedPatients = (): PatientRedacted[] => {
  return patientList.map(({ id, name, dateOfBirth, gender, occupation }) => {
    return { id, name, dateOfBirth, gender, occupation };
  });
};

const addPatient = (patient: NewPatient): Patient => { // utils.createNewPatient
  const newId: string = uuid();
  const newPatient: Patient = {
    id: newId,
    ...patient
  };
  patientList.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  getRedactedPatients,
  addPatient
};