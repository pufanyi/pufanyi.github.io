---
layout: post
title: LMMs Eval Command Generator
date: 2024-03-07
categories: Tools
tags:
  - tools
description: a simple tool to generate commands for LMMs-Eval
giscus_comments: true
related_posts: false
pretty_table: true
---

{% include scripts/jquery.liquid %}

## Select Models

<table
  id="models"
  class="table align-middle mb-0 bg-white"
  data-toggle="table"
  data-height="460"
  data-pagination="true"
  data-click-to-select="true"
  data-url="{{ 'assets/json/2024-03-08-LMMs-Eval-Cmd/models.json' | relative_url }}">
  <thead>
    <tr>
      <th data-field="state" data-checkbox="true"></th>
      <th data-field="Name">Name</th>
      <th data-field="ID">ID</th>
    </tr>
  </thead>
</table>

## Select Tasks

<table
  id="tasks"
  data-toggle="table"
  data-pagination="true"
  class="table align-middle mb-0 bg-white"
  data-height="460"
  data-click-to-select="true"
  data-url="{{ 'assets/json/2024-03-08-LMMs-Eval-Cmd/tasks.json' | relative_url }}">
  <thead>
    <tr>
      <th data-field="state" data-checkbox="true"></th>
      <th data-field="Name">Name</th>
      <th data-field="ID">ID</th>
    </tr>
  </thead>
</table>

## Get Command

<figure class="highlight"><div class="code-display-wrapper"><pre><code class="language-bash" data-lang="bash">accelerate launch <span class="nt">-m</span> lmms_eval <span class="nt">--model</span><span class="o">=</span><span id="selectedModels"></span> <span class="nt">--model_args</span><span class="o">=</span><span class="nv">pretrained</span><span class="o">=</span>liuhaotian/llava-v1.5-7b <span class="nt">--tasks</span><span class="o">=</span><span id="selectedTasks"></span> <span class="nt">--batch_size</span><span class="o">=</span>1 <span class="nt">--log_samples</span> <span class="nt">--output_path</span><span class="o">=</span>./logs/</code></pre><button class="copy" type="button" aria-label="Copy code to clipboard"><i class="fa-solid fa-clipboard"></i></button></div></figure>

<script src="{{ 'assets/js/2024-03-08-LMMs-Eval-Cmd/script.js' | relative_url }}"></script>
