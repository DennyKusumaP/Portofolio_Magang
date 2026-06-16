import { b as HTTPResponse } from "../_libs/h3.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
const rendererTemplate = () => new HTTPResponse('<!DOCTYPE html>\r\n<html lang="id">\r\n  <head>\r\n    <meta charset="UTF-8" />\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r\n    <title>Portofolio Magang</title>\r\n    <link rel="stylesheet" href="/assets/styles-CTAXRcoJ.css">\r\n  </head>\r\n  <body>\r\n    <div id="root"></div>\r\n    <script type="module" src="/assets/index-DqRfJNbJ.js"><\/script>\r\n  </body>\r\n</html>', { headers: { "content-type": "text/html; charset=utf-8" } });
function renderIndexHTML(event) {
  return rendererTemplate(event.req);
}
export {
  renderIndexHTML as default
};
