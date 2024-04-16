import { json } from '@sveltejs/kit';

export const POST = () => json({ value: 42 });