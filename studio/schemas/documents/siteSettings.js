import bcp47 from 'bcp47'

export default {
  title: 'Site Setting',
  name: 'siteSettings',
  type: 'document',
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  __experimental_actions: [/* create, delete, */ 'update', 'publish'],
  fields: [
    {
      title: 'Site title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Secondary Title Section',
      name: 'titleSection',
      type: 'string',
      description: '2/3 word description ideally containing main SEO keyword(s). Used to create meta titles.',
      validation: Rule => Rule.required().max(30)
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical urls.',
      validation: Rule => Rule.required()
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: '3',
      description: 'The main site description. Used as a fallback for pages without a unique description.',
      validation: Rule => Rule.required().max(155).warning('Description too long. Optimal length is 155 characters or less.')
    },
    {
      title: 'Site language',
      name: 'lang',
      type: 'string',
      description: 'Should be a valid bcp47 language code like en or en-US',
      validation: Rule =>
        Rule.custom(lang =>
          bcp47.parse(lang) ? true : 'Please use a valid bcp47 code'
        ),
    },
    {
      title: 'Open Graph Image',
      name: 'ogImage',
      type: 'image',
      description: 'A generic open graph image to be used as a fallback for pages without a unique open graph image.',
    },
    {
      title: 'Social Media',
      name: 'socialMedia',
      type: 'array',
      of: [{ type: 'socialPlatform' }]
    }
  ],
}
