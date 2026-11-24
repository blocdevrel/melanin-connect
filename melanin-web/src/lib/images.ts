import { imageManifest } from "@/lib/image-manifest";

export const imageSizes = {
  hero: "100vw",
  card: "(min-width: 900px) 32vw, 92vw",
  thumb: "(min-width: 768px) 184px, 82vw",
  half: "(min-width: 1024px) 560px, 100vw",
  project: "(min-width: 768px) 360px, 100vw",
  service: "(min-width: 768px) 540px, 100vw",
  wide: "(min-width: 1024px) 1120px, 100vw",
  logo: "(min-width: 640px) 240px, 192px",
} as const;

export function imagePreload(src: string, sizes?: string) {
  const asset = imageManifest[src];
  if (!asset) return { rel: "preload" as const, as: "image" as const, href: src };

  return {
    rel: "preload" as const,
    as: "image" as const,
    href: asset.src,
    type: "image/webp",
    ...(asset.srcSet ? { imageSrcSet: asset.srcSet, imageSizes: sizes ?? "100vw" } : {}),
    fetchPriority: "high" as const,
  };
}
