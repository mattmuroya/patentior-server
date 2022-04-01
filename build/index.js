"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const diagnosisRouter_1 = __importDefault(require("./routes/diagnosisRouter"));
const patientRouter_1 = __importDefault(require("./routes/patientRouter"));
const app = (0, express_1.default)();
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/api/ping', (_req, res) => {
    console.log('ping pong!');
    res.send('pong');
});
app.use('/api/diagnoses', diagnosisRouter_1.default);
app.use('/api/patients', patientRouter_1.default);
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
