import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Title() {
    const { site: { siteMetadata: { title } } } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return <h1>{ title }</h1>
}
