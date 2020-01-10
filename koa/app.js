const Koa = require ('koa');
const app = new Koa ();
const http = require ('http').createServer (app.callback ());
const io = require ('socket.io') (http);
io.on ('connection', socket => {
  console.log ('koa connect');
  socket.emit ('respounse', {success: true});
});
const Router = require ('koa-router');
const router = new Router ();
router.get ('/', ctx => {
  ctx.body = 'hello';
});
app.use (router.routes ());
http.listen (3001, () => {
  console.log ('listen 3001');
});
