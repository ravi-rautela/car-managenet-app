import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './Schema'

export const db = drizzle(import.meta.env.VITE_DATABASE_URL, { schema });

// const result = await db.execute('select 1');
