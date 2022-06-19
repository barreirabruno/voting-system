import fastify, { FastifyInstance } from "fastify";

export default class App {
  public app: FastifyInstance
  public app_port: number = 3333;

  constructor(appInit: { routes: any}) {
    this.app = fastify({logger: true})
    this.routes(appInit.routes)
  }

  private routes(routes: { forEach: (arg0: (routes: any) => void) => void}) {
    routes.forEach((route) => {
      let router = new route()
      this.app.register(router.routes, { prefix: router.prefix_router})
    })

    this.app.get('/healthcheck', async (request, reply) => {reply.send({healthCheck: "[SERVER IS ALIVE]"})})
  }

  public listen() {
    this.app.listen({ port: this.app_port})
      .then((address) => console.log(`[SERVER UP AND RUNNING ON PORT][${this.app_port}]`))
      .catch(err => {
        console.log(`[ERROR STARTING THE SERVER]: `, err);
        process.exit(1)
      })
  } 
}