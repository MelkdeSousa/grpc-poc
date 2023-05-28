import { Server, ServerCredentials, loadPackageDefinition } from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'
import { randomUUID } from 'node:crypto'
import path from 'node:path'

const packageDefinition = loadSync(
  path.join(__dirname, 'proto', 'notice-infraction.proto'),
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  },
)

const noticeInfractionProto =
  loadPackageDefinition(packageDefinition).notice_infraction

const server = new Server()

const list = async (call: unknown, callback: Function) => {
  return callback(null, {
    notices: [
      {
        id: randomUUID(),
        code: 'TL00001',
      },
      {
        id: randomUUID(),
        code: 'TL00002',
      },
      {
        id: randomUUID(),
        code: 'TL00003',
      },
    ],
  })
}

const main = () => {
  server.addService(noticeInfractionProto.NoticeInfractionService.service, {
    list,
  })

  server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), () => {
    server.start()
    console.log('Start gRPC server')
  })
}

main()
