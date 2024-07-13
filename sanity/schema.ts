import { type SchemaTypeDefinition } from 'sanity'

import experience from '@/schema/experience'
import profile from '@/schema/profile'
import skill from '@/schema/skill'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, experience, skill],
}