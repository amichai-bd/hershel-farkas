---
layout: topic
title: Riemann Surfaces
---
# Riemann Surfaces

## Non-technical
Some functions, like the square root, give two answers at once. Riemann's idea (1851) was to build a surface on which such a function becomes single-valued: glue together copies of the plane so that walking around a point carries you smoothly from one answer to the other. The resulting shapes, closed up, look like spheres, doughnuts, or doughnuts with several holes. The number of holes, the **genus**, turns out to control almost everything.

## Somewhat technical

<figure class="viz"><svg id="lattice" viewBox="0 0 640 300" role="img" aria-label="A lattice of points in the complex plane with one shaded period parallelogram spanned by 1 and tau; drag the tau point to reshape it"></svg><figcaption>The torus $\mathbb{C}/\Lambda$: glue opposite sides of the shaded period parallelogram spanned by $1$ and $\tau$. Drag $\tau$ (or focus it and use the arrow keys).</figcaption></figure>

A Riemann surface is a connected 1-dimensional complex manifold: locally it looks like an open set in $\mathbb{C}$, and the transition maps between charts are holomorphic. Compact examples: the Riemann sphere (genus 0), complex tori $\mathbb{C}/\Lambda$ (genus 1), and the surface of $y^2 = (x-a_1)\cdots(x-a_{2g+2})$, a hyperelliptic surface of genus $g$. Key facts: a compact surface of genus $g$ carries exactly $g$ independent holomorphic 1-forms, and the Riemann–Roch theorem $\ell(D) - \ell(K-D) = \deg D - g + 1$ counts meromorphic functions with prescribed poles.

## Engineers
Think of a multi-valued function like $\sqrt{z}$ as a lookup that returns two values; a Riemann surface is the data structure that makes it single-valued by storing a "sheet index" alongside $z$. Concretely, a genus-1 surface is the plane modulo a lattice: map $z \mapsto (z \bmod 1, \text{shift by } \tau)$, exactly like wrapping a 2D signal that is periodic in two directions (think of a texture tiled across a screen, or a 2D DFT grid with periodic boundary conditions). Pseudocode intuition:

```
def to_torus(z, tau):          # reduce z into the fundamental parallelogram
    n = floor(z.imag / tau.imag)
    z = z - n * tau
    return complex(z.real % 1, z.imag)
```

The genus $g$ (number of handles) is the key size parameter: a genus-$g$ surface has $g$ independent holomorphic 1-forms, so its "period data" is a $g \times g$ matrix.

## Scientists
In physics language a compact Riemann surface is a closed 2D world-sheet with a complex (conformal) structure. In string theory, perturbative amplitudes at $g$ loops are integrals over the moduli space of genus-$g$ surfaces (D'Hoker–Phong, [arXiv:hep-th/0110247](https://arxiv.org/abs/hep-th/0110247)). In integrable systems, the "spectral curve" of a finite-gap KdV potential is a hyperelliptic Riemann surface, and the solution is written with its theta function (Its–Matveev 1975, [doi:10.1007/BF01038218](https://doi.org/10.1007/BF01038218)). The period matrix plays the role of the coupling/geometry data the physics depends on.

## Mathematicians
For a compact surface $X$ of genus $g$ with a canonical homology basis $a_i,b_i$ and normalized differentials $\omega_j$ ($\int_{a_i}\omega_j=\delta_{ij}$), the period matrix $\tau_{ij}=\int_{b_i}\omega_j$ is symmetric with positive-definite imaginary part, i.e. lies in the Siegel upper half space $\mathfrak{H}_g$. The Jacobian is $J(X)=\mathbb{C}^g/(\mathbb{Z}^g+\tau\mathbb{Z}^g)$, and the Abel–Jacobi map embeds $X$ in it. Weierstrass points, special divisors, automorphisms, and the moduli/Teichmüller spaces of such surfaces are themes of Farkas's early papers (1966–1971; see [Publications](../publications)) and of the Farkas–Kra textbook *Riemann Surfaces*.
