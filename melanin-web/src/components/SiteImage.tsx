import type { ImgHTMLAttributes } from "react";

import { imageManifest } from "@/lib/image-manifest";

type SiteImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet" | "width" | "height" | "loading" | "fetchPriority" | "decoding" | "sizes"
> & {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
};

export function SiteImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
  ...rest
}: SiteImageProps) {
  const asset = imageManifest[src];
  if (!asset) {
    return <img {...rest} src={src} alt={alt} className={className} decoding="async" />;
  }

  return (
    <img
      {...rest}
      src={asset.src}
      srcSet={asset.srcSet}
      sizes={asset.srcSet ? (sizes ?? "100vw") : undefined}
      alt={alt}
      width={asset.width}
      height={asset.height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
