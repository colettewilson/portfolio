export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  initialValue: () => ({
    publishDate: new Date().toISOString(),
    seo: {
      _type: 'seoOptions',
      removeSitemap: false,
      noIndex: false
    }
  }),
  orderings: [
    {
      title: 'Last Published',
      name: 'publishDate',
      by: [
        {field: 'publishDate', direction: 'desc'}
      ]
    }
  ],
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
      title: 'Publish Date',
      name: 'publishDate',
      type: 'datetime'
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
    },
    {
      title: 'Gallery',
      name: 'gallery',
      type: 'array',
      of: [{type: 'formattedImage'}]
    }
  ]
}
