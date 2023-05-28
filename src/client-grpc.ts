import { credentials, loadPackageDefinition } from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'
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
const client = new noticeInfractionProto.NoticeInfractionService(
  'localhost:50051',
  credentials.createInsecure(),
)

client.list({}, (err, response) => {
  console.log('List:', response.notices)
})
