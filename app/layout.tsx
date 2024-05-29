import type { Metadata } from "next";
import "./globals.scss";

const TITLE = "검색 페이지 만들기";
const DESCRIPTION =
  '사이드 프로젝트 입니다요~';
const KEYWORDS =
  '사이드, 프로젝트, 토이, 검색';


export const metadata: Metadata = {
  title: `${TITLE} ${
    process.env.ENV ? ` | (${process.env.COMPONENT_VERSION})` : ''
  }`,
  description: DESCRIPTION,
  keywords: KEYWORDS,
  formatDetection: { telephone: false },
  applicationName: 'SEARCH',
  manifest: '/resources/manifest.json',
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/resources/favicon.ico',
    },
    { type: 'image/png', sizes: '192x192', url: '/resources/android-icon-192x192.png' },
    { type: 'image/png', sizes: '32x32', url: '/resources/favicon-32x32.png' },
    { type: 'image/png', sizes: '96x96', url: '/resources/favicon-96x96.png' },
    {
      rel: 'apple-touch-icon',
      sizes: '60x60',
      url: '/resources/apple-icon-60x60.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      url: '/resources/apple-icon-72x72.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '76x76',
      url: '/resources/apple-icon-76x76.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      url: '/resources/apple-icon-114x114.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      url: '/resources/apple-icon-120x120.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      url: '/resources/apple-icon-144x144.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      url: '/resources/apple-icon-152x152.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/resources/apple-icon-180x180.png',
    },
    {
      rel: 'mask-icon',
      url: '/resources/safari-pinned-tab.svg',
    },
  ],
  openGraph: {
    type: 'website',
    title: TITLE,
    description: DESCRIPTION,
    images: {
      url: 'https://img.mrblue.com/images/share/share_mrblue.jpg',
      alt: '미스터블루',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: 'https://img.mrblue.com/images/share/share_mrblue.jpg',
    site: '@mrblue_com',
    creator: '@mrblue_com',
  },
  itunes: {
    appId: '381253120',
  },
  appleWebApp: {
    title: 'mrblue',
    statusBarStyle: 'black-translucent',
    capable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
