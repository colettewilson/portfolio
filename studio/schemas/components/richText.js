import React from 'react'

export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'H6', value: 'h6'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'}
        ],
        annotations: [
          {
            title: 'Link',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'Link',
                name: 'link',
                type: 'url',
                description: 'Please use relative urls for internal links.',
                validation: Rule => Rule.uri({
                  allowRelative: true,
                  scheme: ['https', 'http', 'mailto', 'tel']
                })
              },
              {
                title: 'New Tab',
                name: 'newTab',
                type: 'boolean',
                options: {
                  layout: 'checkbox'
                }
              },
              {
                title: 'No Follow',
                name: 'noFollow',
                type: 'boolean',
                options: {
                  layout: 'checkbox'
                }
              }
            ],
            blockEditor: {
              render: ({children}) => <span>{children} 🔗</span>
            }
          },
        ]
      },
    }
  ]
}
