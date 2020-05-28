## Local Dev Env fails with fresh git clone
Very likely one of the default GraphQL queries fails with an error that prevents the build from completing. Check if you haven't **deleted/archived/unpublished** any Content on Contentful that is required by any of the pages. Remember that this is a static site rendered projects, which means EVERYTHING gets built.

## Explore the blog content structure
Return to the [tutorial doc](https://www.contentful.com/developers/docs/tutorials/general/get-started/#explore-how-the-sample-website-is-built-with-contentful) to view the relationship between the blog content and the data model.

## Modify content and redeploy
Follow this [tutorial](https://www.contentful.com/developers/docs/tutorials/general/automate-site-builds-with-webhooks/) to learn how to use webhooks to automate the process of redeploying your site after publishing new content.
