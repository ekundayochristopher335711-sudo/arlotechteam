import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

const BASE_URL = "https://arlotech.com.ng";
const SUFFIX = " | Arlotech — Web Design Nigeria";

function setMeta(name: string, content: string, attribute = "name") {
  let el = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSEO({ title, description, path = "" }: SEOProps) {
  useEffect(() => {
    const fullTitle = title + SUFFIX;
    const url = BASE_URL + path;

    document.title = fullTitle;

    setMeta("description", description);
    setMeta("og:title", description, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", url, "property");
    setMeta("twitter:title", fullTitle, "name");
    setMeta("twitter:description", description, "name");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, path]);
}
