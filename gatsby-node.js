const path = require("path")
//Create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const news = path.resolve(`src/templates/newTemplate.js`)
  const programs = path.resolve(`src/templates/programTemplate.js`)
  const resProgra = await graphql(`
    {
      allContentfulOngPrograms {
        nodes {
          texto {
            id
          }
        }
      }
    }
  `)
  const resNews = await graphql(`
    {
      allContentfulNews {
        nodes {
          texto {
            id
          }
        }
      }
    }
  `)

  resNews.data.allContentfulNews.nodes.forEach(item => {
    createPage({
      path: `/news/${item.texto.id}`,
      component: news,
      context: {
        id: item.texto.id,
      },
    })
  })

  resProgra.data.allContentfulOngPrograms.nodes.forEach(item => {
    createPage({
      path: `/programs/${item.texto.id}`,
      component: programs,
      context: {
        id: item.texto.id,
      },
    })
  })
}
