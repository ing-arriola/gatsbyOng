const path = require("path")
//Create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const news = path.resolve(`src/templates/newTemplate.js`)
  const programs = path.resolve(`src/templates/programTemplate.js`)
  const res = await graphql(`
    {
      news: allContentfulNews {
        nodes {
          texto {
            id
          }
        }
      }

      programs: allContentfulPrograms {
        nodes {
          descripcion {
            id
          }
        }
      }
    }
  `)

  res.data.news.nodes.forEach(item => {
    createPage({
      path: `/news/${item.texto.id}`,
      component: news,
      context: {
        id: item.texto.id,
      },
    })
  })
  res.data.programs.nodes.forEach(item => {
    createPage({
      path: `/programs/${item.descripcion.id}`,
      component: programs,
      context: {
        id: item.descripcion.id,
      },
    })
  })
}
