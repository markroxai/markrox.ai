---
layout: post
title: Rolled My Own Pager
subtitle: Notes for the pager implementation on markrox.ai
comments: true
date: 2021-07-07 01:00:00
author: Mark Roxberry
excerpt: Notes on coding a pager for the site
tags: [site, development, react]
categories:
  - development
postimage:
  src: "post.png"
  alt: "main post image"
featured: true
---

# Infinity scroll or pager

I opted to implement a pager on markrox.ai

## Pager.js

Followed the [guidance](https://www.gatsbyjs.com/docs/adding-pagination/#gatsby-skip-here) on the Gatsby site to query and set pages in the gatsby-node.js file, added a posts.js template and moved the Pager code to a separate file, pager.js.

```js
import React from "react"
import { Link } from "gatsby"

const Pager = ({
  isFirst,
  isLast,
  prevPage,
  nextPage,
  currentPage,
  numPages,
}) => {
  return (
    <ul
      className="post-pager"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        listStyle: "none",
        paddingInlineStart: 0,
      }}
    >
      {!isFirst && (
        <Link to={prevPage} rel="prev" style={{ marginRight: 20 }}>
          ← Previous Page
        </Link>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <li
          key={`pagination-number${i + 1}`}
          style={{
            margin: 20,
          }}
        >
          <Link
            to={`/${i === 0 ? "" : i + 1}`}
            style={{
              textDecoration: "none",
              color: i + 1 === currentPage ? "#ffffff" : "",
              background: i + 1 === currentPage ? "#007acc" : "",
            }}
          >
            {i + 1}
          </Link>
        </li>
      ))}
      {!isLast && (
        <Link to={nextPage} rel="next" style={{ marginLeft: 20 }}>
          Next Page →
        </Link>
      )}
    </ul>
  )
}

export default Pager
```

Pager then can be added to a page template, posts.js:

```js
import Pager from "../components/Pager"
```

Set the values, per the Gatsby documentation,

```js
const { currentPage, numPages } = this.props.pageContext
const isFirst = currentPage === 1
const isLast = currentPage === numPages
const prevPage =
  currentPage - 1 === 1 ? "/" : "/" + (currentPage - 1).toString()
const nextPage = "/" + (currentPage + 1).toString()
```

And then placed in the component hierarchy of the page (note the properties for the component passed in).

```js
    <Pager
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
        currentPage={currentPage}
        numPages={numPages} />
```
