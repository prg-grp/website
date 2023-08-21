---
layout: page
permalink: /publications
title: Publications
description: Publications in reversed chronological order.
years: [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009]
nav: true
nav_rank: 4
---

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}} && prggrp!=noGroupPublication]* %}
{% endfor %}

</div>
