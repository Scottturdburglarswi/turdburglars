import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const BASE_URL = "https://turdburglarswi.com";
const DEFAULT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028378508/mauC7Xq7GwXUvn389Jy89d/van-autumn_67a2fc61.png";

export function useSEO({ title, description, canonical, ogImage }: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set or create meta tag
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrVal] = attr.split("=");
        el.setAttribute(attrName, attrVal.replace(/"/g, ""));
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    setMeta('meta[name="description"]', 'name="description"', description);
    setMeta('meta[name="title"]', 'name="title"', title);

    // Open Graph
    setMeta('meta[property="og:title"]', 'property="og:title"', title);
    setMeta('meta[property="og:description"]', 'property="og:description"', description);
    setMeta('meta[property="og:url"]', 'property="og:url"', canonical ? `${BASE_URL}${canonical}` : BASE_URL);
    setMeta('meta[property="og:image"]', 'property="og:image"', ogImage || DEFAULT_IMAGE);

    // Twitter
    setMeta('meta[name="twitter:title"]', 'name="twitter:title"', title);
    setMeta('meta[name="twitter:description"]', 'name="twitter:description"', description);
    setMeta('meta[name="twitter:image"]', 'name="twitter:image"', ogImage || DEFAULT_IMAGE);

    // Canonical
    let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", canonical ? `${BASE_URL}${canonical}` : BASE_URL);
  }, [title, description, canonical, ogImage]);
}
