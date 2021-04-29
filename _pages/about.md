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
    email: guido.salvaneschi@unisg.ch
    address: >
        School of Computer Science 33-507<br />
        Rosenbergstrasse 51<br />
        9000 St. Gallen, Switzerland<br />

news: true # includes a list of news items
projects: true # includes a tile list of projects
supports: true # includes a tile list of supports
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false  # includes social icons at the bottom of the page
---

> <i class="fas fa-quote-left"></i>
> “Where should I go?” - Alice. “That depends on where you want to end up.” - The Cheshire Cat.
> <i class="fas fa-quote-right"></i><br />
> — Lewis Carroll

Welcome to the Programming Group!
We are located at the [University of St. Gallen (HSG)](https://www.unisg.ch/)
and have a branch at the [Technical University of Darmstadt](https://www.tu-darmstadt.de/). 
Together we enjoy working on **Programming Languages**
and **Software Engineering**, including languages and architectures for
**Distributed Systems**, **Reactive Programming**, and **Secure Software Systems**.

[Talk to us](mailto:guido.salvaneschi@unisg.ch) or
[join our group]({{ '/open-positions' | relative-path }})
when you are interested in these topics or our work.
Students at HSG or TU Darmstadt,
please find [our courses, theses, and HiWi offerings]({{ '/teaching' | relative-path }}).

<span class="clearfix"></span>

{% assign members = site.members | sort: "lastname" %}
<div class="d-flex flex-wrap align-content-stretch justify-content-center m-n2 pt-5 no-gutters">
    {% for member in members %}
        {% if member.group == 'Doctoral Researchers' or member.group == 'Postdoctoral Researchers' %}
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
        {% endif %}
    {% endfor %}
</div>
