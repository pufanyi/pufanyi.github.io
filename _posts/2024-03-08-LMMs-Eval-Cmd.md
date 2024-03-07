---
layout: post
title: LMMs Eval Command Generator
date: 2024-03-08
categories: Tools
tags:
  - tools
description: a simple tool to generate commands for LMMs-Eval
giscus_comments: true
pretty_table: true
---

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

<div id="selectedModels"></div>

<div id="selectedTasks"></div>

<script src="{{ 'assets/js/2024-03-08-LMMs-Eval-Cmd/script.js' | relative_url }}"></script>
