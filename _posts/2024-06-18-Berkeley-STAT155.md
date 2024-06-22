---
layout: post
title: UC Berkeley STAT 155 Game Theory
categories: Notes
date: 2024-06-18
description: Notes for UC Berkeley STAT 155 Game Theory
tags:
  - Game Theory
# pseudocode: true
giscus_comments: true
related_posts: false
toc:
  sidebar: left
---

## Week 1

### Preferences

**Consumption Space**: $$X\subseteq\mathbb{R}_+^n$$

**Preference Relation**: $$x\succeq y$$, $$x$$ is as lease as good as $$y$$

**Indifference**: $$x\sim y \Longleftrightarrow x\succeq y \land y\succeq x$$

**Strict Preference**: $$x\succ y \Longleftrightarrow x\succeq y \land y\nsucceq x$$

考虑到我们定义的 preferences 很宽泛，我们定义两个 assumptions 来限制我们的 preferences。

1. Rationality assumptions
2. Well-Behaved assumptions

第一个通常是 the bare minimum，第二个是一些更加严格的 assumptions，make the model more tractable。

#### Rationality Assumptions

需要满足 completeness 和 transitivity。

一个违反的例子是剪刀石头布，我们有

$$
x\succ y\succ z\succ x
$$

形成了一个环，导致了我们没法做出一个最优的选择。

另一个违反的例子是关于现实生活的，就是在现实生活中其实情况更复杂一些。比如以咖啡为例，一点点糖的变化感觉不出来，也就是：

$$
c_1\sim c_{0.9}\sim c_{0.8}\sim\cdots\sim c_{0.1}\sim c_0
$$

但很显然 $$c_1\nsim c_0$$。也就是说是不满足 transitivity 的。
