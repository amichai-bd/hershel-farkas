---
layout: default
title: Explanations
---
# Explanations for Five Audiences

Each topic is explained for five audiences: **Non-technical**, **Somewhat technical**, **Engineers**, **Scientists** and **Mathematicians**. Pick yours with the tabs; your choice is remembered across pages.

<div class="cards">
{% for t in site.data.topics %}<a class="card" href="{{ '/explanations/' | append: t.slug | relative_url }}"><span class="card-icon" aria-hidden="true">{{ t.icon }}</span><span class="card-num">{{ forloop.index }}</span><h3>{{ t.title }}</h3></a>
{% endfor %}</div>
