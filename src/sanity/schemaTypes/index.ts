import { type SchemaTypeDefinition } from 'sanity'
import produts from './produts'
import category from './category'
import order from './order'
import users from './users'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [produts,category,order,users],
}
