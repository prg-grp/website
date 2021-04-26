---
layout: page
permalink: /for-students
title: For Students
description: Offered courses, theses and student jobs at HSG and TU Darmstadt.
nav: true
nav_rank: 3
---

Teaching is one of our core contributions at the HSG and TU Darmstadt.
Besides sharing knowledge with new generations of computer scientists,
we value the insights and view of the continuously renewing student body on our disciplines.
Further, we enjoy close research collaboration with motivated students,
often performed as a thesis or in a HiWi position.
We invite you to join our [courses](#courses),
to write a [thesis](#theses) with us or to [join us as a HiWi or PhD student]({{ '/open-positions' | relative-path }}).

## Courses

{% assign courses = site.courses | where: 'past', false | reverse %}
<div class="table-responsive">
      <table class="table table-sm table-borderless">
{% for course in courses %}
    <tr>
        <td>{{ course.semester }}</td>
        <td>
            {% if course.external_page %}
            <a href="{{ course.external_page }}" target="_blank">
            {% elsif course.inline == false %}
            <a href="{{ course.url | relative_url }}">
            {% endif %}
            {{ course.title }}{% 
                if course.external_page %} <i class="fas fa-external-link-alt"></i>{% endif %}{% 
                if course.inline == false or course.external_page %}</a>{% endif %}
            <br />
            <i class="fas fa-thumbtack"></i> {{ course.university }}
        </td>
    </tr>
{% endfor %}</table></div>

## Past Courses

<a class="btn btn-primary" data-toggle="collapse" href="#pastCourses" role="button">
    Show
</a>

{% assign courses = site.courses | where: 'past', true | reverse %}
<div class="collapse table-responsive" id="pastCourses">
      <table class="table table-sm table-borderless">
{% for course in courses %}
    <tr>
        <td>{{ course.semester }}</td>
        <td>
            {% if course.external_page %}
            <a href="{{ course.external_page }}" target="_blank">
            {% elsif course.inline == false %}
            <a href="{{ course.url | relative_url }}">
            {% endif %}
            {{ course.title }}{% 
                if course.external_page %} <i class="fas fa-external-link-alt"></i>{% endif %}{% 
                if course.inline == false or course.external_page %}</a>{% endif %}
            <br />
            <i class="fas fa-thumbtack"></i> {{ course.university }}
        </td>
    </tr>
{% endfor %}</table></div>

## Theses

We offer Bachelor's and Master's theses
for computer science students at HSG and TU Darmstadt.
All topics are close to our ongoing research,
allowing you to work on hot topics
and to gain deeper insight into the field and our work.
As our work evolves, the topics change continuously.
If you want to know more about our currently available topics,
please get in touch with us:

{% assign theses = site.theses | sort: 'rank' %}
<ul>{% for thesis in theses %}
    <li>
        {% if thesis.external_page %}
        <a href="{{ thesis.external_page }}" target="_blank">
        {% elsif thesis.inline == false %}
        <a href="{{ thesis.url | relative_url }}">
        {% endif %}
        {{ thesis.title }}{% 
            if thesis.external_page %} <i class="fas fa-external-link-alt"></i>{% endif %}{% 
            if thesis.inline == false or thesis.external_page %}</a>{% endif %}:
        <a href="{{ '/members/' | append: thesis.contact.member | relative_url }}">{{ thesis.contact.name }}</a>
    </li>
{% endfor %}</ul>


Please enclose in your mail your research interests and experiences so far.
Knowing about your favorite courses, projects, and personal experience
helps us to find the right thesis topic for you.
