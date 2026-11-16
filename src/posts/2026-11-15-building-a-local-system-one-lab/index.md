---
layout: post
title: "Building a Local System One Lab with Nimble and Ollama"
subtitle: "Exploring fast, structured AI decisions inside ordinary software workflows"
comments: true
date: 2026-11-15
author: Mark Roxberry
excerpt: "I’m starting a System One lab series with Nimble running locally through Ollama, exploring typed decisions, workflow integration, simulation, and measured evaluation."
tags: [AppliedAI, AI, SystemOne, Nimble, Ollama, Evaluation]
categories:
  - AppliedAI
postimage:
  src: "post.jpg"
  alt: "A local AI decision model routes structured state into parallel typed decisions and an evaluation dashboard"
featured: true
pinned: true
---

## From Chat to Decisions

I’ve added a **[System One series](https://labs.markrox.ai/system-one/)** to Labs.MarkRox.AI. My starting point is **Nimble running locally through Ollama**.

The idea is to explore a different way of using AI in software. A language model can produce a flexible answer, but an application usually needs a decision it can act on: classify a ticket, select a workflow, score a result, or decide which branch to take. Turning generated prose into something dependable takes parsing, validation, and careful handling of errors.

System One decision models approach that interface differently. Rather than making free-form text the output, they answer defined questions with structured decisions. That can make them a better fit for some software workflows—but it does not make the decision automatically correct.

## What “System One” Means Here

[Stanford HAI describes System One models](https://hai.stanford.edu/ai-definitions/what-is-a-system-one-model) as fast, automatic systems that respond from learned patterns, in contrast with models that work through a problem step by step. The name borrows from the familiar fast-and-slow distinction; in this lab, I’m interested in the engineering interface rather than making claims about human cognition.

[TypeSafe’s Jev announcement](https://typesafe.ai/blog/introducing-system-one-models-and-jev) describes decision models that take state and return typed answers, including probabilities and confidence. [Ollama now supports Jev-style decision models](https://ollama.com/blog/ollama-now-supports-jev-style-decision-models), including **Nimble**, an open-source decision model from Bespoke Labs.

The request shape is a useful illustration: provide the model with some state, then define the decisions the application needs.

```json
{
  "model": "nimble",
  "state": {
    "ticket": "The data export fails after I change the date filter."
  },
  "questions": {
    "team": {
      "type": "choice",
      "instructions": "Which team should handle this ticket?",
      "criteria": {
        "data": "Data export and filters",
        "account": "Sign-in and profile",
        "other": "None of these"
      }
    },
    "urgency": {
      "type": "score",
      "instructions": "How urgent is this issue?",
      "criteria": ["Routine", "Soon", "Urgent"]
    }
  }
}
```

With Ollama, this API is available at the local `/v1/systemone` endpoint. A decision model can return the requested choice or score along with probabilities and confidence, giving the calling code a structured result to inspect.

## Why I’m Trying It Locally

Running Nimble through Ollama gives me a local place to experiment with the decision-model interface, without sending each inference request to a hosted model service. It also makes it easier to focus on the parts I want to understand: how the question schema shapes the result, how uncertain decisions should be handled, and what the surrounding workflow needs to verify.

I’m not treating “structured” as a synonym for “safe” or “right.” A schema can constrain the shape of an answer; it cannot guarantee that the selected team is correct, that a score is well calibrated, or that a decision is appropriate to automate. Those need to be tested against examples and measured in context.

For higher-impact actions, the model should be one input to a controlled process—not the only authorization. In particular, the planned robot-action lab is explicitly a **simulator**, not a connection to physical hardware.

## The Four Labs

The [System One roadmap](https://labs.markrox.ai/system-one/) currently contains four proposed builds:

1. **ETL Schema Mapper** — explore structured decisions for mapping data and handling schema variation.
2. **Small-System Workflow Orchestrator** — connect decisions to explicit workflow branches.
3. **Robot Action Gatekeeper (Simulator)** — test a decision boundary in a simulated action workflow.
4. **Decision Model Bake-off** — compare decision models using measured tasks rather than impressions.

All four are currently marked **Not started**. These are the directions I want to explore, not completed features or benchmark results. I’ll use the labs to find out where the decision-model approach is useful, where it struggles, and what controls a real application would still need.

## The Questions I Want to Measure

Speed is an obvious reason to look at local decision models, but latency alone is not enough. As the series develops, I want to examine questions like:

- Do the model’s choices match the task criteria?
- Do its probabilities and confidence correspond to observed accuracy?
- How does performance change when the state or choice set grows?
- Does a structured decision simplify the workflow, or just move complexity into schema design?
- Which decisions should still require deterministic checks or human review?

That is the part I find most interesting: treating model output as an engineering interface that can be tested, rather than a confident-looking answer that should simply be trusted.

This is an early-stage series. I’m starting with Nimble and Ollama in my local lab, and I’ll share what I learn as the experiments take shape.

### References

- [System One labs](https://labs.markrox.ai/system-one/)
- [Stanford HAI: What Is a System One Model?](https://hai.stanford.edu/ai-definitions/what-is-a-system-one-model)
- [TypeSafe: Introducing System One Models & Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)
- [Ollama: Jev-style decision models](https://ollama.com/blog/ollama-now-supports-jev-style-decision-models)

### Image Credit

Cover image generated with an original prompt by Mark Roxberry.
