# Maintenance

## Convert .md -> .html

```
./job-entries/convert.ps1
```

## Init Playwright:

```
npx playwright install
```

## Generate PDF

```
npx http-server . -p 8080
node generate-pdf.js
```
