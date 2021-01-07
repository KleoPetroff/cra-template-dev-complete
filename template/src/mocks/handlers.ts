import { rest } from 'msw'

interface PostResetPasswordRequest {
  email: string
}

export const handlers = [
  rest.post<PostResetPasswordRequest>(
    `${process.env.REACT_APP_API_URL}/hello`,
    (req, res, ctx) => {
      return res(ctx.json({ hello: 'world' }))
    }
  )
]
