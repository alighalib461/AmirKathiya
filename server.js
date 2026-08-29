const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.resolve(__dirname);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  // Parse URL without query parameters
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Normalize path
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  } else if (!path.extname(pathname)) {
    // If no extension, try looking for .html
    if (fs.existsSync(path.join(PUBLIC_DIR, pathname + '.html'))) {
      pathname = pathname + '.html';
    }
  }

  const filePath = path.join(PUBLIC_DIR, pathname);

  // Security check: prevent directory traversal
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    return res.end('Forbidden');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Page Not Found - Berater Impex</title>
          <link rel="stylesheet" href="/css/main.css">
        </head>
        <body style="display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center;font-family:sans-serif;">
          <div>
            <h1 style="color:#004338;font-size:48px;margin-bottom:12px;">404</h1>
            <p style="color:#3f4946;margin-bottom:24px;">The requested page could not be found.</p>
            <a href="/" style="background:#004338;color:#fff;padding:12px 24px;border-radius:4px;text-decoration:none;font-weight:bold;">Return Home</a>
          </div>
        </body>
        </html>
      `);
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });

    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`Berater Impex Real Estate Portal is live!`);
  console.log(`URL: http://localhost:${PORT}`);
  console.log(`====================================================`);
});
