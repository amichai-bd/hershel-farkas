---
layout: default
title: Explanations
---
# Explanations in Three Layers

Each topic has: **Story** (for anyone), **Undergraduate**, and **Technical**. Switch between them with the tabs on each page.

<div class="cards">
{% for t in site.data.topics %}<a class="card" href="{{ '/explanations/' | append: t.slug | relative_url }}"><span class="card-icon" aria-hidden="true">{{ t.icon }}</span><span class="card-num">{{ forloop.index }}</span><h3>{{ t.title }}</h3></a>
{% endfor %}</div>
