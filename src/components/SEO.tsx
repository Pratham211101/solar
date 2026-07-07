import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  schema?: Record<string, any>;
}

const SEO = ({ 
  title = "SUNBOT - Intelligent Infrastructure Solutions", 
  description = "SUNBOT builds intelligent solar-powered systems, smart controls, and modern infrastructure designs enabling reliable and scalable deployments.", 
  keywords = "solar infrastructure, intelligent solutions, sunbot, smart monitoring, clean energy", 
  ogImage = "/og-image.jpg", 
  ogUrl,
  schema
}: SEOProps) => {
  const location = useLocation();
  const siteTitle = title.includes("SUNBOT") ? title : `${title} | SUNBOT`;
  const url = ogUrl || `https://www.sunbot.in${location.pathname}`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SUNBOT",
    "url": "https://www.sunbot.in/",
    "logo": "https://www.sunbot.in/favicon.png",
    "description": "Intelligent solar-powered systems, smart controls, and modern infrastructure designs.",
  };

  const schemaData = schema || defaultSchema;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph tags for social media sharing */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
