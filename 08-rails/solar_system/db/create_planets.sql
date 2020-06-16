CREATE TABLE planets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT,
  orbit FLOAT,
  diameter FLOAT,
  mass FLOAT,
  moons INTEGER
);

-- Don't seed in your .sql: use seeds.rb
