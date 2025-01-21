import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'About Us',
  type: 'document',
  fields: [
    defineField({
      name: 'faq',
      type: 'string',
      title: 'Frequently Asked Questions', // Add a title for the field
    }),
    defineField({
      name: 'returnpolicies',
      type: 'string',
      title: 'Return Policies', // Add a title for this field
    }),
  ],
})
