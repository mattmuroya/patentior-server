"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = require("../data/patients");
const getPatients = () => {
    return patients_1.patients;
};
const getRedactedPatients = () => {
    return patients_1.patients.map(({ id, name, dateOfBirth, gender, occupation }) => {
        return { id, name, dateOfBirth, gender, occupation };
    });
};
exports.default = {
    getPatients,
    getRedactedPatients
};
