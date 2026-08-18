---
layout:     post
title:      Site Roadmap
subtitle:   Retrospective and plan for site improvements
comments:   true
date:       2020-12-17 18:00:00
author:     Mark Roxberry
excerpt:    Reviewing site improvements over the past month and setting a plan for future improvements.  Done, todo and obstacles.
tags:       [blog, site, retrospective, planning, improvements, projects]
categories:
    - planning
    - website
postimage: 
    src: "post.png"
    alt: "main post image"
featured:   true
---
## Past, Present, Future
The site is looking good and it's pretty fast.  I've spent some time on features and formatting, making it easy to publish to and something I can promote.  

Now to think of the roadmap of what I did and what I want going forward.  I have some features to work on and will get some good content published.  I listed the milestones here on the roadmap, completed and planned:

1. Workflow improvement
1. Continuous performance improvements
1. Responsiveness
1. Scheduled branding
1. Integration features
1. Content features
1. Platform

## Workflow improvement
Using Github actions and Azure deployment center, I can quickly deploy site changes and content on a push to my Github repo.  I wrote and published this post on my Ipad Pro, using the [WorkingCopy](https://workingcopyapp.com) app.  WorkingCopy lets me post to my Github repo, and the repo Actions take care of compiling the Jekyll code.  Azure then picks up the branch changes and deploys to wwwroot on my Azure App Service.

TODO: One note, I hit a snag with Azure running out of space after I made a bunch of pushes to my repo.  It looks like the **.repository** directory increases each time, maybe the **.git** directory?  I will need to figure that out.

## Continuous performance improvements
markrox.ai is hitting an outstanding **95** on mobile and a **99** on desktop on the Pagespeed site (using [Lighthouse](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.markrox.ai&tab=desktop) /  [Gtmetrix.com](https://gtmetrix.com) ). Both of these tools (Gtmetrix uses Lighthouse) I made a few changes to get this score.  

Following the tools "opportunities", I made several changes to the content of my website and process to build it. I added a grunt step to compress my images. I used "uncss" and "critical" to slim down linked styles.  I used preloads, preconnects, async calls to speed up getting assets to get the "First Contentful Paint" as soon as possible.

TODO: Future improvements will include a compression review, and taking a harder look at the mobile score.

## Responsiveness
Made a first effort to refactor SASS files for media queries, improved layout using Safari and Responsive tools.  I added format changes for spacing on main content areas, a fix for the categories **card-list** layout.

TODO: Going forward, I'll continue to refactor the SASS classes.  I'd like to add features to make the sidebar act like a drawer on a click and switch from dark to light mode.

## Scheduled branding
TODO: I just thought of a new feature for changing the css colors based on a schedule.  I expect this will probably be some jquery call on page load, need to see if it is feasible (and if it won't impact my awesome perf score).  Maybe read from a json with key value pairs of the date, the source class and to class, with the classes already predefined.

## Integration features
TODO: Some ideas for new features:
1. Photo album integration
1. RSS briefing 
1. Code Kata demos

## Content features
I made a change to the images code for posts. Before, I just dumped images into the /img folder and the path on the post would always need to find it from that starting point.  I changed that to use the convention of a folder with the same name as the post file name, e.g. 2020-03-01-delta.md will have a folder in img/posts/ named 2020-03-01-delta.md.  All of the post images can be put there and managed a bit better.

TODO: Add more pages for projects that need tracking and that I can show others.

TODO: Plan the 2021 content calendar.  

Ideas - I'm in the middle of my CEH reup, so I can write about that.  I need to do a Java and C# catchup - need some ideas for projects.  I'd like to do an AI and Robotics project.  Maybe something totally different, publish some writing on Russia / Russian Language / Soviet stufies (my academic background).  Or a peek into personal / professional productivity or fun and games? Also, need a work environment and tools update, now that I'm working out of my basement bunker.

## Platform
I'm considering going to a Javascript / Node based platform, Gatsby or Next.js.  Leaving this here as a reference [Jekyll to Gatsby](https://www.gatsbyjs.com/blog/2017-11-08-migrate-from-jekyll-to-gatsby/)

## Wrap Up
Reading through, I don't have an excuse not to have more content here.  I'm excited to hit my future milestones on this roadmap.
