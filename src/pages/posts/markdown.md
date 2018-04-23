---
title: "Markdown Styling"
date: "2018-11-01"
featuredImage: "./i1.jpg"
---

![salted duck eggs](./i1.jpg)

**Below is a large body of text, so you can get a good idea of the reading experience. After that, you'll see how headers, quotes, code, list and tables are styled.**

---

## As promised, a large body of text...

Dicunt periculis necessitatibus in his, ei nam fastidii delectus salutatus. Id vis reformidans liberavisse, consul ignota officiis mea ut. Ei nam elit dicant labitur, cu duo fugit errem democritum, per purto libris dolorum et. Cu sea mazim tamquam. Qui odio epicurei sensibus cu. Probo ubique labore cu sit. Sea eius possit blandit ei.

Ex has omnis labores, ad has scripta delicata reformidans. Dico viris oratio at per. Nec at sint brute consequuntur, has in putant iisque. Nam ne veri solet maiestatis, legere nusquam sea ei, vel eu aeque harum adversarium. Cu nec doming torquatos maiestatis, prima facete scripserit eos ad. At errem nominati mel, no mel viris delicatissimi.

Eum meis quaeque abhorreant id. Dictas honestatis eu eos, in error officiis conclusionemque vis. Et iusto copiosae qui, inimicus splendide no sed, vim eu case accusata iracundia. Te soluta doctus prodesset mel, sed cu tale persequeris. Eius contentiones ei vix, ea mei appetere referrentur, elit disputando cu pro. Ei sed aliquam impedit adversarium, duo ne inani ocurreret democritum.

Meliore accumsan noluisse ea usu, zril apeirian repudiandae est ex. No simul appareat vix, nibh aliquip liberavisse eam at. Qualisque voluptatibus per no. Vis ei cibo aliquam gubergren, te etiam meliore mei. Et cum iriure assentior.

___

## Now for the styles
### Blockquotes

> Gatsby.js is a static PWA (Progressive Web App) generator. You get code and data splitting out-of-the-box. Gatsby loads only the critical HTML, CSS, data, and JavaScript so your site loads as fast as possible.

Ps. The last heading was **H3**, and the one above that was a **H2**.

Gatsby is *awesome*.

### Code formatting using PrismJS

```javascript
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
};
``` 


Inline code: `console.log('Inline Code')`.

### Tables

First Header | Second Header | Third Header
------------ | ------------- | -------------
Webpack | Parcel  | Gulp
Complicated | Ez pz | Straightforward enough
Second | First  | Last

### Lists

#### Bulleted List
* One
* Two
* Three
* Four

#### Numbered List
1. One
2. Two
3. Three
4. Four

#### Checked List

1. [ ] One
1. [ ] Two
1. [ ] Three
1. [ ] Four

### Last but not least, Links!

[Ibrahims Blog](https://www.ibrahimbutt.xyz)