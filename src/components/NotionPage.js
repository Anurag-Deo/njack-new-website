import * as React from 'react';
import Head from 'next/head';
import { NotionRenderer } from 'react-notion-x';
import { getPageTitle } from 'notion-utils';
import dynamic from 'next/dynamic';
import 'prismjs/themes/prism-tomorrow.css';
import Link from 'next/link';

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(async (m) => {
    await Promise.all([
      import('prismjs/components/prism-markup-templating.js'),
      import('prismjs/components/prism-markup.js'),
      import('prismjs/components/prism-bash.js'),
      import('prismjs/components/prism-c.js'),
      import('prismjs/components/prism-cpp.js'),
      import('prismjs/components/prism-csharp.js'),
      import('prismjs/components/prism-docker.js'),
      import('prismjs/components/prism-java.js'),
      import('prismjs/components/prism-js-templates.js'),
      import('prismjs/components/prism-coffeescript.js'),
      import('prismjs/components/prism-diff.js'),
      import('prismjs/components/prism-git.js'),
      import('prismjs/components/prism-go.js'),
      import('prismjs/components/prism-graphql.js'),
      import('prismjs/components/prism-handlebars.js'),
      import('prismjs/components/prism-less.js'),
      import('prismjs/components/prism-makefile.js'),
      import('prismjs/components/prism-markdown.js'),
      import('prismjs/components/prism-objectivec.js'),
      import('prismjs/components/prism-ocaml.js'),
      import('prismjs/components/prism-python.js'),
      import('prismjs/components/prism-reason.js'),
      import('prismjs/components/prism-rust.js'),
      import('prismjs/components/prism-sass.js'),
      import('prismjs/components/prism-scss.js'),
      import('prismjs/components/prism-solidity.js'),
      import('prismjs/components/prism-sql.js'),
      import('prismjs/components/prism-stylus.js'),
      import('prismjs/components/prism-swift.js'),
      import('prismjs/components/prism-wasm.js'),
      import('prismjs/components/prism-yaml.js')
    ]);
    return m.Code;
  })
);
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

export const NotionPage = ({ recordMap, rootPageId }) => {
  if (!recordMap) return null;

  const title = getPageTitle(recordMap);
  return (
    <>
      <Head>
        <meta name="description" content="React Notion X Minimal Demo" />

        <title>{`NJACK | ${title}`}</title>
        <style>
          {`
            .notion-frame{
              background-color: #111;
              color: #ffffff;
            }
            .notion-header{
              display:none;
            }
            svg{
              fill: wheat !important;
            }
            .notion-collection-column-title-body{
              color: wheat;
            }
            .notion-page-no-cover.notion-page-no-icon{
              margin-inline: 50px;
              width: 80% !important;
            }
            .notion .notion-code{
              background-color: #111;
              border-radius: 10px;
            }
            .notion-bookmark-title, .notion-bookmark-description{
              color: white;
            }
            .notion-bookmark-link-text{
              color: white !important;
            }
          `}
        </style>
      </Head>

      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        rootPageId={rootPageId}
        components={{
          Code,
          Collection,
          Equation,
          Pdf,
          Modal
        }}
      />
    </>
  );
};
