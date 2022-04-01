import { Patient, PatientRedacted } from '../types';
import { patients } from '../data/patients';

const getPatients = (): Patient[] => {
  return patients;
};

const getRedactedPatients = (): PatientRedacted[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => {
    return { id, name, dateOfBirth, gender, occupation };
  });
};

export default {
  getPatients,
  getRedactedPatients
};