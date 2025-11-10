import { Router } from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send('get All subscription details');
});

subscriptionRouter.get('/:id', (req, res) => {
    res.send('Get subscription details');
});

subscriptionRouter.post('/', (req, res) => {
    res.send('Create new subscription');
});

subscriptionRouter.put('/:id', (req, res) => {
    res.send('Update subscription details');
});

subscriptionRouter.delete('/:id', (req, res) => {
    res.send('Delete subscription details');
});

subscriptionRouter.get('/user/:id', (req, res) => {
    res.send('Get subscription details for user');
});

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send('Cancel subscription details');
});

subscriptionRouter.get('/:id/upcoming-renewals', (req, res) => {
    res.send('Get subscription details for upcoming renewals');
});
export default subscriptionRouter