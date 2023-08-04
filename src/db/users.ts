import { ModifyQuery, SelectQuery } from './queryUtils';
import type { RowDataPacket } from 'mysql2';

export interface IUserRow extends RowDataPacket {
	id: number;
	name: string;
	email: string;
	created_at: string;
}

export function getAll() {
	return SelectQuery<IUserRow>('SELECT * FROM users;');
}

export function getOne(id: number) {
	const queryString = 'SELECT * FROM users WHERE id = ?;';
	return SelectQuery<IUserRow>(queryString, [id]);
}

export function insert(newUser: { id: string, name: string, email: string }) {
	const queryString = 'INSERT INTO users SET ?;';
	return ModifyQuery(queryString, [newUser]);
}

export function update(updatedUser: { name?: string, email?: string }, id: number) {
	const queryString = 'UPDATE users SET ? WHERE id = ?';
	return ModifyQuery(queryString, [updatedUser, id]);
}

export function destroy(id: number) {
	const queryString = 'DELETE FROM users WHERE id = ?;';
	return ModifyQuery(queryString, [id]);
}
