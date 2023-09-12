import { comparePasswords } from '@/utils/password';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '../../../../../lib/prisma';

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'email@email.com',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                const loggedInUser = await prisma.user.findFirstOrThrow({
                    where: {
                        email: credentials?.email || '',
                    },
                });

                if (loggedInUser) {
                    const matchPassword = await comparePasswords(
                        credentials?.password || '',
                        loggedInUser.password
                    );

                    if (matchPassword) {
                        return loggedInUser;
                    }
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: '/login',
    },
};
