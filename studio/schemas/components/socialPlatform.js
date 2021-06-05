export default {
  title: 'Social Platform',
  name: 'socialPlatform',
  type: 'object',
  fields: [
    {
      title: 'Platform',
      name: 'platform',
      type: 'string',
      options: {
        list: ['Twitter', 'LinkedIn', 'Polywork']
      }
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url'
    }
  ]
}