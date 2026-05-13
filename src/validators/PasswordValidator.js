var passwordHash = require('password-hash');

module.exports = class PasswordValidator {
    static validatePasswordWithHash(password, hashedPassword) {
        return passwordHash.verify(password, hashedPassword);
    }

    static isHashed(password){
        return passwordHash.isHashed(password);
    }
}