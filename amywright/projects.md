---
layout: amywright
title: Projects
---

# Projects

Below is a list of projects I've created or contributed to, presented in chronological order. Click a project's link to view a small writeup about it.

{% for project in site.data.amywright.projects %}
<a href="/amywright/projects/{{ project.path }}.html">{{ project.name }}</a>
{% endfor %}

And of course, I've also created [The website you're looking at right now](https://foreverwip.github.io/).