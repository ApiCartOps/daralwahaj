export function SEOStructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dar Alwahaj Technical Services LLC",
    alternateName: "DAW Tech Services",
    url: "https://dawtechservices.com",
    logo: "https://dawtechservices.com/assets/logo.png",
    description:
      "Dar Alwahaj Technical Services provides integrated technical solutions including data center services, CCTV security systems, fiber optics, HVAC, electromechanical services, and facility cleaning across the UAE.",
    sameAs: [
      "https://www.facebook.com/dawtech",
      "https://www.linkedin.com/company/daw-tech-services",
      "https://www.instagram.com/dawtechservices",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Alkhabeesi Building, Plot 128-246-18",
      addressLocality: "Deira",
      addressRegion: "Dubai",
      postalCode: "0000",
      addressCountry: "AE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Business Services",
      email: "info@dawtechservices.com",
      availableLanguage: ["en", "ar"],
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://dawtechservices.com",
    name: "DAW Tech Services",
    description:
      "Technical Services in Dubai, UAE - Data Center, CCTV, Fiber Optics, HVAC, Electromechanical, and Cleaning Services",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://dawtechservices.com?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://dawtechservices.com",
    name: "DAW Tech Services",
    image: "https://dawtechservices.com/assets/logo.png",
    description:
      "Integrated technical services provider in Dubai offering data center solutions, security systems, fiber optics, HVAC, and facility management.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Alkhabeesi Building, Plot 128-246-18",
      addressLocality: "Deira",
      addressRegion: "Dubai",
      postalCode: "0000",
      addressCountry: "AE",
    },
    telephone: "+971-4-XXXXXXX",
    email: "info@dawtechservices.com",
    url: "https://dawtechservices.com",
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
    serviceType: [
      "Data Center Services",
      "CCTV & Security Systems",
      "Fiber Optics Installation",
      "Structured Cabling",
      "HVAC Services",
      "Electromechanical Services",
      "Facility Cleaning",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
