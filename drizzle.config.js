import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: "./configs/schema.js",
    dbCredentials: {
        url: 'postgresql://neondb_owner:TBn1ospacbq0@ep-summer-mud-a55dod7p.us-east-2.aws.neon.tech/neondb?sslmode=require'
    }
});
