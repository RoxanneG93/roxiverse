import {request, gql} from 'graphql-request'


const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async() => {
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
              author {
                name
                photo {
                  url
                }
              }
            }
          }
        }
      }
    `;
    const results = await request(graphqlAPI, query)

    // console.log(results.postsConnection.edges.node.author.photo.url)
    return results.postsConnection.edges;
}

// QGL function to get most recent posts
export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ){
        title
        featuredImage{
          url
        }
        createdAt
        slug
      }
    }
  `
  const results = await request(graphqlAPI, query)
  return results.posts;
}

// get all related posts except current viewed posts
export const getRelatedPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ){
        title
        featuredImage{
          url
        }
        createdAt
        slug
      }
    }
  `
  const results = await request(graphqlAPI, query, {categories, slug})
  return results.posts;
}


export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `
  const results = await request(graphqlAPI, query)
  return results.categories;
}

export const getPostDetails = async(slug) => {
  const query = gql`
  query GetPostDetails($slug: String!) {
    post(where: {slug: $slug}){
      author {
        bio
        name
        id
        photo {
          url
        }
      }
      createdAt
      slug
      title
      excerpt
      featuredImage {
        url
      }
      categories {
        name
        slug
      }
      content {
        raw
      }
    }
  }
  `;
  const results = await request(graphqlAPI, query, { slug })
  console.log('results', results)

  // console.log(results.postsConnection.edges.node.author.photo.url)
  return results.post;
}