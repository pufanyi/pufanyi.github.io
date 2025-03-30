---
layout: post
title: Parallel Computing and Distributed Systems
categories: Notes
date: 2025-03-30
description: Notes for Parallel Computing and Distributed Systems
tags:
  - Parallel Computing
  - Distributed System
giscus_comments: true
related_posts: false
toc:
  sidebar: left
bibliography: 2025-03-30-Parallel-Computing-and-Distributed-Systems.bib
---

## Parallel Computing

[Stanford CS149](https://cs149.stanford.edu/)

Forms of Parallel Execution

1. Superscalar: 找到不相关的语句然后并行执行
2. SIMD：ALU 的并行，Single instruction, multiple data
3. Multi-core：多个 core，所以想咋玩咋玩

SIMD 遇到 branchs？一部分 ALU 需要等待

{% include figure.liquid loading="eager" path="assets/img/2025-03-30-Parallel-Computing-and-Distributed-Systems/pc/simd_branch.png" class="img-fluid rounded z-depth-1" %}

Interleaved (temporal) multi-threading: 这个任务在 stall 了（比如在 fetch memory），先执行别的任务

Overcoming bandwidth limits is often the most important challenge facing software developers targeting modern throughput-optimized systems.

## Distributed System

[MIT 6.824](https://pdos.csail.mit.edu/6.824/index.html)

[Stanford CS244B](https://www.scs.stanford.edu/24sp-cs244b/)

### Remote Procedure Call (RPC)

需要比普通的 procedure 多一个 "I don't know" 的选项。

Interface Definition Languages (IDL): Specify RPC call and return types

{% include figure.liquid loading="eager" path="assets/img/2025-03-30-Parallel-Computing-and-Distributed-Systems/ds/idl.png" class="img-fluid rounded z-depth-1" %}

[External Data Representation Standard (XDR)](https://datatracker.ietf.org/doc/html/rfc4506)

### Consensus

在讨论 asynchronous systems 的时候，我们会保守地认为网络是很慢的。也就是说，we can't distinguish failed agent from slow network.

{% cite fischer1985impossibility %}
