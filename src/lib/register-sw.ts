// Single place that registers the offline service worker. Never in dev/preview/iframe.
export function registerServiceWorker() {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
  const h = window.location.hostname;
  const inIframe = (() => { try { return window.self !== window.top; } catch { return true; } })();
  const refused =
    !import.meta.env.PROD ||
    inIframe ||
    h.startsWith("id-preview--") || h.startsWith("preview--") ||
    h === "lovableproject.com" || h.endsWith(".lovableproject.com") ||
    h === "lovableproject-dev.com" || h.endsWith(".lovableproject-dev.com") ||
    h === "beta.lovable.dev" || h.endsWith(".beta.lovable.dev") ||
    new URLSearchParams(window.location.search).has("sw") &&
      new URLSearchParams(window.location.search).get("sw") === "off";
  if (refused) {
    void navigator.serviceWorker.getRegistrations().then((regs) =>
      regs.forEach((r) => { if (r.active?.scriptURL.endsWith("/sw.js")) void r.unregister(); }),
    );
    return;
  }
  void navigator.serviceWorker.register("/sw.js").catch(() => undefined);
}
