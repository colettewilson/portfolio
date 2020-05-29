## Contents ##
  * [Sanity Setup](#markdown-header-sanity-setup)
  * [Gatsby Setup](#markdown-header-gatsby-setup)
  * [Netlify Setup](#markdown-header-netlify-setup)

## Sanity Setup ##
cd into the `studio` directory

1. Ensure Yarn or NPM is installed, run either `yarn install` or `npm install` depending on your package manager.
2. Run `cp .env.template .env` and update the SANITY_STUDIO_API_DATASET variable in the newly created `.env` file.
3. Run `[yarn/npm] run start` or `sanity start` to start a local sanity server, visit http://localhost:3333.
4. To build the studio run either `[yarn/npm] run build` or `sanity build`.
5. To make Sanity CMS data queriable by GraphQL run `sanity graphql deploy` - this necessary for Gatsby.
6. To update Sanity CMS run `sanity update`.
7. For documentation on Sanity CMS visit https://www.sanity.io/docs.

## Gatsby Setup ##
cd into the `web` directory

1. Ensure Yarn or NPM is installed, run either `yarn install` or `npm install` depending on your package manager.
2. Run `cp .env.template .env.development` and update the relevant environment variables in the newly created `.env.development`.
3. Run `[yarn/npm] run develop` to start a local gatsby server, visit http://localhost:8000 to view the frontend or http://localhost:8000/___graphql to inspect the schema.
4. For documentation on Gatsby visit https://www.gatsbyjs.org/docs/.

## Netlify Setup ##
_To do_
