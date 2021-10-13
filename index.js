const express = require( 'express' );
const { createProxyMiddleware } = require( 'http-proxy-middleware' );

const app = express();

app.use( '/*.xml', createProxyMiddleware( {
	changeOrigin: true,
	followRedirects: true, // if you'd rather serve redirects to the user, consider autoRewrite instead
	target: 'https://docs.wpvip.com',
} ) );

app.listen( process.env.PORT || 3000 );
