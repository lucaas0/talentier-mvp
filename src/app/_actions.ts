'use server';

import { User } from '@/utils/utils';
import { createUser, getUserByEmail, Login } from '../../lib/user';

export const createUserAction = async (user: User) => {
    try {
        const createdUser = await createUser(user);
        return createdUser;
    } catch (error) {
        return null;
    }
};

export const loginUserAction = async (email: string, password: string) => {
    try {
        const loggedInUser = await Login(email, password);
        return loggedInUser;
    } catch (error) {
        return null;
    }
};

export const getUserByEmailAction = async (email: string) => {
    try {
        const found = await getUserByEmail(email);
        return found;
    } catch (error) {
        return false;
    }
};
