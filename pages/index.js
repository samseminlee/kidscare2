
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import '../i18n';

export default function Home() {
  const { data: session } = useSession();
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">{t('welcome')}</h1>

      {session ? (
        <>
          <button onClick={() => signOut()} className="bg-red-500 text-white px-6 py-2 rounded mb-6">{t('logout')}</button>
          <div className="space-x-4">
            <Link href="/parent">
              <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">{t('parentRequest')}</button>
            </Link>
            <Link href="/sitter">
              <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">{t('sitterRegistration')}</button>
            </Link>
          </div>
        </>
      ) : (
        <button onClick={() => signIn('google')} className="bg-blue-500 text-white px-6 py-3 rounded">{t('login')}</button>
      )}

      <div className="mt-8">
        <button onClick={() => i18n.changeLanguage('ko')} className="px-3 py-1 border rounded mx-2">🇰🇷 한글</button>
        <button onClick={() => i18n.changeLanguage('en')} className="px-3 py-1 border rounded mx-2">🇺🇸 English</button>
      </div>
    </div>
  );
}
