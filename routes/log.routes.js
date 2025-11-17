import { Router } from 'express';
import { createLogs, deleteLogs, updateLogs } from '../controller/log.controller.js';

const logsRouter = Router();

// logsRouter.get('/', getLogs);
logsRouter.post('/create', createLogs);
logsRouter.post('/delete', deleteLogs);
logsRouter.post('/update', updateLogs);

export default logsRouter