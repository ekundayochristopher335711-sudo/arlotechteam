const COVER_INDEX: Record<string, number> = {
  "professional-website-doubles-credibility": 0,
  "why-small-business-needs-website-2026": 1,
  "10-seo-tips-that-work": 2,
  "choosing-right-domain-name": 3,
  "website-speed-matters": 4,
  "ai-tools-every-entrepreneur-should-know": 5,
};

type BlogCoverProps = {
  slug: string;
  alt: string;
  image?: string;
  className?: string;
};

export function BlogCover({ slug, alt, image, className = "" }: BlogCoverProps) {
  if (image) {
    return <img src={image} alt={alt} loading="lazy" className={`h-full w-full object-cover ${className}`} />;
  }

  const index = COVER_INDEX[slug] ?? 0;
  const column = index % 3;
  const row = Math.floor(index / 3);

  return (
    <div
      role="img"
      aria-label={alt}
      className={`h-full w-full bg-cover ${className}`}
      style={{
        backgroundImage: 'url("/images/blog-covers.jpg")',
        backgroundSize: "300% auto",
        backgroundPosition: `${column * 50}% ${row * 100}%`,
      }}
    />
  );
}
