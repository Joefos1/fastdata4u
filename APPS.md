# FastData4u — mobile & desktop apps

FastData4u ships in three installable forms. The web app is the single source of
truth: payments, wallet, orders and commissions all run on Lovable Cloud, and the
mobile/desktop shells wrap that same live app.

## 1. Installable web app (PWA) — ready now

Nothing to build. On the published site (`https://fastdata4u.shop`):

- **Android / Chrome / Edge**: an "Install FastData4u" card appears, or use
  browser menu → *Install app*.
- **iPhone / Safari**: Share → *Add to Home Screen*.
- **Desktop Chrome / Edge**: install icon in the address bar → opens in its own
  window with the FastData4u icon.

Offline: the app shell, styles and fonts are cached, so the app opens without
internet and shows an offline banner. Live data (wallet, orders, bundles) still
needs a connection.

Service worker notes:
- Registered only from `src/lib/register-sw.ts`, and never in dev or Lovable preview.
- Kill switch: open any page with `?sw=off` to unregister and clear it.

## 2. Android & iOS app (Capacitor) — for Play Store / App Store

Requires Android Studio (Android) and Xcode on macOS (iOS) on your own machine.

```bash
npm i -D @capacitor/cli
npm i @capacitor/core @capacitor/android @capacitor/ios

npx cap add android
npx cap add ios

npx cap sync
npx cap open android   # or: npx cap open ios
```

`capacitor.config.ts` already sets the app id (`shop.fastdata4u.app`), name,
splash colour and the allowed navigation hosts (including Paystack checkout).
Icons: reuse `public/icon-512.png` in Android Studio's *Image Asset* generator
and Xcode's *AppIcon* set.

## 3. Desktop app (Electron) — downloadable installer

```bash
npm i -D electron @electron/packager

# run it locally
npx electron .

# package (pick your platform)
npx @electron/packager . "FastData4u" --platform=win32  --arch=x64 --out=electron-release --overwrite --ignore='node_modules' --ignore='^/src' --ignore='^/electron-release'
npx @electron/packager . "FastData4u" --platform=darwin --arch=arm64 --out=electron-release --overwrite --ignore='node_modules' --ignore='^/src' --ignore='^/electron-release'
npx @electron/packager . "FastData4u" --platform=linux  --arch=x64 --out=electron-release --overwrite --ignore='node_modules' --ignore='^/src' --ignore='^/electron-release'
```

The window loads `https://fastdata4u.shop` (override with the
`FASTDATA4U_URL` env var), keeps Paystack checkout inside the app, opens other
external links in the system browser, and falls back to `electron/offline.html`
when there's no connection.
