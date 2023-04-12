import Document, { Head, Html, Main, NextScript } from "next/document";

const APP_NAME =
  "kollsh  online marketplace for buying and selling new and used products in Saudi Arabia";
const APP_DESCRIPTION =
  "Kollsh is your go-to online marketplace for buying and selling new and used products in Saudi Arabia. Whether you're looking for the latest gadgets, trendy fashion items, or household essentials, Kollsh offers a convenient and hassle-free way to connect with buyers and sellers across all cities in the country.";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="description" content={APP_DESCRIPTION} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
          <meta
            property="og:title"
            content="kollsh  online marketplace for buying and selling new and used products in Saudi Arabia"
          />
          <meta property="og:type" content="eCommerce Website" />
          <meta property="og:url" content="https://kollsh.com" />
          <meta
            property="og:image"
            content="https://i.ibb.co/6rLYMzc/kollshmuckp.jpg"
          />
        </Head>
        <body className="bg-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
