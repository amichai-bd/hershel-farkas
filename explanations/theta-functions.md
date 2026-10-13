---
layout: topic
title: Theta Functions
---
# Theta Functions

## Non-technical
Imagine adding up infinitely many ripples, each one smaller and faster than the last, so precisely tuned that the total pattern repeats when you slide it one step to the right, and *almost* repeats (it just gets stretched by a simple factor) when you slide it in a second, slanted direction. That is a theta function.

Because it fits so perfectly onto a doughnut-shaped grid, it is the natural building block for every function that lives on a doughnut, and on pretzels with more holes too. Its special values, called **theta constants**, are like a fingerprint of the surface. Hershel Farkas wrote two books about them: with Harry Rauch (1974) and with Irwin Kra (2001).

## Somewhat technical
In one variable, with $q=e^{\pi i\tau}$ and $|q|<1$, Jacobi's theta function is
$$\theta_3(z,q)=\sum_{n=-\infty}^{\infty} q^{n^2}e^{2inz}=1+2\sum_{n\ge1}q^{n^2}\cos(2nz).$$
It satisfies $\theta_3(z+\pi)=\theta_3(z)$ and $\theta_3(z+\pi\tau)=q^{-1}e^{-2iz}\theta_3(z)$: periodic in one direction, *quasi*-periodic in the other.

**Worked example.** At $z=0$, $q=0.1$: $\theta_3=1+2(0.1+0.1^4+0.1^9+\cdots)\approx1.2002$. The terms die off like $q^{n^2}$, so three terms already give 8 digits.

Explore it: the colors show the complex value of $\theta_3(z,q)$ across a rectangle of the complex $z$-plane.

<div class="viz" data-viz="theta"></div>

**Jacobi's triple product** links theta functions to counting:
$$\sum_{n}q^{n^2}w^{n}=\prod_{m\ge1}(1-q^{2m})(1+q^{2m-1}w)(1+q^{2m-1}w^{-1}).$$

<figure><img src="{{ '/assets/img/jacobi-theta-3.png' | relative_url }}" alt="Color plot of the Jacobi theta function theta_3 over the unit disk in the nome q" loading="lazy" width="420"><figcaption>Jacobi θ₃ as a function of the nome q in the unit disk. Image: 唐戈, Wikimedia Commons, CC BY-SA 4.0.</figcaption></figure>

## Engineers
$\theta_3(x,q)=1+2\sum_n q^{n^2}\cos(2nx)$ is a Fourier series whose coefficients $q^{n^2}$ are Gaussian in $n$. So it is periodic, converges extremely fast, and is cheap to evaluate by truncation:

```
def theta3(x, q, N=30):            # real 0 < q < 1, real x
    return 1 + 2*sum(q**(n*n) * cos(2*n*x) for n in range(1, N))
```

Error after $N$ terms is about $2q^{N^2}$: for $q=0.5$ and $N=7$ that is below $10^{-14}$.

Shifting by $\pi\tau$ instead of $\pi$ multiplies by a simple exponential (quasi-periodicity). Ratios like $\theta_1(z)/\theta_4(z)$ cancel that factor and give functions that are exactly periodic on the lattice: **doubly periodic signals**, i.e. elliptic functions. The same Gaussian-coefficient trick in $g$ variables gives the Riemann theta function over $\mathbb{Z}^g$: a sum over a $g$-dimensional integer lattice, which is how libraries evaluate it numerically.

## Scientists
For $q=e^{-\pi t}$, $\theta_3(x,q)=\sum_n e^{-\pi t n^2}e^{2inx}$ is the periodized Gaussian: the heat kernel on a circle, with $t$ playing the role of time. Its two expressions (sum over modes vs. sum over images, related by Poisson summation) are the prototype of a modular transformation.

Multivariable Riemann theta functions give the **finite-gap (quasi-periodic multi-soliton) solutions of KdV**: Its–Matveev (1975, [doi:10.1007/BF01038218](https://doi.org/10.1007/BF01038218)) express $u(x,t)$ as $2\partial_x^2\log\theta$ of a hyperelliptic curve, up to a constant. As the curve degenerates (cycles pinch), these become ordinary solitons (see the [Applications](../applications) page). Theta constants also enter superstring loop amplitudes (D'Hoker–Phong, [arXiv:hep-th/0110247](https://arxiv.org/abs/hep-th/0110247)).

## Mathematicians
For $\tau\in\mathfrak{H}_g$ and characteristics $\epsilon,\epsilon'\in\mathbb{R}^g$,
$$\theta\begin{bmatrix}\epsilon\\ \epsilon'\end{bmatrix}(z,\tau)=\sum_{n\in\mathbb{Z}^g}\exp 2\pi i\Big[\tfrac12\big(n+\tfrac{\epsilon}{2}\big)^t\tau\big(n+\tfrac{\epsilon}{2}\big)+\big(n+\tfrac{\epsilon}{2}\big)^t\big(z+\tfrac{\epsilon'}{2}\big)\Big].$$
**Riemann's vanishing theorem**: $\theta(\cdot,\tau)$ on $J(X)$ vanishes exactly on $W_{g-1}+\kappa$ ($\kappa$ = Riemann constant), and the multiplicity at $e$ equals $\ell$ of the corresponding divisor.

Farkas's contributions in this area include:
- vanishing of theta constants and automorphisms (*Bull. AMS* 73 (1967), [doi:10.1090/s0002-9904-1967-11694-x](https://doi.org/10.1090/s0002-9904-1967-11694-x)); "Vanishing thetanulls and Jacobians" (Contemp. Math. 397, [doi:10.1090/conm/397/07460](https://doi.org/10.1090/conm/397/07460));
- Fay's trisecant formula (*J. Analyse* 44 (1984), [doi:10.1007/bf02790197](https://doi.org/10.1007/bf02790197));
- Thomae's formula for $Z_n$ curves (with Ebin, *J. Analyse* 111 (2010); book with Zemel, Springer DEVM 2010), expressing theta constants via branch points;
- theta constant identities (with Kopeliovich, *Israel J. Math.* 82 (1993), [doi:10.1007/bf02808110](https://doi.org/10.1007/bf02808110); with Kra, many papers 1997–2004).

References: Farkas–Rauch, *Theta Functions with Applications to Riemann Surfaces* (1974); Farkas–Kra, *Theta Constants, Riemann Surfaces and the Modular Group*, AMS GSM 37 ([doi:10.1090/gsm/037](https://doi.org/10.1090/gsm/037)).
