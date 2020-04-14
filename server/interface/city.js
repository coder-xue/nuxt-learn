import Router from 'koa-router'

const router = new Router({
  prefix: '/city'
})

router.get('/list', async function(ctx) {
  ctx.body = {
    list: ['北京', '深圳']
  }
})

export default router