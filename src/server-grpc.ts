import { Server, ServerCredentials } from '@grpc/grpc-js'
import { readFileSync } from 'fs'
import { join } from 'path'
import { NoticeInfractionServiceService } from './proto/notice-infraction_grpc_pb'
import { list } from './services/NoticeInfraction'

const server = new Server()

const credentials = ServerCredentials.createSsl(
  readFileSync('./certs/ca.crt'),
  [
    {
      cert_chain: readFileSync(join(__dirname, '..', 'certs', 'server.crt')),
      private_key: readFileSync(join(__dirname, '..', 'certs', 'server.key')),
    },
  ],
  true,
)

const main = () => {
  server.addService(NoticeInfractionServiceService, {
    list,
  })

  server.bindAsync('0.0.0.0:50051', credentials, () => {
    server.start()
    console.log('Start gRPC server')
  })
}

main()
