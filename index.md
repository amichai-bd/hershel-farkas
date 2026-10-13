---
layout: default
title: Home
pageclass: home
---
<section class="hero">
<div class="hero-text" markdown="1">
<p class="eyebrow">Mathematician · Hebrew University of Jerusalem</p>
# Hershel Mark Farkas

Hershel Mark Farkas is a mathematician and Professor of Mathematics at the Hebrew University of Jerusalem. He was born on December 2, 1939, in New York City, and earned his PhD at Yeshiva University in 1965 under Harry E. Rauch ([Mathematics Genealogy Project](https://www.genealogy.math.ndsu.nodak.edu/id.php?id=61354)).

<p class="hero-cta"><a class="btn" href="explanations/">Explore the mathematics</a> <a class="btn ghost" href="timeline">His life &amp; career</a></p>
</div>
<figure class="hero-art"><canvas id="torus" width="420" height="420" role="img" aria-label="An animated, slowly rotating wireframe torus: a genus-one Riemann surface, shaped like a doughnut"></canvas><figcaption>A torus: the genus-1 Riemann surface. <button class="link-btn" id="torus-pause" aria-pressed="false">Pause</button></figcaption></figure>
</section>

<div markdown="1" class="prose">
In his own words ([home page](https://math.huji.ac.il/~farkas/)), his research "revolve[s] around function theory on compact Riemann surfaces, Jacobi varieties and the theory of theta functions," with a focus on the **Schottky problem**, contributions to **Schottky–Jung theory**, and later **modular forms** and their applications to geometry and number theory, including "interesting theta constant identities, and connections with classical combinatorial number theory."

He is perhaps best known for the textbook *Riemann Surfaces* (with Irwin Kra, Springer Graduate Texts in Mathematics, 1980), which generations of students have learned from.

This site is written by his grandson, Amichai, to understand that work in layers: a story for anyone, an undergraduate version, and a technical version.

<span class="todo">TODO (family): a personal introduction, photos, and memories.</span>
</div>

## Explore the ideas

<div class="iam"><label for="iam"><strong>I am a…</strong></label> <select id="iam"><option value="0">Non-technical reader</option><option value="1">Somewhat technical, curious reader</option><option value="2">Engineer</option><option value="3">Scientist</option><option value="4">Mathematician</option></select> <span id="iam-msg" aria-live="polite"></span></div>

<div class="cards">
{% for t in site.data.topics %}<a class="card" href="{{ '/explanations/' | append: t.slug | relative_url }}"><span class="card-icon" aria-hidden="true">{{ t.icon }}</span><span class="card-num">{{ forloop.index }}</span><h3>{{ t.title }}</h3><p>Five audience levels</p></a>
{% endfor %}</div>
