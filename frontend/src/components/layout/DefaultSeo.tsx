import { DefaultSeo as NextSeo } from "next-seo";

const DefaultSeo = () => {
  return (
    <NextSeo
      title="kollsh - online marketplace for buying and selling new and used products in Saudi Arabia"
      openGraph={{
        type: "website",
        locale: "en_IE",
        url: "https://kollsh-store.vercel.app/",
        site_name:
          "kollsh - online marketplace for buying and selling new and used products in Saudi Arabia",
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
      additionalMetaTags={[
        {
          name: "viewport",
          content:
            "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
        },
        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
      ]}
      additionalLinkTags={[
        {
          rel: "apple-touch-icon",
          href: "/icon-192x192.png",
        },
        {
          rel: "manifest",
          href: "/manifest.json",
        },
      ]}
    />
  );
};

export default DefaultSeo;
