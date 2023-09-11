const bcrypt = require('bcrypt');

export async function hashPassword(password: string) {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
}

export async function comparePasswords(
    plainPassword: string,
    hashedPassword: string
) {
    return bcrypt.compare(plainPassword, hashedPassword);
}
