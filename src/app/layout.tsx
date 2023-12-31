import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AuthProvider from '@/context/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Talentier - Finding jobs and talents has never been easier.',
    description: ' A platform built for a new way of finding jobs.',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    keywords: 'Jobs, Find Job, Talent, Organization, Job seeker, Recruiter',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    );
}
