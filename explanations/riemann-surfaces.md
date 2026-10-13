---
layout: topic
title: Riemann Surfaces
---
# Riemann Surfaces

## Non-technical
Some questions have more than one right answer. "What number times itself gives 4?" Both 2 and −2. A function that gives two answers is awkward: which one do you mean? In 1851 Bernhard Riemann had a beautiful idea: instead of choosing, build a new *place* where both answers live side by side, like a two-storey car park where the ramps connect the floors. Walk once around the right spot and you quietly drive up to the other floor.

When you finish building such a place and close it up, you get a smooth surface: a ball, a doughnut, or a "pretzel" with several holes. The number of holes, called the **genus**, is the most important fact about it. A doughnut has genus 1; a pretzel with two holes has genus 2.

<figure><img src="{{ '/assets/img/riemann-surface-sqrt.png' | relative_url }}" alt="A three-dimensional plot of the Riemann surface of the square root: two sheets spiralling through each other around a central point" loading="lazy" width="480"><figcaption>The Riemann surface of the square root: two sheets joined around 0. Image: Leonid 2, Wikimedia Commons, CC BY-SA 3.0 (<a href="{{ '/credits' | relative_url }}">credits</a>).</figcaption></figure>

Hershel Farkas spent his career studying these surfaces, especially the ones with many holes, and co-wrote, with Irwin Kra, one of the standard textbooks on them, *Riemann Surfaces* (1980).

## Somewhat technical
A **Riemann surface** is a surface on which you can do complex calculus: near each point it looks like a piece of the complex plane $\mathbb{C}$, and the ways of switching between local pictures are smooth complex (holomorphic) maps.

Three examples, in order of complexity:

- **The Riemann sphere** $\mathbb{C}\cup\{\infty\}$: genus 0.
- **A torus** $\mathbb{C}/\Lambda$, where $\Lambda=\{m+n\tau\}$ is a lattice: take a parallelogram with sides $1$ and $\tau$ and glue opposite edges. Genus 1. Try it below.
- **Hyperelliptic surfaces** $y^2=(x-a_1)\cdots(x-a_{2g+2})$: genus $g$.

<div class="viz" data-viz="lattice"></div>

**Worked example.** For $y^2=x(x-1)(x-2)$ (four branch points counting $\infty$), the formula $g = (\#\text{branch points})/2 - 1$ for a two-sheeted cover gives $g = 4/2-1 = 1$: a torus.

A genus-$g$ surface has $g$ "a-loops" and $g$ "b-loops" that can't be shrunk away:

<div class="viz" data-viz="genus"></div>

## Engineers
Think of a multi-valued function like $\sqrt{z}$ as a lookup that returns two values; a Riemann surface is the data structure that makes it single-valued by storing a "sheet index" alongside $z$. As you loop around $z=0$, the sheet index flips; the branch cut is just where your code decides to flip it.

A genus-1 surface is the plane modulo a lattice, exactly like a 2D signal that is periodic in two directions (a tiled texture, or a grid with periodic boundary conditions). Reducing a point into the fundamental cell:

```
def to_torus(z, tau):            # tau = complex, Im(tau) > 0
    n = floor(z.imag / tau.imag) # how many tau-steps up
    z = z - n * tau
    return complex(z.real % 1, z.imag)
```

The genus $g$ is the key size parameter. A genus-$g$ surface has $g$ independent holomorphic 1-forms, so its "period data" is a $g\times g$ complex matrix (symmetric, so $g(g+1)/2$ numbers). A surface of genus $g\ge2$ itself has only $3g-3$ complex parameters (moduli). That gap is the subject of the [Schottky problem](schottky-problem).

<div class="viz" data-viz="torus3d"></div>

## Scientists
In physics language a compact Riemann surface is a closed 2D world-sheet with a conformal structure. In perturbative string theory the $g$-loop amplitude is an integral over the moduli space of genus-$g$ surfaces (D'Hoker–Phong, [arXiv:hep-th/0110247](https://arxiv.org/abs/hep-th/0110247)). In integrable systems, the *spectral curve* of a finite-gap KdV potential is a hyperelliptic Riemann surface, and the solution is written with its theta function (Its–Matveev 1975, [doi:10.1007/BF01038218](https://doi.org/10.1007/BF01038218)). The period matrix is the geometric data the physics depends on; the $a$/$b$ cycles play the role of independent "fluxes" or phases.

<figure><img src="{{ '/assets/img/triple-torus.png' | relative_url }}" alt="A smooth closed surface with three holes, a genus-3 surface" loading="lazy" width="420"><figcaption>A genus-3 surface. Image: Oleg Alexandrov, Wikimedia Commons, public domain.</figcaption></figure>

## Mathematicians
Let $X$ be a compact Riemann surface of genus $g$ with canonical homology basis $a_1,\dots,a_g,b_1,\dots,b_g$ ($a_i\cdot b_j=\delta_{ij}$) and normalized holomorphic differentials $\omega_j$, $\int_{a_i}\omega_j=\delta_{ij}$. Riemann's bilinear relations show the **period matrix** $\tau_{ij}=\int_{b_i}\omega_j$ is symmetric with $\operatorname{Im}\tau>0$, i.e. $\tau\in\mathfrak{H}_g$ (Siegel upper half space). The **Jacobian** is $J(X)=\mathbb{C}^g/(\mathbb{Z}^g+\tau\mathbb{Z}^g)$ and the Abel–Jacobi map $P\mapsto\left(\int_{P_0}^P\omega_j\right)_j$ embeds $X$ for $g\ge1$.

**Riemann–Roch.** For a divisor $D$ and canonical divisor $K$: $\ell(D)-\ell(K-D)=\deg D-g+1$.

**Weierstrass points.** A point $P$ is a Weierstrass point if $\ell(gP)\ge2$; for $g\ge2$ there are between $2g+2$ and $g^3-g$ of them, and $2g+2$ exactly when $X$ is hyperelliptic. These, special divisors, and analytic subloci of Teichmüller space are the subjects of Farkas's first papers (*Amer. J. Math.* 88 (1966), [doi:10.2307/2373086](https://doi.org/10.2307/2373086); *Proc. AMS* 1968, 1969). Standard reference: Farkas–Kra, *Riemann Surfaces*, GTM 71 ([doi:10.1007/978-1-4612-2034-3](https://doi.org/10.1007/978-1-4612-2034-3), 2nd ed.).
