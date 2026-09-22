# Vendored Firebase SDK

These ES modules were downloaded from Google's official Firebase CDN at
`https://www.gstatic.com/firebasejs/12.18.0/` and pinned to version 12.18.0.

The three imports of the CDN-hosted `firebase-app.js` inside the Auth and
Firestore modules were changed to the relative path `./firebase-app.js` so the
entire dependency is served from Estuary's own GitHub Pages origin.

Before replacing these files, download a reviewed Firebase release from the
official source, inspect the version change, update the relative imports, and
regenerate `SHA256SUMS`.
