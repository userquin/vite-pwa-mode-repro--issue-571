# Vite --mode doesn't work with service workers

Build and run in dev mode:

```
npm run dev
```

Run the app, and see the following in the console log:

```
index.tsx MODE development
index.tsx VITE_TEST development mode
sw.ts MODE development
sw.ts VITE_TEST development mode
```

This shows that the app was built in "development" mode, and the .env.development.local was applied.

Now build the app in preview mode:

```
npm run build -- --mode preview
npm run preview
```

The output will show that the SW part of the build was actually in production mode, not preview mode as expected:

```
> build
> vite build --mode preview

vite v5.0.10 building for preview...
✓ 9 modules transformed.
dist/registerSW.js               0.13 kB
dist/manifest.webmanifest        0.17 kB
dist/index.html                  0.56 kB │ gzip: 0.35 kB
dist/assets/index-wBkgAX1U.css   1.20 kB │ gzip: 0.62 kB
dist/assets/index-vOC9ncnR.js   15.99 kB │ gzip: 6.75 kB

vite v5.0.10 building for production...     <--- This should be "preview", not "production"
✓ 65 modules transformed.
dist/sw.js  43.22 kB │ gzip: 12.18 kB
✓ built in 89ms

PWA v0.17.4
mode      injectManifest
precache  5 entries (17.46 KiB)
files generated
  dist/sw.js
✓ built in 535ms
```

Also run with `--debug` to see the sourced env in detail.

Run the app in preview mode and the console log will contain:

```
index.tsx MODE preview
index.tsx VITE_TEST preview mode
sw.ts MODE production
sw.ts VITE_TEST production mode
```

Neither MODE nor VITE_TEST showed preview mode values as expected.
