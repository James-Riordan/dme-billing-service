import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import customersRouter from './routes/customers.js';
const app = express();
// ✅ Apply middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());
// ✅ Define routes
app.use('/api/customers', customersRouter);
// ✅ Health check
app.get('/', (_req, res) => {
    res.json({ message: 'DME Billing Service is running 🚀' });
});
export default app;
