import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";

import { site } from "@/lib/site";

/** Host of the page being rendered, so the scheduler embed matches this request. */
export const getEmbedHost = createServerFn({ method: "GET" }).handler(() => {
  return getRequestHeader("host") || new URL(site.url).host;
});
