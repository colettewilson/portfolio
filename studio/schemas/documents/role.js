export default {
  title: 'Role',
  name: 'role',
  type: 'document',
  fieldsets: [{ title: 'Dates', name: 'dates' }],
  fields: [
    {
      title: 'Company Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Position',
      name: 'position',
      type: 'string'
    },
    {
      title: 'Start Date',
      name: 'start',
      type: 'date',
      options: {
        dateFormat: 'DD MMM yyyy'
      },
      fieldset: 'dates'
    },
    {
      title: 'End Date',
      name: 'end',
      type: 'date',
      options: {
        dateFormat: 'DD MMM yyyy'
      },
      fieldset: 'dates'
    },
    {
      title: 'Responsibilities',
      name: 'responsibilities',
      type: 'richText'
    },
    {
      title: 'Skills & Technologies',
      name: 'skills',
      type: 'array',
      of: [{type: 'string'}]
    }
  ]
}