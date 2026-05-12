CREATE TABLE IF NOT EXISTS `userordersproject`.`users` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `cpf` VARCHAR(20) NOT NULL,
    `rg` VARCHAR(20),
    `nome` VARCHAR(255) NOT NULL,
    `idade` SMALLINT,
    `email` VARCHAR(100) NOT NULL,
    `login` VARCHAR(100) NOT NULL,
    `senha` VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS `userordersproject`.`orders` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `iduser` BIGINT NOT NULL,
    FOREIGN KEY (iduser) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS `userordersproject`.`ordersdescription` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `idorder` BIGINT NOT NULL,
    `product` VARCHAR(255) NOT NULL,
    `quantity` SMALLINT NOT NULL,
    FOREIGN KEY (idorder) REFERENCES orders(id)
);