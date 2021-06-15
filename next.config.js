// const { ContentClient } = require('dc-delivery-sdk-js');

// const client = new ContentClient({
//     account: process.env.ACCOUNT_NAME,
//     hubName: "KATA-Hub1"
//     // baseUrl: "https://cdn.c1.amplience.net/" // process.env.BASE_URL
// });

// async function generateBlogPages() {
//     const routeContentReference = process.env.DYNAMIC_CONTENT_REFERENCE_ID;
//     // fetching your content item by id and return a list of references to blog posts
//     const data = (await client.getContentItemByKey("blog-list")).toJSON()
//     console.log('data', data)
//     const { blogPosts } = data;

//     return blogPosts.reduce((pages, blog) => {
//         const slug = encodeURIComponent('blog/id');
//         const blogId = blog._meta.deliveryId;
//         // creating a page map with the requested data to fetch that blog

//         return Object.assign(pages, {
//             [`/blog/${slug}`]: {
//                 page: '/blog',
//                 query: { blogId, slug }
//             }
//         });
//     }, {});
// }

// const fetch = require('node-fetch');

// async function generatePages() {
//     const response = await fetch('http://api.openweathermap.org/data/2.5/find?lat=51.48&lon=-0.16&cnt=10&appid=ce1120e3ba8e41bfa8184eff931c3d8c');
//     const data = await response.json();
//     console.log('data', data)

//     const { list } = data;

//     return list.reduce((pages, location) => {
//         const sanitisedName = location.name.toLowerCase();
//         const slug = encodeURIComponent(sanitisedName);
//         const id = location.id;
//         // creating a page map with the requested data to fetch that blog
//         console.log('slug', slug)
//         return Object.assign(pages, {
//             [`/location/${slug}`]: {
//                 page: '/location/[location]',
//                 query: { id, slug }
//             }
//         });
//     }, {});
// }

module.exports = {
    env: {
        account: process.env.ACCOUNT_NAME,
        baseUrl: process.env.BASE_URL
    },
//     exportPathMap: async () => {
//         const pages = await generatePages();
//         console.log('----------------------- pages', pages)
//         return Object.assign({}, pages, {
//             '/': {
//                 page: '/'
//             }
//         });
//    }
    // getStaticPaths: {
    //     paths: [
    //         { params: { location: 'battersea' } },
    //     ],
    // }
}
