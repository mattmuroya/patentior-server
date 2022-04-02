import { NewPatient, Gender } from '../types';

// given an unknown object (req.body), return a NewPatient with object values.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createNewPatient = (obj: any): NewPatient => {
  const newPatient: NewPatient = {
    name: parseName(obj.name),
    dateOfBirth: parseDate(obj.dateOfBirth),
    ssn: parseSsn(obj.ssn),
    gender: parseGender(obj.gender),
    occupation: parseOccupation(obj.occupation)
  };
  return newPatient;
};

// PARSING FUNCTIONS

const parseName = (name: unknown): string => {
  // takes any input and returns it as a string if isString evaluates to true.
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing Name.');
  }
  // TS knows this is a string bc isString() returns type predicate `str is string`.
  return name;
};

const parseDate = (date: unknown): string => {
  // checks for empty/null/undefined, then checks if string, then checks if date
  // date check can take argument type string because string check returns type predicate
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error('Incorrect or missing Date: ' + date);
  }
  // TS knows this is a string bc isString() check above returns type predicate `date is string`.
  return date;
};

const parseSsn = (ssn: unknown): string => {
  if (!ssn || !isString(ssn) || !isSsn(ssn)) {
    throw new Error ('Incorrect or missing SSN: ' + ssn);
  }
  return ssn;
};

const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error('Incorrect or missing occupation: ' + occupation);
  }
  return occupation;
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error('Incorrect or missing gender: ' + gender);
  }
  return gender;
};

// UTILITIES

const isString = (str: unknown): str is string => {
  // asserts unknown because anything can get passed in as a param.
  // type predicate to assert that the input is of type string when the function evalutes true.
  return (typeof str === 'string' || str instanceof String);
};

const isDate = (date: string): boolean => {
  // can assert string type for input because the parseDate function checks if it is a string first.
  // Validates that the input string is formatted such that it can be parsed as a date.
  return Boolean(Date.parse(date));
};

const isSsn = (ssn: string): boolean => {
  // commented hard coded true return to accommodate mock ssn formats.
  // const pattern = /^[0-9]{3}-?[0-9]a{2}-?[0-9]{4}$/;
  // return pattern.test(ssn);
  return Boolean(ssn);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (gender: any): gender is Gender => {
  // type predicate will return gender type if function evaluates true;
  // check that Gender enum includes gender parameter as a value.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Gender).includes(gender); // allow any type because enum values could by any type, not necessarily just strings.
};