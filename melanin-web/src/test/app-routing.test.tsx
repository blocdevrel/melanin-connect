import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without rendering: jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  const router = createRouter({ routeTree });

  it.each(["/", "/about-us", "/services", "/contact-us", "/privacy", "/terms", "/book"])(
    "matches a page for %s",
    (path) => {
      const matches = router.matchRoutes(path);
      expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    },
  );

  it("falls back to not found for unknown paths", () => {
    const matches = router.matchRoutes("/does-not-exist");
    expect(matches.at(-1)?.routeId).toBe(rootRouteId);
  });
});
