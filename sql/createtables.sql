CREATE TABLE IF NOT EXISTS `userordersproject`.`users` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `cpf` VARCHAR(20) NOT NULL,
    `rg` VARCHAR(20),
    `name` VARCHAR(255) NOT NULL,
    `age` SMALLINT,
    `email` VARCHAR(100) NOT NULL,
    `login` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS `userordersproject`.`orders` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `userid` BIGINT NOT NULL,
    FOREIGN KEY (userid) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS `userordersproject`.`ordersdescription` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `orderid` BIGINT NOT NULL,
    `product` VARCHAR(255) NOT NULL,
    `quantity` SMALLINT NOT NULL,
    FOREIGN KEY (orderid) REFERENCES orders(id)
);