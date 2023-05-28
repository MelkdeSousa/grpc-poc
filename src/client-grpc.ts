import { credentials } from '@grpc/grpc-js'
import { NoticeInfractionServiceClient } from './proto/notice-infraction_grpc_pb'
import { Empty } from './proto/notice-infraction_pb'

const client = new NoticeInfractionServiceClient(
  'localhost:50051',
  credentials.createInsecure(),
)

client.list(new Empty(), (err, response) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(response.toObject())
})
