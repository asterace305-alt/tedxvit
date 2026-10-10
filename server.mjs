import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('.', import.meta.url));
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml'};
const handler = async (req,res)=>{try{const pathname=decodeURIComponent(new URL(req.url,`http://${req.headers.host}`).pathname);const safe=normalize(join(root,pathname==='/'?'index.html':pathname.slice(1)));if(!safe.startsWith(root)){res.writeHead(403);return res.end('Forbidden')}const data=await readFile(safe);res.writeHead(200,{'Content-Type':types[extname(safe)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(data)}catch{res.writeHead(404,{'Content-Type':'text/plain'});res.end('Not found')}};
const requested=Number(process.env.PORT||4173);
function listen(port){const server=http.createServer(handler);server.once('error',err=>{if(err.code==='EADDRINUSE'&&port<4185){listen(port+1)}else{console.error(err);process.exitCode=1}});server.listen(port,'127.0.0.1',()=>console.log(`TEDxVITPune local site → http://127.0.0.1:${port}`));}
listen(requested);
