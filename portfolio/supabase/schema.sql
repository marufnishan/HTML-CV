-- Starting schema for moving the portfolio content to Supabase.
-- Tables mirror the exports in src/data/portfolio.js; column names match the
-- object fields, so components keep working unchanged.

create table profile (
  id int primary key default 1,
  name text not null,
  short_name text,
  role text,
  tagline text,
  summary text,
  email text,
  phone text,
  location text,
  linkedin_url text,
  github_url text
);

create table stats (
  id serial primary key,
  value text not null,
  label text not null
);

create table competencies (
  id serial primary key,
  title text not null,
  icon text,
  items text[] not null default '{}'
);

create table skill_groups (
  id serial primary key,
  title text not null,
  items text[] not null default '{}'
);

create table experience (
  id serial primary key,
  role text not null,
  company text not null,
  company_url text,
  location text,
  start_date text,
  end_date text,
  highlights text[] not null default '{}'
);

create table projects (
  id serial primary key,
  title text not null,
  description text,
  url text,
  tech text[] not null default '{}',
  category text check (category in ('ai', 'web', 'freelance')),
  featured boolean not null default false
);

create table education (
  id serial primary key,
  degree text not null,
  institution text,
  location text,
  period text,
  grade text
);

create table languages (
  id serial primary key,
  name text not null,
  level int check (level between 1 and 5)
);

create table messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- Public read access for content; visitors can only insert messages.
alter table profile enable row level security;
alter table stats enable row level security;
alter table competencies enable row level security;
alter table skill_groups enable row level security;
alter table experience enable row level security;
alter table projects enable row level security;
alter table education enable row level security;
alter table languages enable row level security;
alter table messages enable row level security;

create policy "public read" on profile for select using (true);
create policy "public read" on stats for select using (true);
create policy "public read" on competencies for select using (true);
create policy "public read" on skill_groups for select using (true);
create policy "public read" on experience for select using (true);
create policy "public read" on projects for select using (true);
create policy "public read" on education for select using (true);
create policy "public read" on languages for select using (true);
create policy "anyone can send" on messages for insert with check (true);
