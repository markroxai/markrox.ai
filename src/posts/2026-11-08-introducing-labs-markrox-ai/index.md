---
layout: post
title: "Introducing Labs.MarkRox.AI"
subtitle: "Hands-on builds in AI, with code, demos, and write-ups"
comments: true
date: 2026-11-08
author: Mark Roxberry
excerpt: "I’m building a home for practical AI experiments: small, reproducible labs that explore evaluation, robustness, and production workflows using synthetic or public data."
tags: [AppliedAI, AI, Evaluation, LLM, Engineering, Labs]
categories:
  - AppliedAI
postimage:
  src: "post.jpg"
  alt: "An AI evaluation lab with a central model connected to experiment stations, traces, and scoring dashboards"
featured: true
pinned: true
---

## A Place to Build and Test AI Ideas

I’ve started **[Labs.MarkRox.AI](https://labs.markrox.ai)** as a home for hands-on AI builds. The goal is to make the work concrete: each lab pairs code with a demo and a write-up, so the ideas can be explored, run, and examined—not just discussed.

The labs use synthetic or public data. No client or production data.

## Starting with AI Evaluation

The first series is **[AI Eval Labs](https://labs.markrox.ai/ai-eval/)**. It lays out 16 focused projects, from trajectory grading, statistical significance, and calibrated LLM judges to adversarial testing, regression gates, drift monitoring, and evaluation methodology.

The point is to work through the engineering behind useful evaluation: what to measure, how to make results repeatable, and how to carry those checks into real workflows. The series is a roadmap, not a claim that all 16 labs are finished.

## The First Lab Is Underway

[Lab 00: Setup and Reference Agent](https://labs.markrox.ai/ai-eval/00-setup/) is in progress. Its shared harness currently includes 41 documents, 30 tasks, and an offline mock agent that records JSONL traces. Five smoke tasks have mock fixtures, so the basic workflow can be exercised without a live model.

There is still work to do: submitted answers are not yet graded, real-model runs and conversation handling need more work, and the lab demo and full write-up are still ahead. I want those limits to be visible while the project grows.

You can inspect the [harness source](https://github.com/markroxai/labs.markrox.ai/tree/main/series/ai-eval/harness) and follow the [AI Eval Labs roadmap](https://labs.markrox.ai/ai-eval/). The core scope for each lab is intentionally small enough to make progress in a day.

## Why Make This Public?

Evaluation is easy to talk about in the abstract. It gets more useful when you can inspect the tasks, run the harness, see the traces, and understand what a result does—and does not—tell you.

That is what I want this space to support: practical experiments, clear evidence, and lessons that can be reused. I’ll share the builds as they take shape.

### References

- [Labs.MarkRox.AI](https://labs.markrox.ai)
- [AI Eval Labs](https://labs.markrox.ai/ai-eval/)
- [Lab 00: Setup and Reference Agent](https://labs.markrox.ai/ai-eval/00-setup/)
- [AI Eval harness source](https://github.com/markroxai/labs.markrox.ai/tree/main/series/ai-eval/harness)

### Image Credit

Cover image generated with an original prompt by Mark Roxberry.
