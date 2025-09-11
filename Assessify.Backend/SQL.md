```SQL
CREATE TABLE users (
    user_id TEXT PRIMARY KEY NOT NULL CHECK(length(user_id) = 36),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT UNIQUE,
    created_at DATETIME NOT NULL DEFAULT (CURRENT_TIMESTAMP)
);
```