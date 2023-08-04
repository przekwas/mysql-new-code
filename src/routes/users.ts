import { Router } from 'express';
import db from '../db';

const router = Router();

// GET /api/users/123
router.get('/:id', async (req, res) => {
	try {
		const userID = parseInt(req.params.id, 10);
		const [user] = await db.users.getOne(userID);
		res.json(user);
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' });
	}
});

// GET /api/users
router.get('/', async (req, res) => {
	try {
		const users = await db.users.getAll();
		res.json(users);
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' });
	}
});

// POST /api/users { id: number; name: string; email: string; }
router.post('/', async (req, res) => {
	try {
		const newUser = { ...req.body };
		const result = await db.users.insert(newUser);
		res.json(result);
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' });
	}
});

// PUT /api/users/123 { name?: string; email?: string; }
router.put('/:id', async (req, res) => {
	try {
		const userID = parseInt(req.params.id, 10);
		const updatedUser = { ...req.body };
		const result = await db.users.update(updatedUser, userID);
		res.json(result);
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' });
	}
});

// DELETE /api/users/123
router.delete('/:id', async (req, res) => {
	try {
		const userID = parseInt(req.params.id, 10);
		const result = await db.users.destroy(userID);
		res.json(result);
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' });
	}
});

export default router;
