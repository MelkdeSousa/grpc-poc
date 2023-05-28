import { randomUUID } from 'crypto'
import {
  Empty,
  NoticeInfractionListResponse,
  NoticeInfractionResponse,
} from '../proto/notice-infraction_pb'
import { RPC } from '../types/rpc'

export const list: RPC<Empty, NoticeInfractionListResponse> = (
  call,
  callback,
) => {
  const response = new NoticeInfractionListResponse()

  const notices = Array.from({ length: Math.floor(Math.random() * 10) }).map(
    (_, value) => {
      const notice = new NoticeInfractionResponse()

      return notice.setId(randomUUID()).setCode(`TL${value}`)
    },
  )

  response.setNoticesList(notices)

  callback(null, response)
}
