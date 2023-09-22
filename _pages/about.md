---
layout: about
title: Home
permalink: /
nav: true
nav_rank: 1
sitetitle: true
description: Welcome to the Programming Group at the University of St. Gallen and at the Technical University of Darmstadt. Team. Projects. Support.

profile:
    name: Prof. Dr. Guido Salvaneschi
    position: Head of the Programming Group
    align: right
    image: salvaneschi-profile.jpg
    href: '/members/salvaneschi'
    email: guido.salvaneschi@unisg.ch
    address: >
        School of Computer Science<br />
        Office 64-114<br />
        Torstrasse 25<br />
        9000 St. Gallen, Switzerland

news: false # includes a list of news items
projects: false # includes a tile list of projects
supports: false # includes a tile list of supports
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false  # includes social icons at the bottom of the page
---

> <i class="fas fa-quote-left"></i>
> “Where should I go?” - Alice. “That depends on where you want to end up.” - The Cheshire Cat.
> <i class="fas fa-quote-right"></i><br />
> — Lewis Carroll

Welcome to the Programming Group!
We are part of the [Institute of Computer Science (ICS)](https://ics.unisg.ch/){: target="_blank"} at the [University of St. Gallen (HSG)](https://www.unisg.ch/){: target="_blank"}
and have a branch at the [Technical University of Darmstadt](https://www.tu-darmstadt.de/){: target="_blank"}.
Together we enjoy working on **Programming Languages**
and **Software Engineering**, including languages and architectures for
**Distributed Systems**, **Reactive Programming**, **DevOps Organizations**, and **Secure Software Systems**.

[Talk to us](mailto:guido.salvaneschi@unisg.ch) or
join our group when you are interested in these topics or our work.
Students at HSG or TU Darmstadt,
please find our courses, theses, and jobs.
{: class="clearfix"}

{% assign members = site.members | where: "team_frontpage", true | sort: "lastname" %}
<div class="d-flex flex-wrap align-content-stretch justify-content-center m-n2 pt-5 no-gutters">
    {% for member in members %}
        {% assign colsMod6 = forloop.length | modulo: 6 %}
        {% assign colIdMod4 = forloop.index | modulo: 4 %}
        {% if colsMod6 == 1 and colIdMod4 == 1 %}<div class="col-md-2 w-100"></div>{% endif %}
        <div class="col-6 col-sm-3 col-md-2 mb-3">
            <a href="{{ member.url | relative_url }}" class="no-decoration">
                <div class="card hoverable h-100 m-2">
                    <img src="{{ '/assets/img/' | append: member.profile.image | relative_url }}" class="card-img-top" alt="{{ member.profile.name }}" />
                    <div class="card-body p-2">
                        <div class="card-title m-0">{{ member.title }}</div>
                    </div>
                </div>
            </a>
        </div>
    {% endfor %}
</div>
