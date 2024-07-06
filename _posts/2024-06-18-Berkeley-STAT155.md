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

## Preferences

### 一些基础定义和概念

**Consumption Space**: $$X\subseteq\mathbb{R}_+^n$$

**Preference Relation**: $$x\succeq y$$, $$x$$ is as lease as good as $$y$$

**Indifference**: $$x\sim y \Longleftrightarrow x\succeq y \land y\succeq x$$

**Strict Preference**: $$x\succ y \Longleftrightarrow x\succeq y \land y\nsucceq x$$

### 常见的 Assumptions

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

我们称 $$f$$ 是 quasi-concave 的当且仅当

$$
f(\lambda x+(1-\lambda)y)\le\max\{f(x), f(y)\}
$$

**Continuous Preference**:

$$
\forall n\in\mathbb{N}, x_n\succeq y_n, x_n\to x, y_n\to y\Longrightarrow x\succeq y
$$

## Utility Functions

我们定义一个 $$u: X\to \mathbb{R}$$ 使得

$$
u(x)\ge u(y)\Longleftrightarrow x\succeq y
$$

我们说是 $$u$$ represents $$\succeq$$。

这个 $$u$$ 就是 $$\succeq$$ 的 utility functions。

一个定理是 $$\succeq$$ 是 rational and continuous 的当且仅当存在一个连续的 $$u$$。

- $$\succeq$$ is monotone $$\Longleftrightarrow$$ $$u$$ is monotone
- $$\succeq$$ is convex $$\Longleftrightarrow$$ $$u$$ is quasi-concave

当然很显然地：

$$
\begin{cases}
x\sim y\Longleftrightarrow u(x)=u(y)\\
x\succ y\Longleftrightarrow u(x)>u(y)
\end{cases}
$$

## Marginal Utility

$$
\mathrm{MU}(x)=\frac{\partial u(x)}{\partial x}
$$

一般比如说对钱，我们会有 $$\mathrm{MU}(x)$$ 是递减的。给的越多，多一块的价值越小。也就是 $$u''(x)<0$$。

## Decision Making Under Uncertainty

在有 uncertainty 的情况下，用户做的决策是 lotteries，而不是确定的 goods。

A lottery is a vector $$L = (x_1, p_1; x_2, p_2; \cdots; x_n, p_n)$$. $$x_i$$ 是 realization，$$p_i$$ 是 probability。

对于某个 realization，我们有其 utility $$u(x_i)$$，然后我们定义整个 lottery 的 utility 为 $$U(L) = \mathbb{E}[u(L)]$$ (Von-Neumann Morgenstern Utility Function)。

很多时候我们会对 lotteries 做线性叠加，比如一些钱买定期，一些钱买股票。所以其实我们就是在一个 convex set 上做决策。

这时候问题就简化为我们有 $$n$$ 个 realizations $$X = \{x_1, x_2, \cdots, x_n\}$$，将这 $$n$$ 个 realizations 做线性组合，我们将这个 simplex 定义为 $$\mathbb{L}(X)，也就是：

$$
\mathbb{L}(X) = \left\{L = (x_1, p_1; x_2, p_2; \cdots; x_n, p_n)\mid p_i\ge 0, \sum_{i=1}^n p_i = 1\right\}
$$
