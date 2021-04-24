---
layout: page
permalink: /publications
title: Publications
description: Publications in reversed chronological order.
years: [2022, 2021, 1950, 1935, 1905]
nav: true
nav_rank: 4
---

<div class="publications">

{% comment %}
{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers %}
{% endfor %}
{% endcomment %}

</div>
