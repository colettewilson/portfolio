export default {
  title: 'Image',
  name: 'formattedImage',
  type: 'image',
  fields: [
    {
      title: 'Image Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Alt Text',
      name: 'alt',
      type: 'string',
      options: {
        isHighlighted: true
      },
      validation: Rule => Rule.error('This field is required for both SEO and accessibility.').required()
    }
  ]
}
