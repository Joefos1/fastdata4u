import type { CapacitorConfig } from "@capacitor/cli";

/**
 * Native Android / iOS shell for FastData4u.
 *
 * FastData4u's payments, wallet and order processing run server-side on
 * Lovable Cloud, so the native app loads the live site inside a native
 * WebView. The web app itself is a PWA, so the app shell is still cached
 * for offline viewing.
 *
 * Point `server.url` at your own build/preview URL while testing.
 */
const config: CapacitorConfig = {
  appId: "shop.fastdata4u.app",
  appName: "FastData4u",
  webDir: "public",
  server: {
    url: "https://fastdata4u.shop",
    cleartext: false,
    androidScheme: "https",
    allowNavigation: ["fastdata4u.shop", "*.fastdata4u.shop", "*.paystack.co", "*.paystack.com"],
  },
  android: {
    backgroundColor: "#04150e",
  },
  ios: {
    contentInset: "always",
    backgroundColor: "#04150e",
  },
};

export default config;
