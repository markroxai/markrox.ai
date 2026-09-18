---
layout: post
title: "Securing Your Data for AI: DAMA Philadelphia"
subtitle: "AI security starts before the model sees the data."
comments: true
date: 2026-09-16
author: Mark Roxberry
excerpt: "A recap of my DAMA Philadelphia session on LLM05:2026 data and model poisoning, trust, RAG integrity, and the controls that keep AI-accessible data from quietly becoming an attack surface."
tags: [DAMA, AI, AppliedAI, DataGovernance, OWASP, AISecurity, RAG]
categories:
  - AppliedAI
postimage:
  src: "post.jpg"
  alt: "Securing Your Data for AI at DAMA Philadelphia, focused on LLM05:2026 data and model poisoning."
featured: true
pinned: true

---
## Data is a behavioral control surface

On September 16, I joined DAMA Philadelphia for a full-day meeting on adapting data strategy for AI. My session, **Securing Your Data for AI**, focused on a practical security problem: enterprise data does more than inform an AI system. It can shape what the system retrieves, remembers, recommends, and does.

That distinction matters. A corrupted report may mislead one person once. The same corrupted content, made available to a language model or an agent, can repeatedly influence answers, recommendations, workflows, and downstream systems.

The security question is not only whether the model is accurate. It is:

> What is the most consequential thing this data is allowed to cause?

That question follows data as it moves through an AI-enabled architecture: from source and ingestion, through transformation and indexing, into retrieval and inference, and finally into action and reuse.

## The operating problem is bigger than the model

The word AI often hides the architecture that actually creates the risk. In an enterprise deployment, the operational system may include:

- a large or small language model,
- a retrieval pipeline and vector index,
- persistent memory and shared context,
- agents, tools, and MCP integrations,
- an orchestration layer, and
- workflows that can change records or trigger actions.

A security control that protects only the model misses the data and system boundaries around it. A trusted model can still produce an unsafe result when it receives untrusted content, stale knowledge, manipulated metadata, or instructions mixed into retrieved context.

## LLM05:2026 and data and model poisoning

The [OWASP GenAI Top 10](https://genai.owasp.org/llmrisk/llm04-data-and-model-poisoning/) identifies **LLM05:2026, Data and Model Poisoning** as a lifecycle-wide risk. Poisoning can enter through many kinds of inputs and artifacts:

- pre-training, fine-tuning, and feedback data,
- embeddings, retrieval corpora, and external content,
- model weights, adapters, templates, and tokenizers,
- persistent memory and shared context, and
- agents, tools, and cross-system propagation.

The result does not have to be an obviously malicious answer. It may be a recommendation that consistently favors a manipulated source, a workflow that acts on a false assumption, or a memory entry that changes future behavior after the original interaction is gone.

## Not every wrong answer is the same failure

Security and governance decisions improve when different failure modes stay distinct:

| Condition | What happened | Primary concern |
| --- | --- | --- |
| Data error | An ordinary mistake entered the system | Quality |
| Stale data | Once-correct information is no longer valid | Lifecycle |
| Contamination | Data crossed an inappropriate boundary | Integrity |
| Poisoning | Manipulation or unsafe corruption changed behavior | Security |
| Prompt injection | Content was interpreted as an instruction | Control boundary |
| Hallucination | The output lacked supporting evidence | Reliability |
| Drift | Inputs or behavior changed over time | Operations |

These conditions can overlap, but they do not call for the same response. A freshness check is not a substitute for provenance. A citation is not proof that a claim is authoritative. A prompt-injection filter is not a complete data-governance program.

## Trust is multidimensional

A source can be authentic and still be the wrong source to use. It can be unaltered but out of date. It can be authoritative in one context and irrelevant in another.

For AI-accessible data, trust should be evaluated across at least six dimensions:

1. **Authenticity:** Did it come from the claimed source?
2. **Integrity:** Has it changed since it was approved?
3. **Authority:** Is this source allowed to establish the claim?
4. **Applicability:** Does the claim apply to this user, process, and decision?
5. **Freshness:** Is it still in effect?
6. **Corroboration:** Does independent evidence agree?

This is why governance metadata is not administrative decoration. Ownership, effective dates, classification, approval state, lineage, revocation, and conflict information can influence whether data should be retrieved or permitted to cause an action.

## RAG has more control points than the vector database

Retrieval-augmented generation is often summarized as “put documents in a vector database and retrieve the relevant chunks.” The real pipeline has more opportunities for failure:

1. Source selection
2. Parsing
3. Chunking
4. Metadata assignment
5. Embedding
6. Retrieval
7. Reranking
8. Context assembly
9. Answer generation
10. Action or reuse

An attacker can exploit keyword stuffing, semantic similarity, duplicate documents, strategic titles, missing qualifiers, false ownership, or misleading freshness. A citation may prove where a passage came from, but it does not prove that the passage is true, current, applicable, or authorized to decide the question.

The control objective is therefore not simply relevance. It is **authority-aware relevance**: information that is related, permitted, current, and supported well enough for the consequence at hand.

## From baseline to evidence

A useful security test should make the operating cycle visible:

1. Establish a baseline.
2. Introduce poisoned or manipulated content.
3. Observe how it influences retrieval or behavior.
4. Measure the consequence.
5. Detect the violation.
6. Trace the path through the system.
7. Contain the affected data or action.
8. Revoke the source, memory, or artifact.
9. Replay the scenario.
10. Prove that the control works.

That last step is important. “The model did not answer” is not enough evidence that a control succeeded. A useful test records what was retrieved, what was remembered, which tools were called, what authorization decisions were made, and what state changed.

## A small demonstration environment

![Poison Lab live attack console demonstrating OWASP LLM05 data and model poisoning.](./lab.png)

You can also [download the presentation](/presentations/Securing_Your_Data_for_AI.pptx) used for the session.

## A practical checklist for teams

Before allowing enterprise data to influence an AI system, ask:

- Do we know where the data came from and who owns it?
- Can we detect changes, duplicates, conflicts, and revoked content?
- Are effective dates and applicability part of retrieval decisions?
- Can the system distinguish data from instructions?
- Are memory writes and tool calls authorized independently of the model?
- Can we trace a response back through source, ingestion, retrieval, and action?
- Can we reset, quarantine, revoke, and replay an incident?
- Can we demonstrate that the control blocked the attack without disabling the legitimate workflow?

AI strategy depends on data strategy, but AI security depends on data security with a more explicit consequence model. The closer data gets to recommendations, automation, and action, the more important it becomes to govern not only what the data says, but what the system is allowed to do because of it.

## References

- [DAMA Philadelphia: Adapting Your Data Strategy for AI](https://damaphila.starchapter.com/meetinginfo.php?id=50&ts=1787677424)
- [OWASP GenAI Security Project](https://genai.owasp.org/)
- [OWASP GenAI Top 10: LLM05:2026 Data and Model Poisoning](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/)
- [OWASP HACTU8](https://owasp.org/www-project-hactu8/)

## Credits

### Presentation

- [Securing Your Data for AI](/presentations/Securing_Your_Data_for_AI.pptx)

### Demo image

- [Poison Lab attack console](./lab.png)
