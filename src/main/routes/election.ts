import { Controller } from "@/application/controllers/controller";
import { FastifyInstance, FastifyPluginOptions, FastifyReply } from "fastify";
import { makeCreateElectionController } from "../factories/create-election-controller";
import { makeFindAllElectionController } from "../factories/find-all-elections";
import { MakePersistenceArray } from "../factories/persistence-array";

const setFormatError = (code: number,  message: string) => {
  return {
    error: {
      code: code,
      message: message
    }
  }
}

const setFormatSuccess = (code: number,  message: string) => {
  return {
    success: {
      code: code,
      message: message
    }
  }
}

const parseResponse = (data: any) => {
  if(data.constructor === Error) {
    const errorSpliter = data.toString().split(': ')
    const errorCode = parseInt(errorSpliter[1], 10)
    const errorMessage = `${errorSpliter[1]}:${errorSpliter[2]}`
    return setFormatError(errorCode, errorMessage)
  } else if(typeof data === 'string') {
    const successCode = parseInt(data.toString().split(':')[0], 10)
    const successMessage = data
    return setFormatSuccess(successCode, successMessage)
  } else {
    return data
  }
}

const responseSender = async (data: any, reply: FastifyReply): Promise<void> => {
  reply.send(data)
}

const responseHandler = async (next: Function, reply: FastifyReply): Promise<void> => {
  try {
    const data = await next()
    responseSender(parseResponse(data), reply)
  } catch (error) {
    responseSender(parseResponse(error), reply)
  }
}

const adaptFastifyRoute =  (controller: Controller) => {
  return async(request: any, reply: any) => {
    responseHandler(async () => {
      const data = controller.handle({...request.body})
      return data
    }, reply)
    await reply
  }
}

export default class ElectionRoutes {
  public prefix_route = '/election'

  async routes(fastify: FastifyInstance, options: FastifyPluginOptions, done: any) {

    const persistenceArray = MakePersistenceArray()

    const createElectionController = makeCreateElectionController(persistenceArray)
    fastify.post('/', adaptFastifyRoute(createElectionController))

    const findAllElections = makeFindAllElectionController(persistenceArray)
    fastify.get('/elections', adaptFastifyRoute(findAllElections))

    done()
  }
}