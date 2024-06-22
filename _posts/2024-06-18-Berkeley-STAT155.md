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

#### 一些基础定义和概念

**Consumption Space**: $$X\subseteq\mathbb{R}_+^n$$

**Preference Relation**: $$x\succeq y$$, $$x$$ is as lease as good as $$y$$

**Indifference**: $$x\sim y \Longleftrightarrow x\succeq y \land y\succeq x$$

**Strict Preference**: $$x\succ y \Longleftrightarrow x\succeq y \land y\nsucceq x$$

#### 常见的 Assumptions

Preference 这个概念挺大的，通常我们会带着一些 assumption 来研究。下面是一些常见的 assumption。

**Rationality Assumption**: completeness and transitivity。

这样不会陷入死循环和一些矛盾的情况。

反例：

1. 剪刀石头布：$$x\succ y\succ z\succ x$$，无法做出最优选择
2. 咖啡加糖：$$c_1\sim c_{0.9}\sim c_{0.8}\sim\cdots\sim c_{0.1}\sim c_0$$，但是$$c_1\nsim c_0$$。需要考虑一些心理的情况。

_**Convex Combination**_:

$$
\alpha x+(1-\alpha)y, \alpha\in[0,1]
$$

_**Convex Set**_:

$$
\forall x, y\in X\ ,\forall\alpha\in[0, 1], \alpha x+(1-\alpha)y\in X
$$

_**Convex Function**_:

$$
f: X\to\mathbb{R}, \forall x, y\in X, \forall\alpha\in[0, 1], f(\alpha x+(1-\alpha)y)\le \alpha f(x)+(1-\alpha)f(y)
$$

_**Concave Function**_: 反一下变成哭脸

高维空间比大小的一些记号：

$$
\begin{aligned}
x\ge y&\Longleftrightarrow \forall i, x_i\ge y_i\\
x>y&\Longleftrightarrow x\ge y\land x\neq y\\
x\gg y&\Longleftrightarrow \forall i, x_i>y_i
\end{aligned}
$$

_**Strongly Monotone**_:

$$
x>y\Longrightarrow f(x)>f(y)
$$

_**Weakly Monotone**_:

$$
x\gg y\Longrightarrow f(x)> f(y)
$$

**Locally Satisfied Preference**:

$$
\forall x\in X, \forall \epsilon>0, \exists y, \lVert x-y\rVert<\epsilon\land y\succeq x
$$

旁边总有比他好的。

**Weekly Monotone Preference**:

$$
x\gg y\Longrightarrow x\succ y
$$

所有东西都来一点更好。

**Strongly Monotone Preference**:

$$
x>y\Longrightarrow x\succ y
$$

越多越好。

**Convex Preference**:

$$
x\succeq z, y\succeq z\Longrightarrow\forall\alpha\in[0, 1], \alpha x+(1-\alpha)y\succeq z
$$

**Strictly Convex Preference**:

$$
x\succeq z, y\succeq z, y\neq x\Longrightarrow \forall\alpha\in(0, 1), \alpha x+(1-\alpha)y\succ z
$$

{% details 一些理解 %}

Convex preference 还有一种等价的定义方式，就是对于任意 $$z\in X$$，我们都有 $$U_z=\{x\in X\mid x\succeq z\}$$ 是 convex preference。

如果用 utility function 来表示的话，preference 的 convexity 和 function 的 convexity 是相反的。我的理解是或许定义的时候我们考虑的是 loss function，也就是把 $$x\succeq y$$ 看成是 $$x\le y$$。

另外就是我在看定义的时候有的一点小疑惑，就是他为会不会有可能出现这样的形式：

![](/assets/img/2024-06-17-Berkeley-CS161/convex.svg)

但其实是没关系的，因为我们这边说的是 $$\forall x, y$$，所以我们只要把 $$x$$ 移到 $$t$$ 的位置，条件就不满足了。

{% enddetails %}
