import Head from 'next/head'

const GA_TRACKING_ID = 'UA-92527355-1'

const Main = (props) => (
  <div>
  <Head>
  <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}');
    `}}
    />

  <title>POSEV</title>
  <meta charSet="utf8"/>
  <meta name="description" content="Siberian electronic music label"/>
  <meta name="keywords" content="siberia,music,techno,electronic,industrial,spiritual,cult,dragstor,otres,grey infantry,suspiria,prizraki katakomb,cum prison,victory flowers"/>
  <meta name="author" content="Stanislaw Mnizhek"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta property="og:title" content="POSEV"/>
  <meta property="og:type" content="music.playlist"/>
  <meta property="og:url" content="https://posev.su"/>
  <meta property="og:site_name" content="POSEV"/>
  <meta property="og:image" content="/static/icon.jpg"/>
  <link rel="shortcut icon" type="image/jpg" href="/static/icon.jpg"/>
  </Head>
  {props.children}
  <style jsx global>{`
    body {
      background: #121212;

      text-align: center;

      font-size: 1.2em;
      font-family: monospace;
      color: #bcbcbc;

      margin: 0;
      padding: 0;
    }

    p {
      margin-block-start: 0.7em;
      margin-block-end: 0.7em;
    }

    a {
      color: #bcbcbc;
      text-decoration: none;
    }

    a:hover {
      text-decoration: line-through;
    }

    ul {
      margin: 0;
      padding: 0;
    }

    li {
      margin: 0;
      padding: 0;
    }

    input {
      border-color: #bcbcbc;
      border-style: solid;
      border-width: 1px;

      color: #bcbcbc;
      background: #121212;

      font-size: 1em;
      font-family: monospace;
    }

    input[type="submit"] {
      padding: 1px 7px;
      cursor: pointer;
    }

    input[type="email"] {
    }

    input:focus {
      outline: none;
    }

      `}
    </style>
    </div>

  )

export default Main
