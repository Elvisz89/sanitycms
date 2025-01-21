import { defineField, defineType } from 'sanity';

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the homepage (for internal use)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Event Description',
    }),
    defineField({
      name: 'startDate',
      type: 'datetime',
      title: 'Start Date',
    }),
    defineField({
      name: 'endDate',
      type: 'datetime',
      title: 'End Date',
    }),
    defineField({
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
      description: 'The discount applied to the featured products',
    }),
    defineField({
      name: 'featuredProducts',
      type: 'array',
      title: 'Featured Products',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      description: 'Products featured in the Black Friday event',
    }),
    defineField({
      name: 'accessories',
      type: 'boolean',
      title: 'Do you need additional accessories for your phone?',
    }),
    defineField({
      name: 'accessoriesList',
      type: 'array',
      title: 'Accessories',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              title: 'Accessory Name',
            }),
            defineField({
              name: 'price',
              type: 'number',
              title: 'Price',
            }),
            defineField({
              name: 'image',
              type: 'image',
              title: 'Accessory Image',
              options: {
                hotspot: true,
              },
            }),
          ],
        },
      ],
      hidden: ({ parent }) => !parent?.accessories, // Hides this field when `accessories` is false or undefined
      description: 'List of accessories available for the phone',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
});
