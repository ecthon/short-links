import fastify from 'fastify'
const url = new URL('http://localhost:3333')
const app = fastify()

app.listen({
  port: 3333,
}).then(() => {
  console.log(` ✅ HTTP server running`)
  console.log(`${url}`)
})