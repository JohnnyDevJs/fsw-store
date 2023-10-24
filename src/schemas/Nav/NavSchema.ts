import { z } from 'zod'

export const NavSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
})

export type NavProps = z.infer<typeof NavSchema>
