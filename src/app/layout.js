import '@/components/styles/globals.scss';

export const metadata = {
    title: 'Facebook | NextJS',
    description: 'Clone faecbook UI with NextJS latest version',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
