---
layout: distill
title: Parallel Computing and Distributed Systems
categories: Notes
date: 2025-03-30
description: Notes for Parallel Computing and Distributed Systems
tags:
  - Parallel Computing
  - Distributed System
giscus_comments: true
related_posts: false
bibliography: 2025-03-30-Parallel-Computing-and-Distributed-Systems.bib
authors:
  - name: Pu Fanyi
    url: "https://pufanyi.github.io"
    affiliations:
      name: NTU, Singapore
      url: "https://www.ntu.edu.sg/"
---

## Parallel Computing

[Stanford CS149](https://cs149.stanford.edu/)

### A Modern Multi-Core Processor

Forms of Parallel Execution

1. Superscalar: 找到不相关的语句然后并行执行
2. SIMD：ALU 的并行，Single instruction, multiple data
3. Multi-core：多个 core，所以想咋玩咋玩

Vector Program: [AVX intrinsics](https://www.intel.com/content/www/us/en/docs/intrinsics-guide/index.html)

SIMD 遇到 branchs？一部分 ALU 需要等待

{% include figure.liquid loading="eager" path="assets/img/2025-03-30-Parallel-Computing-and-Distributed-Systems/pc/simd_branch.png" class="img-fluid rounded z-depth-1" %}

### Accessing Memory

Interleaved (temporal) multi-threading: 这个任务在 stall 了（比如在 fetch memory），先执行别的任务

Overcoming bandwidth limits is often the most important challenge facing software developers targeting modern throughput-optimized systems.

---

## Distributed System

[MIT 6.824](https://pdos.csail.mit.edu/6.824/index.html)

[Stanford CS244B](https://www.scs.stanford.edu/24sp-cs244b/)

忽然发现 CS244B 的 instructor 是 <d-cite key="vamplew2016get"></d-cite> 的一作。

### Introduction

You should try everything else before you try distributed systems.

Why distributed systems?

- Parallelism
- Fault tolerance
- Physical
- Security (isolation)

Infrastructure for application:

1. Storage
2. Communication
3. Computation

我们是要将这些复杂的 distribution 隐藏起来，让他看起来像是一个普通的系统

### Remote Procedure Call (RPC)

需要比普通的 procedure 多一个 "I don't know" 的选项。

Interface Definition Languages (IDL): Specify RPC call and return types

{% include figure.liquid loading="eager" path="assets/img/2025-03-30-Parallel-Computing-and-Distributed-Systems/ds/idl.png" class="img-fluid rounded z-depth-1" %}

[External Data Representation Standard (XDR)](https://datatracker.ietf.org/doc/html/rfc4506)

### Consensus

在讨论 asynchronous systems 的时候，我们会保守地认为网络是很慢的。也就是说，we can't distinguish failed agent from slow network.

有 $$n$$ 个 agents，每个 agent input 一个数字，现在要各个 agent 通过互相交流达成一致，使得每个 agent 的 output 都相同，并且是其中一个 agent 的 input。

**Safety**: 所有 agent 的 output 都相同（agreement）并且 output 为其中某个 agent 的 input（validity）

**Liveness**: 所有 non-failed 的 agents 都有输出

**Fault tolerance**:

- Fail-stop: 如果 agent 出错，那么他会立即停止
- Byzantine-fault-tolerant <d-cite key="lamport2019byzantine"></d-cite>: agent 出错可能出现任意行为，比如发送假消息

**FLP impossibility result** <d-cite key="fischer1985impossibility"></d-cite>: 对于 deterministic consensus protocol，safety, liveness, and fault tolerance 三者不可得兼。

**Bivalent**: An execution of a consensus protocol is in a bivalent state when the network can affect which value agents choose.

**Univalent, Valent**: An execution of a consensus protocol is in a univalent state when only one output value is possible. If that value is $$i$$, call the state $$i$$-valent.

**Stuck**: An execution of a \[broken\] consensus protocol is in a stuck state when one or more non-faulty nodes can never output a value.
