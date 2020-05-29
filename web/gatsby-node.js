const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const results = await graphql(`
    {
      allSanityProject {
        edges {
          node {
            slug { current }
          }
        }
      }
    }
  `)

  const projects = results.data.allSanityProject.edges.map(({node}) => node)
  const postsPerPage = 6
  const projectPages = Math.ceil(projects.length / postsPerPage)

  projects.forEach(project => {
    actions.createPage({
      path: `portfolio/${project.slug.current}/`,
      component: path.resolve('./src/templates/portfolio/template.js'),
      context: {
        slug: project.slug.current
      }
    })
  })

  Array.from({ length: projectPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/portfolio/` : `/portfolio/page/${i + 1}/`,
      component: path.resolve('./src/templates/portfolio/index.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        projectPages,
        currentPage: i + 1
      },
    })
  })
}
