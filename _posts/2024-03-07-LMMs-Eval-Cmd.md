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

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script>
  $(document).ready(function () {
  var selectedIds = [];

  $("#tasks").on("check.bs.table uncheck.bs.table", function (e, row) {
    var id = row.ID;
    if (e.type === "check") {
      if (!selectedIds.includes(id)) {
        selectedIds.push(id);
      }
    } else {
      selectedIds = selectedIds.filter(function (value) {
        return value !== id;
      });
    }
    document.getElementById("selectedTasks").textContent = selectedIds.join(",");
  });

  // Handle check-all and uncheck-all separately
  $("#tasks").on("check-all.bs.table", function (e) {
    // Assuming getSelections is a method to get all selected rows. This might vary based on the actual table library you're using.
    var allRows = $("#tasks").bootstrapTable("getSelections");
    selectedIds = allRows.map(function (row) {
      return row.ID;
    });
    document.getElementById("selectedTasks").textContent = selectedIds.join(",");
  });

  $("#tasks").on("uncheck-all.bs.table", function (e) {
    selectedIds = [];
    document.getElementById("selectedTasks").textContent = "";
  });
});

$(document).ready(function () {
  var selectedIds = [];

  $("#models").on("check.bs.table uncheck.bs.table", function (e, row) {
    var id = row.ID;
    if (e.type === "check") {
      if (!selectedIds.includes(id)) {
        selectedIds.push(id);
      }
    } else {
      selectedIds = selectedIds.filter(function (value) {
        return value !== id;
      });
    }
    document.getElementById("selectedModels").textContent = selectedIds.join(",");
  });

  // Handle check-all and uncheck-all separately
  $("#models").on("check-all.bs.table", function (e) {
    // Assuming getSelections is a method to get all selected rows. This might vary based on the actual table library you're using.
    var allRows = $("#models").bootstrapTable("getSelections");
    selectedIds = allRows.map(function (row) {
      return row.ID;
    });
    document.getElementById("selectedModels").textContent = selectedIds.join(",");
  });

  $("#models").on("uncheck-all.bs.table", function (e) {
    selectedIds = [];
    document.getElementById("selectedModels").textContent = "";
  });
});
</script>
