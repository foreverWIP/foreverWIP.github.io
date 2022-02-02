---
layout: amywright
title: Projects
---

# Projects

This is a series of write-ups on major work I've done over the last few years. Everything is presented in chronological order.

{% for project in site.data.amywright.projects %}
<h2 id="project-{{ project.path }}">{{ project.name }}</h2>

{% include amywright/projects/{{ project.path }}.md %}
{% endfor %}