import React from 'react';
import dynamic from 'next/dynamic';
import { Header, Footer } from '@/components';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import 'react-notion-x/src/styles.css';
import { useEffect } from 'react';

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code));
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then((m) => m.Collection)
);
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
);
const Pdf = dynamic(() => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf), {
  ssr: false
});
const Modal = dynamic(() => import('react-notion-x/build/third-party/modal').then((m) => m.Modal), {
  ssr: false
});

export default function Layout({ pageData, pageLink }) {
  const router = useRouter();
  useEffect(() => {
    if(router.pathname !== pageLink)
      router.replace("/");
  }, []);
  const NotionRenderer = dynamic(() => import('react-notion-x').then((mod) => mod.NotionRenderer), {
    ssr: false
  });
  return (
    <>
      <Header selected={'Resources'} />
      <div>
        <Head>
          <title>NJACK | Resources</title>
          <style>
            {`
            .notion-app{
              background-color: #111 !important;
            }
            .notion-page{
              width: 90% !important;
            }
            .notion-page-no-cover{
              padding-top: 0px !important;
            }
            .notion-frame{
              background-color: #111;
            }
            .notion-nav-header, .notion-header{
              display: none !important;
            }
            .notion-title{
              color: #ffffff; 
            }
            .notion-collection-header-title{
              color: #ffffff;
            }
            .notion-collection-card{
              background-color: #282828 !important;
              border-radius: 15px !important;
              color: #ffffff !important;
            }
            .notion-collection-card:hover{
              transform: scale(1.05);
              transition: transform 0.2s ease-in-out;
            }
            .notion-page-title-text{
              color: #ffffff;
            }
            .notion-collection-view-type-title{
                color: #ffffff !important;
            }
            svg{
                fill: #ffffff !important;
            }
            .notion-collection-card-cover .notion-collection-card-cover-empty{
              background: url(https://blog.testproject.io/wp-content/uploads/2021/08/article-of-P1P-2_-002.png) !important;
              background-position: center;
              background-size: cover !important;
            }
          `}
          </style>
        </Head>
        {pageData ? (
          <NotionRenderer
            recordMap={pageData}
            fullPage={true}
            darkMode={false}
            components={{
              Code,
              Collection,
              Equation,
              Pdf,
              Modal,
              nextImage: Image,
              nextLink: Link
            }}
          />
        ) : null}
      </div>
      <Footer />
    </>
  );
}
