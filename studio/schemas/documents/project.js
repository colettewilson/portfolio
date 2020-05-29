export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      title: 'Image',
      name: 'image',
      type: 'formattedImage'
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'text',
      rows: 3
    },
    {
      title: 'Body',
      name: 'body',
      type: 'richText'
    },
    {
      title: 'Stack',
      name: 'stack',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tool'}]}],
      options: {
        layout: 'tags'
      }
    },
    {
      title: 'Website',
      name: 'website',
      type: 'url'
    }
  ]
}
