import http from 'http';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { ServerRouter, createServerRenderContext } from 'react-router'

import Main from './dashboard/containers/Dashboard.jsx';
import Layout from './dashboard/components/Layout.jsx';

function requestHandler(request, response){
  const context = createServerRenderContext();
  let html = renderToString(
    <ServerRouter location={request.url} context={context}>
      <Main />
    </ServerRouter>
  )

  const result = context.getResult();

  response.setHeader('Content-Type', 'text/html');

  if (result.redirect) {
    response.writeHead(301, {
      Location: result.redirect.pathname,
    });
  }

  if (result.missed) {
    response.writeHead(404);

    html = renderToString(
      <ServerRouter location={request.url} context={context}>
        <Main />
      </ServerRouter>
    );
  }

  response.write(
    renderToStaticMarkup(
      <Layout
        title="Aplicación"
        content={html}
      />
    )
  );
  response.end();
}

const server = http.createServer(requestHandler);

server.listen(3000);
