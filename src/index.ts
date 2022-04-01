import express from 'express';
import cors from 'cors';
import diagnosisRouter from './routes/diagnosisRouter';
import patientRouter from './routes/patientRouter';
const app = express();

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(express.json());

app.get('/api/ping', (_req, res) => {
  console.log('ping pong!');
  res.send('pong');
});

app.use('/api/diagnoses', diagnosisRouter);

app.use('/api/patients', patientRouter);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});