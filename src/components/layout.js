import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Signature = props => (
  <div style={{ color: `#668CFF`, fontFamily: `CocoGothic`}}>
    <p style={{ fontWeight: `bold`, marginBottom: `0` }}>von {props.name}</p>
    <p>vor {props.daysNumber}</p>
    <div>
      <p style={{ fontWeight: `bold`}}>div with labels</p>
    </div>
  </div>
)
export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>MySweetSite</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
      <footer>
        <Signature name="Max Mustermann" daysNumber="3 Tagen"></Signature>
      </footer>
    </div>
  )
}
