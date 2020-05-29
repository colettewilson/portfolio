export default {
  title: 'Homepage',
  name: 'homepage',
  __experimental_actions: [/* create, delete, */ 'update', 'publish'],
  type: 'document',
  fields: [
    {
      title: 'Page Title',
      name: 'pageTitle',
      type: 'string'
    },
    {
      title: 'Hero Title',
      name: 'heroTitle',
      type: 'string'
    },
    {
      title: 'About Me',
      name: 'about',
      type: 'richText'
    }
  ]
}
