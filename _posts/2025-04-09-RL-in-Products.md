---
layout: post
title: RL as a Co-Design of Product and Research
categories: Notes
date: 2025-04-09
description: Notes for CS25 Transformers United V5, Lecture 2
tags:
  - Reinforcement Learning
  - Product Design
# pseudocode: true
giscus_comments: true
related_posts: false
pretty_table: true
toc:
  sidebar: left
---

主讲人：[Karina Nguyen](https://karinanguyen.com/)

## Product

Canvas：从普通的 next-token prediction 到 complex tasks 的转变。让用户和模型交流的方式更加多样（Training the model to become a collaborator）

1. 能 preview 代码。不仅是代码可以直接运行，前端代码可以直接看效果
2. 可以方便地对某个词语，某个句子选中进行 QA

Two ways of building research-driven products:
1. Familiar form factor for unfamiliar capability：直接套壳
  1. 100K Context + File uploads: 这个其实现在比较稀松平常了？就是说把 context 加长来支持长 PDF claude acts as business analyst - YouTube
  2. $$\mathbb{P}(\text{I Know})$$ / Calibration：其实这部分她语速太快稍稍有点没太听懂。好像说的是，比如一个 unreliable 的长文章，我通过模型去把有用的（或者说是保真的）信息快速提取出来。越保真就越高亮，来支持快速阅读
  {% include figure.liquid loading="eager" path="assets/img/2025-04-09-RL-in-Products/pik.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  3. Streaming model's thoughts：这个也很平常了，就是用输出些中间过程来防止用户等的太急
2. Start with product belief & vision -> make the model do that：根据需求 finetune 模型 - **I just think product designers and model trainers need to collaborate more with each other**
  1. Redesign 新闻 page（没咋听懂）：Most effective way to get people to readmore of storylines coverage is by adding alayer of context to our product andcoverage-across major surfaces - that connects people to the stories and information they need.
  2. more human command line
  {% include figure.liquid loading="eager" path="assets/img/2025-04-09-RL-in-Products/cmdline.png" class="img-fluid rounded z-depth-1" zoomable=true %}

## Research

