---
layout: post
title: Parallel Computing and Distributed Systems
categories: Notes
date: 2025-03-30
description: Notes for NTU MH3512 Distributed System
tags:
  - Distributed System
giscus_comments: true
related_posts: false
toc:
  sidebar: left
---

## Parallel Computing

https://cs149.stanford.edu/

Forms of Parallel Execution
1. Superscalar: 找到不相关的语句然后并行执行
2. SIMD：ALU 的并行，Single instruction, multiple data
3. Multi-core：多个 core，所以想咋玩咋玩

SIMD 遇到 branchs？一部分 ALU 需要等待

{% include figure.liquid loading="eager" path="assets/img/pc/simd_branch.png" class="img-fluid rounded z-depth-1" %}

Interleaved (temporal) multi-threading: 这个任务在 stall 了（比如在 fetch memory），先执行别的任务

Overcoming bandwidth limits is often the most important challenge facing software developers targeting modern throughput-optimized systems.

## Distributed System

https://pdos.csail.mit.edu/6.824/index.html

https://www.scs.stanford.edu/24sp-cs244b/

### Remote Procedure Call

需要比普通的 procedure 多一个 "I don't know" 的选项。

Interface Definition Languages (IDL): Specify RPC call and return types

{% include figure.liquid loading="eager" path="assets/img/2025-03-30-Parallel-Computing-and-Distributed-Systems/ds/idl.png" class="img-fluid rounded z-depth-1" %}
