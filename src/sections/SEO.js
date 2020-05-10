import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"


function Seo({ description, lang, meta, title, slug, siteImage }) {
    const { site } = useStaticQuery(
        graphql`
        query {
            site {
                siteMetadata {
                    description
                    author
                    siteUrl
                    siteImage
                }
            }
        }
        `
    );

    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
        htmlAttributes={{
            lang,
          }}
          title={title}
          meta={[
            {
               name: `description`,
               content: metaDescription,
             },
             {
               property: `og:title`,
               content: title,
             },
             {
               property: `og:description`,
               content: metaDescription,
             },
             {
               property: `og:type`,
               content: `website`,
             },
             {
               name: `twitter:card`,
               content: `summary_large_image`,
             },
             {
               name: `twitter:creator`,
               content: `${site.siteMetadata.author}`,
             },
             {
                name: `twitter:image`,
                content: `${site.siteMetadata.siteImage}`,
            },
             {
               name: `twitter:title`,
               content: title,
             },
             {
               name: `twitter:description`,
               content: metaDescription,
             }
          ].concat(meta)}
        />
    )
}

export default Seo;
