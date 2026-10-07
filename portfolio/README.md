# Maruf Nishan – Portfolio

React + Vite + Tailwind CSS portfolio. Content is static for now and will move to Supabase later.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Editing content

All text, projects and skills live in [src/data/portfolio.js](src/data/portfolio.js).
Theme colors are defined once at the top of [src/index.css](src/index.css).

## Moving to Supabase

Components never import the data file directly; they go through [src/lib/api.js](src/lib/api.js).

1. Create a Supabase project and run [supabase/schema.sql](supabase/schema.sql) in the SQL editor.
2. Insert the rows from `src/data/portfolio.js`.
3. `npm install @supabase/supabase-js` and add `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` to `.env.local`.
4. Create `src/lib/supabase.js` with `createClient(...)` and rewrite each getter in `api.js` as a query
   (an example is in the comment at the top of that file). `profile` is a single row, so use `.single()`.
5. Change `sendMessage` to insert into the `messages` table.
