import { credentials as ClientCredentials } from '@grpc/grpc-js'
import { readFileSync } from 'fs'
import { join } from 'path'
import { NoticeInfractionServiceClient } from './proto/notice-infraction_grpc_pb'
import { Empty } from './proto/notice-infraction_pb'

const credentials = ClientCredentials.createSsl(
  readFileSync(join(__dirname, '..', 'certs', 'ca.crt')),
  readFileSync(join(__dirname, '..', 'certs', 'client.key')),
  readFileSync(join(__dirname, '..', 'certs', 'client.crt')),
)

const client = new NoticeInfractionServiceClient('localhost:50051', credentials)

client.list(new Empty(), (err, response) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(response.toObject())
})
