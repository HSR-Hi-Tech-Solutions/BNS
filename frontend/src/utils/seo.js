/**
 * SEO utility — updates document title and meta tags
 */
export const setPageMeta = ({ title, description, ogImage }) => {
  // Title
  if (title) {
    document.title = title.includes('BNS')
      ? title
      : `${title} | BNS — Bengal News Service`;
  }

  // Description
  if (description) {
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }

  // OG Image
  if (ogImage) {
    let ogMeta = document.querySelector('meta[property="og:image"]');
    if (!ogMeta) {
      ogMeta = document.createElement('meta');
      ogMeta.setAttribute('property', 'og:image');
      document.head.appendChild(ogMeta);
    }
    ogMeta.setAttribute('content', ogImage);
  }
};

export const useSEO = (meta) => {
  setPageMeta(meta);
};
