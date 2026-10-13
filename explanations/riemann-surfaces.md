---
layout: default
title: Riemann Surfaces
---
# Riemann Surfaces

## Story
Some functions, like the square root, give two answers at once. Riemann's idea (1851) was to build a surface on which such a function becomes single-valued: glue together copies of the plane so that walking around a point carries you smoothly from one answer to the other. The resulting shapes, closed up, look like spheres, doughnuts, or doughnuts with several holes. The number of holes, the **genus**, turns out to control almost everything.

## Undergraduate
A Riemann surface is a connected 1-dimensional complex manifold: locally it looks like an open set in $\mathbb{C}$, and the transition maps between charts are holomorphic. Compact examples: the Riemann sphere (genus 0), complex tori $\mathbb{C}/\Lambda$ (genus 1), and the surface of $y^2 = (x-a_1)\cdots(x-a_{2g+2})$, a hyperelliptic surface of genus $g$. Key facts: a compact surface of genus $g$ carries exactly $g$ independent holomorphic 1-forms, and the Riemann–Roch theorem $\ell(D) - \ell(K-D) = \deg D - g + 1$ counts meromorphic functions with prescribed poles.

## Technical
For a compact surface $X$ of genus $g$ with a canonical homology basis $a_i,b_i$ and normalized differentials $\omega_j$ ($\int_{a_i}\omega_j=\delta_{ij}$), the period matrix $\tau_{ij}=\int_{b_i}\omega_j$ is symmetric with positive-definite imaginary part, i.e. lies in the Siegel upper half space $\mathfrak{H}_g$. The Jacobian is $J(X)=\mathbb{C}^g/(\mathbb{Z}^g+\tau\mathbb{Z}^g)$, and the Abel–Jacobi map embeds $X$ in it. Weierstrass points, special divisors, automorphisms, and the moduli/Teichmüller spaces of such surfaces are themes of Farkas's early papers (1966–1971; see [Publications](../publications)) and of the Farkas–Kra textbook *Riemann Surfaces*.
