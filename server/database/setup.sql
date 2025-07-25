DROP TABLE IF EXISTS entries;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

CREATE TABLE entries(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    uid INT NOT NULL,
    content TEXT NOT NULL,
    category TEXT,
    created TIMESTAMP NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (uid) REFERENCES users(id)
);

-- default user, password: password
INSERT INTO users(username, password) VALUES('default', '$2a$10$xOpDUxQAoVz40Hdq6R4yqOpk34nPOtWT46ohUpQEgBbxY/eT.Yf8O')
