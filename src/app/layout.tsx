import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'Pace Converter - running app - convert time to pace',
    description: 'Ultra simple running pace converter app. Convert time to pace and pace to time to know results in 5k, 10k, half marathon and full marathon.',
    other: {
        'google-adsense-account': 'ca-pub-8268924616638413'
    }
};

export default function RootLayout ({
                                        children
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <script async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8268924616638413"
                        crossOrigin="anonymous"></script>
                {children}
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </body>
        </html>
    );
}
