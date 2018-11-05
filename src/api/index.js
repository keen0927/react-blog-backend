const Router = require('koa-router');
const posts = require('./posts');

const api = new Router();

api.use('/posts', posts.routes());

// api.get('/test', (ctx) => {
//   ctx.body = '테스트 성공';
// });

module.exports = api;