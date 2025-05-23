---
layout: distill
title: Classical Mechanics
categories: Notes
date: 2024-06-03
description: 学点好玩的
tags:
  - Classical Mechanics
  - Physics
giscus_comments: true
related_posts: false

authors:
  - name: Pu Fanyi
    url: "https://pufanyi.github.io"
    affiliations:
      name: NTU, Singapore
      url: "https://www.ntu.edu.sg/"

toc:
  - name: State diagrams and the nature of physical laws
  - name: Newton's law, phase space, momentum and energy
#   - name: From Normal Distribution
#   - name: Limit Theorems
#   - name: Parameter Estimation
---

偶然间刷到 Leonard Susskind 在 Stanford 的讲课视频，学着玩一玩。

[视频链接](https://theoreticalminimum.com/courses/classical-mechanics/2011/fall)

---

# State diagrams and the nature of physical laws

用状态来描述世界，这玩意儿在机器学习中也这么搞。

但是在经典物理中我们认为如果我们知道这个世界处于某个状态，我们可以

1. 追溯过去，在状态图中就是每个状态入度为 $$1$$；
2. 预测未来，在状态图中就是每个状态出度为 $$1$$。

那么在有穷图中这个图肯定是由多个环构成，当然其实 prof 在讲的时候说无穷图里我们也可以认为 $$(\cdots\to -2\to 0\to 2\to 4\to\cdots)$$ 是一个环。

上课过程中有一个同学问了个问题，就是说按这样的话 classical statistical mechanics 怎么搞。这个是因为在状态中我们认为世界是已知的，但是在经典统计力学中一部分东西是未知的才能导致有概率的引入。我们认为世界是确定的。

一个记号是 $$\dot{f}$$ 表示 $$f$$ 对事件的导数，也就是说 $$\dot{f} = \frac{\mathrm{d}f}{\mathrm{d}t}$$。

$$
\begin{cases}
\vec{v}=\dot{\vec{x}}\\
\vec{a}=\dot{\vec{v}}=\ddot{\vec{x}}
\end{cases}
$$

然后他举的例子是圆周运动：

$$
\begin{cases}
\vec{x} = \begin{bmatrix}r\cos\omega\theta\\ r\sin\omega\theta\end{bmatrix}\\
\vec{v} = \dot{\vec{x}} = \begin{bmatrix}-\omega r\sin\omega\theta\\ \omega r\cos\omega\theta\end{bmatrix}\\
\vec{a} = \ddot{\vec{x}} = \begin{bmatrix}-\omega^2r\cos\omega\theta\\-\omega^2r\sin\omega\theta\end{bmatrix}\\
\end{cases}
$$

---

# Newton's law, phase space, momentum and energy

一个粒子的状态可以被描述为 $$(\vec{x}, \vec{p})$$，即位置与动量。我们称整个空间为 phase space。

根据牛顿第二定律：

$$
\vec{F}=\dot{\vec{p}}
$$

我们与 $$\vec{p}=m\dot{\vec{x}}$$ 联立，我们就能解出 $$(\vec{x}, \vec{p})$$ 和 $$t$$ 的关系。因此我们说牛顿力学是可逆的。
