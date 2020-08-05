import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { useStaticQuery, Link, graphql } from "gatsby"

const Signature = props => (
  <div style={{ color: `#668CFF`, fontFamily: `CocoGothic` }}>
    <p style={{ fontWeight: `bold`, marginBottom: `0` }}>von {props.name}</p>
    <p>vor {props.daysNumber}</p>
    <div>
      <p style={{ fontWeight: `bold` }}>div with labels</p>
    </div>
  </div>
)
export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <div
        css={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <Link to={`/`}>
          <h3
            css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <div
          css={css`
            float: right;
          `}
        >
          <Link
            to={`/`}
            css={css`float: right; display: inline-block, marginRight: 1rem`}
          >
            Home
          </Link>
          <Link
            to={`/about/`}
            css={css`float: right; display: inline-block, marginRight: 1rem`}
          >
            About
          </Link>
          <Link
            to={`/contact/`}
            css={css`float: right; display: inline-block, marginRight: 1rem`}
          >
            Contacts
          </Link>
        </div>
        {children}
      </div>
      <footer>
        <Signature name="Max Mustermann" daysNumber="3 Tagen"></Signature>
      </footer>
    </div>
  )
}
