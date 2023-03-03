import Providers from '@/components/_redux/provider';

import '@/components/styles/globals.scss';

export const metadata = {
    title: 'Facebook | NextJS',
    description: 'Clone faecbook UI with NextJS latest version',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
