import { Server, ServerCredentials } from '@grpc/grpc-js'
import { NoticeInfractionServiceService } from './proto/notice-infraction_grpc_pb'
import { list } from './services/NoticeInfraction'

const server = new Server()

const main = () => {
  server.addService(NoticeInfractionServiceService, {
    list,
  })

  server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), () => {
    server.start()
    console.log('Start gRPC server')
  })
}

main()
