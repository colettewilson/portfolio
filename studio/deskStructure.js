import S from '@sanity/desk-tool/structure-builder'
import { TiHome } from 'react-icons/ti'
import { MdWork } from 'react-icons/md'
import { AiFillTool } from 'react-icons/ai'
import { IoMdPricetag } from 'react-icons/io'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = listItem =>
  !['siteSettings', 'homepage', 'project', 'tag', 'tool'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(TiHome)
        .child(S.editor().id('siteSettings').schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('Homepage')
        .icon(TiHome)
        .child(S.editor().id('homepage').schemaType('homepage').documentId('homepage')),
      S.listItem()
        .title('Portfolio')
        .icon(MdWork)
        .child(S.documentTypeList('project').title('Portfolio')),
      S.listItem()
        .title('Tags')
        .icon(IoMdPricetag)
        .child(S.documentTypeList('tag').title('Tags')),
      S.listItem()
        .title('Tools')
        .icon(AiFillTool)
        .child(S.documentTypeList('tool').title('Tools')),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
