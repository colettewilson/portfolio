import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from 'next-sanity'

const config = {
  projectId: 'arl4lotg',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true
}

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...config,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {},
})

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

// // Set up the live preview subscription hook
// export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// // Set up a preview client with serverless authentication for drafts
// export const previewClient = createClient({
//   ...config,
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN,
// })

// Helper function for easily switching between normal client and preview client
// export const getClient = (usePreview) => (usePreview ? previewClient : sanityClient)
export const getClient = sanityClient