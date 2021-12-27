module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-apollo',
            options: {
                uri: 'http://127.0.0.1:5000/graphql'
            }
        }
    ]
}