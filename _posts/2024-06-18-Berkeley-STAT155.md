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
pretty_table: true
toc:
  sidebar: left
---

## Preferences

### 一些基础定义和概念

**Consumption Space**: $$X\subseteq\mathbb{R}_+^n$$

**Preference Relation**: $$x\succsim y$$ or $$x\succeq y$$, $$x$$ is as lease as good as $$y$$

**Indifference**: $$x\sim y \Longleftrightarrow x\succsim y \land y\succsim x$$

**Strict Preference**: $$x\succ y \Longleftrightarrow x\succsim y \land x\nsim y$$

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

Convex 是笑脸，concave 是哭脸。

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
\forall x\in X, \forall \epsilon>0, \exists y, \lVert x-y\rVert<\epsilon\land y\succsim x
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
x\succsim z, y\succsim z\Longrightarrow\forall\alpha\in[0, 1], \alpha x+(1-\alpha)y\succsim z
$$

**Strictly Convex Preference**:

$$
x\succsim z, y\succsim z, y\neq x\Longrightarrow \forall\alpha\in(0, 1), \alpha x+(1-\alpha)y\succ z
$$

我们称 $$f$$ 是 quasi-concave 的当且仅当

$$
f(\lambda x+(1-\lambda)y)\le\max\{f(x), f(y)\}
$$

**Continuous Preference**:

$$
\forall n\in\mathbb{N}, x_n\succsim y_n, x_n\to x, y_n\to y\Longrightarrow x\succsim y
$$

## Utility Functions

我们定义一个 $$u: X\to \mathbb{R}$$ 使得

$$
u(x)\ge u(y)\Longleftrightarrow x\succsim y
$$

我们说是 $$u$$ represents $$\succsim$$。

这个 $$u$$ 就是 $$\succsim$$ 的 utility functions。

一个定理是 $$\succsim$$ 是 rational and continuous 的当且仅当存在一个连续的 $$u$$。

- $$\succsim$$ is monotone $$\Longleftrightarrow$$ $$u$$ is monotone
- $$\succsim$$ is convex $$\Longleftrightarrow$$ $$u$$ is quasi-concave

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

### Lotteries

在有 uncertainty 的情况下，用户做的决策是 lotteries，而不是确定的 goods。

A lottery is a vector $$L = (x_1, p_1; x_2, p_2; \cdots; x_n, p_n)$$. $$x_i$$ 是 realization，$$p_i$$ 是 probability。

对于某个 realization，我们有其 utility $$u(x_i)$$，然后我们定义整个 lottery 的 utility 为 $$U(L) = \mathbb{E}[u(L)]$$ (Von-Neumann Morgenstern Utility Function)。

很多时候我们会对 lotteries 做线性叠加，比如一些钱买定期，一些钱买股票。所以其实我们就是在一个 convex set 上做决策。

这时候问题就简化为我们有 $$n$$ 个 realizations $$X = \{x_1, x_2, \cdots, x_n\}$$，将这 $$n$$ 个 realizations 做线性组合，我们将这个 simplex 定义为 $$\mathbb{L}(X)$$，也就是：

$$
\mathbb{L}(X) = \left\{(x_1, p_1; x_2, p_2; \cdots; x_n, p_n): p_i\ge 0, \sum_{i=1}^n p_i = 1\right\}
$$

我们同样可以在 $$\mathbb{L}(X)$$ 上定义 $$\succsim$$，而 $$\succsim$$ 需要满足如下公理：

- Completeness: $$\forall L_1, L_2\in\mathbb{L}(X), L_1\succsim L_2\lor L_2\succsim L_1$$
- Transitivity: $$L_1\succsim L_2, L_2\succsim L_3\Longrightarrow L_1\succsim L_3$$
- Continuity: $$L_1\succsim L_2\succsim L_3\Longrightarrow \exists\alpha\in[0, 1], L_2\sim \alpha L_1+(1-\alpha)L_3$$
- Independence: $$L_1\succsim L_2\Longrightarrow \forall \alpha\in[0, 1], \alpha L_1+(1-\alpha)L_3\succsim \alpha L_2+(1-\alpha)L_3$$

**Von Neumann–Morgenstern utility theorem**: 上面四条同时 hold，等价于存在一个 $$u$$，并且任何可行的 $$u'$$ 都可以通过一个 affine transformation 得到：$$u' = a+bu, b>0$$。

### St. Petersburg paradox

这个是用来展示为什么必须要用 $$\mathbb{E}[u(L)]$$ 而不是直接 $$\mathbb{E}[L]$$ 的例子。

假设有一个游戏，需要 1000 块钱。游戏是给你一个硬币你去抛，如果正面就给你一块钱继续抛，第二次正面两块钱，第三次四块钱，第 $$n$$ 次 $$2^{n-1}$$ 块钱，直到你抛到反面结束。

这个游戏是铁不会玩的，因为你回本概率挺低的。但是

$$
\mathbb{E}[L] = \sum_{n=1}^\infty\frac{1}{2^n}\times 2^{n-1} = \infty
$$

这也显示了人们对赌钱是 risk averse 的。

### Risk Aversion

对于一个通过 $$u$$ 来进行选择的 agent，我们判断他是否喜欢 take risks：

- Risk Averse: $$u(\mathbb{E}[L])\ge \mathbb{E}[u(L)]$$
- Risk Neutral: $$u(\mathbb{E}[L]) = \mathbb{E}[u(L)]$$
- Risk Loving: $$u(\mathbb{E}[L])\le \mathbb{E}[u(L)]$$

用 Jensen's inequality 很好判断: For a convex function $$f$$, we have $$f(\mathbb{E}[X])\le \mathbb{E}[f(X)]$$.

对于一个 Risk Averse 的 agent，会有一个 $$\mathrm{CE}$$ 来表示他愿意用这么多钱来换取一个稳定的状态：

$$
u(\mathbb{E}[L]-\mathrm{CE}) = \mathbb{E}[u(L)]
$$

我们考虑把一个 agent 的对 risk 的态度量化地表示，我们考虑 $$-u''(x)$$ 的正负是个很好的指标。但如果 $$v=a+bu$$，那么 $$-v''(x)\neq -u''(x)$$，所以我们考虑：

$$
R_A(x)=-\frac{u''(x)}{u'(x)}
$$

我们将其称作 Arrow-Pratt Absolute Risk Aversion Coefficient，越大越 risk averse。

但是有时候钱越多我们就会越极端，所以我们考虑定义 Relative Risk Aversion：

$$
R_R(x)=-x\cdot\frac{u''(x)}{u'(x)}
$$

### Allais Paradox

考虑四个 lotteries：

- Lottery A: $$\left(\$10^6, 11\%; \$0, 89\%\right)$$
- Lottery B: $$\left(\$5\times 10^6, 10\%; \$0, 90\%\right)$$
- Lottery C: $$\left(\$10^6, 100\%\right)$$
- Lottery D: $$\left(\$5\times 10^6, 10\%; \$10^6, 89\%, \$0, 1\%\right)$$

A 比 B，C 比 D。几乎大部分人会更喜欢 B 和 C。（虽然其实我上课的时候选了 B 和 D 呃呃呃）

我们令 $$u(x)$$ 表示获得 $$x\times 10^6$$ 块钱，于是我们有：

$$
\begin{cases}
u(1)\times 0.11 < u(5)\times 0.1\\
u(1)>u(5)\times 0.1+u(1)\times 0.89
\end{cases}
$$

而下面一个式子化简一下能得到：

$$
u(1)\times 0.11 > u(5)\times 0.1
$$

两个式子是矛盾的。

这让我们意识到其实在人真正考虑概率的时候，将“小概率发生”和“完全不发生”是分的很明确的。因为上面那个例子很多人时看到 D 项中有 $$1\%$$ 的概率拿不到钱而去选 C 项。解决方法是我们对概率需要加一个修正函数 $$\pi(p)$$，使得我们的 utility function 变为 $$u(x)\times\pi(p)$$。这个 $$\pi$$ 函数在 $$p=0$$ 的时候会有一个陡增。

{% include figure.liquid loading="eager" path="assets/img/2024-06-18-Berkeley-STAT155/allais_paradox_pi.png" class="img-fluid rounded z-depth-1" %}

### Ambiguity Aversion

另一个叫 Ellsberg Paradox 的悖论，我们考虑现在有两个盒子，每个盒子有 100 个红球或黑球。第一个盒子有 50 红 50 黑，第二个盒子啥也不知道。

有四个选项：

- A: 从第一个盒子里随机抽一个球，如果是红球，拿 100 块钱，否则拿 0 块钱
- B: 从第一个盒子里随机抽一个球，如果是黑球，拿 100 块钱，否则拿 0 块钱
- C: 从第二个盒子里随机抽一个球，如果是红球，拿 100 块钱，否则拿 0 块钱
- D: 从第二个盒子里随机抽一个球，如果是黑球，拿 100 块钱，否则拿 0 块钱

很显然 $$A\sim B, C\sim D$$。尽管 A 和 B 加起来和 C 和 D 加起来是一样的，但大部分人会认为 $$A\succ C, B\succ D$$。

这是因为人们不喜欢不确定性，也就是 ambiguity aversion。

## Payoff Functions

接下来正是讨论 Game Theory 了。

之前我们考虑的都是一个人的选择，现在是多人的决策问题，也就是说我们要考虑别人的操作。

有 $$N$$ 个 agents，每个 agent 有一个 action set

$$
\mathcal{S}_i = \{s_{1}^i, s_{2}^i, \cdots, s_{N_i}^i\}
$$

当然后面好像也有很多是写成 $$\mathcal{A}_i$$ 的，反正看得懂就行。

The set of possible strategy profiles is

$$
\mathcal{S} = \mathcal{S}_1\times \mathcal{S}_2\times\cdots\times \mathcal{S}_N
$$

对于一个游戏，第 $$i$$ 个人选了决策 $$s_i$$，我们有 $$s=(s_1, s_2, \cdots, s_N)\in\mathcal{S}$$。

这样子我们可以定义第 $$i$$ 个人的 utility function 为 $$u_i(s)$$，我们也叫做 payoff function。

两个人的时候我们通常写成表格的形式：

|          | Rock        | Paper       | Scissors    |
| -------- | ----------- | ----------- | ----------- |
| Rock     | $$(0, 0)$$  | $$(-1, 1)$$ | $$(1, -1)$$ |
| Paper    | $$(1, -1)$$ | $$(0, 0)$$  | $$(-1, 1)$$ |
| Scissors | $$(-1, 1)$$ | $$(1, -1)$$ | $$(0, 0)$$  |

## Zero-Sum Games

最先讨论的是零和博弈。也就是

$$
\forall s\in \mathcal{S}, \sum_{i=1}^N u_i(s) = 0
$$

你要获利的唯一方法是让别人变差。

对于双人的，我们可以在表中只写第一个人的 payoff：

|          | Rock   | Paper  | Scissors |
| -------- | ------ | ------ | -------- |
| Rock     | $$0$$  | $$-1$$ | $$1$$    |
| Paper    | $$1$$  | $$0$$  | $$-1$$   |
| Scissors | $$-1$$ | $$1$$  | $$0$$    |
