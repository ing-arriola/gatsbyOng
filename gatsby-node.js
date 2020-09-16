const path = require("path")
//Create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const res = await graphql(`
    query getText {
      news: allContentfulNews {
        nodes {
          texto {
            id
          }
        }
      }
    }
  `)
  res.data.news.nodes.forEach(item => {
    createPage({
      path: `/news/${item.texto.id}`,
      component: path.resolve(`src/templates/newTemplate.js`),
      context: {
        id: item.texto.id,
      },
    })
  })
}
