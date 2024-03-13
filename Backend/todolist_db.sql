
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL;
    password VARCHAR(255) NOT NULL,
    user_score INT NOT NULL DEFAULT 0;
);

CREATE TABLE todos (
    todo_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    task VARCHAR(255) NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT 0,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	description TEXT;
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (username, email, password, user_score)
VALUES ('abbas', 'abbas@example.com', 'hashedpassword', 0);


INSERT INTO todos (user_id, task, completed, created_date, description)
VALUES (1, 'Exercise', 0, NOW(), 'Run 1 mile.');
