import { Ctx } from "blitz"
import db from "db"

export default async function getUsers(_ = null, ctx: Ctx) {
  ctx.session.authorize()

  const user = await db.user.findMany({
    select: { name: true, email: true, id: true },
  })

  return user
}
