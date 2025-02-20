import express from 'express';
import { lagoClient, getLagoError } from '../config/lago.js';
const router = express.Router();
// ✅ Create a new customer
router.post('/', async (req, res) => {
    try {
        const { data } = await lagoClient.customers.createCustomer(req.body);
        res.status(201).json(data);
    }
    catch (error) {
        const lagoError = await getLagoError(error);
        res.status(500).json({ error: lagoError });
    }
});
// ✅ List all customers
router.get('/', async (req, res) => {
    try {
        const { data } = await lagoClient.customers.findAllCustomers();
        res.json(data);
    }
    catch (error) {
        const lagoError = await getLagoError(error);
        res.status(500).json({ error: lagoError });
    }
});
// ✅ Get a single customer
router.get('/:customerId', async (req, res) => {
    try {
        const { data } = await lagoClient.customers.findCustomer(req.params.customerId);
        res.json(data);
    }
    catch (error) {
        const lagoError = await getLagoError(error);
        res.status(500).json({ error: lagoError });
    }
});
// ✅ Delete a customer
router.delete('/:customerId', async (req, res) => {
    try {
        await lagoClient.customers.destroyCustomer(req.params.customerId);
        res.status(204).send(); // No content
    }
    catch (error) {
        const lagoError = await getLagoError(error);
        res.status(500).json({ error: lagoError });
    }
});
export default router;
