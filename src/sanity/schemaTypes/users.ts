import type { Rule as ValidationRule } from "sanity";

const user = {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation:  (Rule: ValidationRule) =>
        Rule.required().regex(
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          { name: 'email', invert: false }
        ),
    },
    {
      name: 'password',
      title: 'Password (Encrypted)',
      type: 'string',
      hidden: true, // You can manage password in auth system like Clerk
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'isAdmin',
      title: 'Is Admin?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'orders',
      title: 'Orders',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'order' }] }],
    },
  ],
}

export default user
