import { type SchemaTypeDefinition } from 'sanity'
import produts from './produts'
import category from './category'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [produts,category],
}
