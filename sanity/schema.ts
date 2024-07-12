import experience from '@/schema/experience'
import profile from '@/schema/profile'
import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, experience],
}