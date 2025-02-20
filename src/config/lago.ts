import { ENV } from './env.js';
import { Client, getLagoError } from 'lago-javascript-client';

const lagoClient = Client(ENV.LAGO_API_KEY, { baseUrl: ENV.LAGO_API_URL });

export { lagoClient, getLagoError };
