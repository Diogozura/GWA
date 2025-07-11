export default function Head() {

    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SmokeClub",
      "url": "https://gwasocialclub.es",
      "logo": "https://gwasocialclub.es/logo.png",
      "description": "Private club for smoke lovers and good vibes.",
      "sameAs": ["https://instagram.com/smokeclub"]
    })
  }}
></script>
  return (
    <>
      <title>SmokeClub – Exclusive Vibes Only</title>
      <meta name="description" content="A private club for good people, good vibes and good smoke. Apply now to join." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="SmokeClub – Exclusive Vibes Only" />
      <meta property="og:description" content="A private club for good people, good vibes and good smoke. Apply now to join." />
      <meta property="og:image" content="https://gwasocialclub.es/og-image.png" />
      <meta property="og:url" content="https://gwasocialclub.es" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="SmokeClub – Exclusive Vibes Only" />
      <meta name="twitter:description" content="A private club for good people, good vibes and good smoke. Apply now to join." />
      <meta name="twitter:image" content="https://gwasocialclub.es/og-image.png" />

      <link rel="icon" href="/favicon/favicon.ico" />
    </>
  );
}
