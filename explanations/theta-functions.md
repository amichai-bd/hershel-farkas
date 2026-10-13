---
layout: topic
title: Theta Functions
---
# Theta Functions

## Non-technical
A theta function is an infinite sum of waves arranged so precisely that it repeats itself (up to a simple factor) when you shift it along a grid. That near-perfect repetition makes it the natural building block for functions living on doughnut-shaped surfaces, and its values at special points ("theta constants") encode the shape of the surface itself.

## Somewhat technical

<figure class="viz"><canvas id="theta-plot" width="640" height="260" role="img" aria-label="Plot of the real part of theta(x, tau) for real x over three periods; drag the slider to change the imaginary part of tau"></canvas><figcaption><label for="theta-t">Im τ = <output id="theta-t-out">0.5</output></label> <input id="theta-t" type="range" min="0.15" max="1.5" step="0.05" value="0.5"> The plot is $\theta(x,\tau)$ for real $x$ and $\tau = i t$: notice it repeats with period 1.</figcaption></figure>

In one variable, with $\operatorname{Im}\tau>0$,
$$\theta(z,\tau)=\sum_{n\in\mathbb{Z}} e^{\pi i n^2\tau+2\pi i n z}.$$
It satisfies $\theta(z+1)=\theta(z)$ and $\theta(z+\tau)=e^{-\pi i\tau-2\pi i z}\theta(z)$. Ratios of such functions give doubly periodic (elliptic) functions. Jacobi's triple product $\prod_{n\ge1}(1-q^{2n})(1+q^{2n-1}w)(1+q^{2n-1}w^{-1})=\sum_n q^{n^2}w^n$ links theta functions to combinatorics.

## Engineers
$\theta(z,\tau)=\sum_n e^{\pi i n^2\tau}e^{2\pi i n z}$ is a Fourier series in $z$ whose coefficients $e^{\pi i n^2 \tau}$ are Gaussian in $n$ (for $\tau = it$, they equal $e^{-\pi t n^2}$). So it is periodic with period 1, converges extremely fast, and is cheap to evaluate by truncation, as the interactive plot in the "Somewhat technical" tab does:

```
def theta(x, t, N=30):          # tau = i*t, x real
    return sum(exp(-pi*t*n*n) * cos(2*pi*n*x) for n in range(-N, N+1))
```

Shifting by $\tau$ instead of $1$ is not exact periodicity but multiplies by a simple exponential factor (quasi-periodicity). Ratios cancel that factor and give functions that are exactly periodic on the lattice $\mathbb{Z}+\tau\mathbb{Z}$: doubly periodic signals.

## Scientists
For $\tau = it$, $\theta(x,it)=\sum_n e^{-\pi t n^2}e^{2\pi i n x}$ is the heat kernel on a circle (periodized Gaussian), with $t$ playing the role of time. Multivariable Riemann theta functions give the finite-gap ("quasi-periodic multi-soliton") solutions of KdV: Its–Matveev (1975, [doi:10.1007/BF01038218](https://doi.org/10.1007/BF01038218)) express $u(x,t)$ via $\partial_x^2 \log\theta$ of a hyperelliptic curve. Theta constants also appear in superstring loop amplitudes (D'Hoker–Phong, [arXiv:hep-th/0110247](https://arxiv.org/abs/hep-th/0110247)).

## Mathematicians
For $\tau\in\mathfrak{H}_g$ and characteristics $\epsilon,\epsilon'\in\mathbb{R}^g$,
$$\theta\begin{bmatrix}\epsilon\\ \epsilon'\end{bmatrix}(z,\tau)=\sum_{n\in\mathbb{Z}^g}\exp 2\pi i\Big[\tfrac12\big(n+\tfrac{\epsilon}{2}\big)^t\tau\big(n+\tfrac{\epsilon}{2}\big)+\big(n+\tfrac{\epsilon}{2}\big)^t\big(z+\tfrac{\epsilon'}{2}\big)\Big].$$
Riemann's vanishing theorem identifies the zero divisor of $\theta(\cdot,\tau)$ on $J(X)$ with a translate of $W_{g-1}$. Farkas's work studies vanishing of theta constants, Fay's trisecant formula, Thomae's formula (expressing theta constants of $Z_n$ curves via branch points), and theta-constant identities; see the books with Rauch (1974) and Kra (2001).
