import React from "react";
import Head from "next/head";

export interface HeaderControllerProps {
  title?: string;
  description?: string;
}

/**
 * ## HeaderController
 * @param props  description, title
 * @returns React.FC
 */

export const SEO: React.FC<HeaderControllerProps> = ({
  title,
  description,
}) => {
  const appName = "420";

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />
      <title>{title ? `${title} | ${appName}` : appName}</title>
      <meta name="description" content={description || "420"} />
      <meta name="application-name" content={appName} />
      <meta property="og:title" content={`${appName}`} />
      <meta property="og:description" content={`${appName}`} />
      <meta property="og:site_name" content={appName} />
      <meta property="og:type" content="website" />
    </Head>
  );
};
