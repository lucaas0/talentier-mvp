import { User } from '@/utils/utils';
import prisma from './prisma';
import { comparePasswords, hashPassword } from '../src/utils/password';

export const createUser = async (user: User) => {
    const hashedPassword = await hashPassword(user.password);

    try {
        const createdUser = await prisma.user.create({
            data: {
                name: user.name,
                birthday: user.birthday,
                email: user.email,
                password: hashedPassword,
                photoUrl: user.photoUrl,
                experiences: {
                    createMany: {
                        data: user.experiences,
                    },
                },
                educations: {
                    createMany: {
                        data: user.educations,
                    },
                },
                jobPreferences: {
                    create: {
                        role: user.jobPreferences.role,
                        employmentType: user.jobPreferences.employmentType,
                        location: user.jobPreferences.location,
                    },
                },
                skills: user.skills,
            },
        });
        return createdUser;
    } catch (error) {
        return null;
    }
};

export const getUserByEmail = async (email: string) => {
    try {
        const emailExists = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (emailExists) {
            return true;
        }

        return false;
    } catch (error) {
        return false;
    }
};

export const Login = async (email: string, password: string) => {
    const hashedPassword = await hashPassword(password);

    try {
        const loggedInUser = await prisma.user.findFirstOrThrow({
            where: {
                email,
            },
        });

        if (loggedInUser) {
            const matchPassword = await comparePasswords(
                password,
                loggedInUser.password
            );

            if (matchPassword) {
                const partialUser: Partial<User> = {
                    email: loggedInUser.email,
                    name: loggedInUser.name,
                };
                return partialUser;
            }
        }
        return null;
    } catch (error) {
        return null;
    }
};
