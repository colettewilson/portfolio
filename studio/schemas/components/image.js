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
      validation: Rule => Rule.error('This field is required for both SEO and accessibility.').custom((field, context) => {
        const { parent } = context

        // Allow field to be empty if no asset defined
        if (!parent.asset) return true

        // if asset defined but no alt return error message otherwise return true
        return field === undefined
          ? 'You have to fill out the alternative text.'
          : true
      }),
    }
  ]
}
