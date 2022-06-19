import './main/config/module-alias'

import 'reflect-metadata'
import App from "./infra/http/fastify-app";
import ElectionRoutes from "./main/routes/election";

const app = new App({
  routes: [ElectionRoutes]
})

app.listen()