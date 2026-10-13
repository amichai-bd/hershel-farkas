---
layout: default
title: Glossary
---
# Glossary

On the topic pages, the first use of each term below is underlined; hover or focus it to see the definition.

<dl class="glossary">
{% assign gs = site.data.glossary | sort: "term" %}{% for g in gs %}<dt>{{ g.term }}</dt><dd>{{ g.def }}</dd>
{% endfor %}</dl>
