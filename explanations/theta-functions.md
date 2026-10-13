---
layout: topic
title: Theta Functions
---
# Theta Functions

<div class="common" markdown="1">
## History in brief

- **1829 – Jacobi.** In *Fundamenta Nova Theoriae Functionum Ellipticarum*, Jacobi introduced the four theta functions $\vartheta_1,\dots,\vartheta_4$, expressed elliptic functions as their quotients, and proved the triple product identity and the four-squares theorem.
- **1857 – Riemann.** In "Theorie der Abel'schen Functionen" ([doi:10.1515/crll.1857.54.115](https://doi.org/10.1515/crll.1857.54.115)) Riemann defined the theta function in $g$ variables attached to a period matrix and used it to solve the Jacobi inversion problem; his *vanishing theorem* describes its zeros.
- **1870 – Thomae.** Johannes Thomae expressed theta constants of hyperelliptic curves through their branch points (*J. reine angew. Math.* 71, [doi:10.1515/crll.1870.71.201](https://doi.org/10.1515/crll.1870.71.201)).
- **1973 – Fay.** John Fay's *Theta Functions on Riemann Surfaces* (LNM 352, [doi:10.1007/BFb0060090](https://doi.org/10.1007/BFb0060090)) gave the trisecant identity, later central to the Schottky problem.
- **1974 – Rauch and Farkas.** *Theta Functions with Applications to Riemann Surfaces* (Williams & Wilkins), the book written by Farkas with his advisor.
- **1983 – Mumford.** *Tata Lectures on Theta I* ([doi:10.1007/978-1-4899-2843-6](https://doi.org/10.1007/978-1-4899-2843-6)), the standard modern reference.
</div>

<div class="common farkas" markdown="1">
## Where Farkas comes in

- **Two kinds of theta constants and period relations** (with Rauch): *PNAS* 59 (1968) [doi:10.1073/pnas.59.1.52](https://doi.org/10.1073/pnas.59.1.52); *PNAS* 62 (1969) [doi:10.1073/pnas.62.3.679](https://doi.org/10.1073/pnas.62.3.679); genus 2: *J. Analyse* (1970) [doi:10.1007/bf02795510](https://doi.org/10.1007/bf02795510).
- **Vanishing theta constants**: automorphisms force theta constants to vanish (*Bull. AMS* 73 (1967), [doi:10.1090/s0002-9904-1967-11694-x](https://doi.org/10.1090/s0002-9904-1967-11694-x)); "Vanishing theta constants" (Ann. Math. Studies 97, [doi:10.1515/9781400881550-010](https://doi.org/10.1515/9781400881550-010)); "Vanishing thetanulls and Jacobians" (Contemp. Math. 397, [doi:10.1090/conm/397/07460](https://doi.org/10.1090/conm/397/07460)).
- **Fay's trisecant formula**: "On Fay's tri-secant formula" (*J. Analyse* 44 (1984), [doi:10.1007/bf02790197](https://doi.org/10.1007/bf02790197)); "The trisecant formula and hyperelliptic surfaces" (Contemp. Math. 136, [doi:10.1090/conm/136/1188197](https://doi.org/10.1090/conm/136/1188197)).
- **Thomae's formula**: "An elementary proof of Thomae's formulae" (with Eisenmann, [doi:10.61091/ojac-302](https://doi.org/10.61091/ojac-302)); "Thomae's formula for $Z_n$ curves" (with Ebin, *J. Analyse* 111, 2010); the book *Generalizations of Thomae's Formula for $Z_n$ Curves* (with Zemel, Springer 2010).
- **Theta constant identities** (with Kopeliovich, *Israel J. Math.* 82 (1993), [doi:10.1007/bf02808110](https://doi.org/10.1007/bf02808110); *Proc. AMS* 123 (1995), [doi:10.1090/s0002-9939-1995-1254837-8](https://doi.org/10.1090/s0002-9939-1995-1254837-8)), and the survey "Theta functions in complex analysis and number theory" (2008, [doi:10.1007/978-0-387-78510-3_4](https://doi.org/10.1007/978-0-387-78510-3_4)).
</div>

## Non-technical

### Ripples that fit a grid
Picture adding infinitely many ripples, each smaller and faster than the last, tuned so the total pattern **repeats exactly** when you slide it one step to the right, and **almost repeats** (it is just stretched by a simple factor) when you slide it along a second, slanted direction. That is a theta function.

### Why anyone cares
Because the pattern fits perfectly on a doughnut-shaped grid, every function that lives on a doughnut can be built as a ratio of theta functions, a bit like building every melody from a few notes. For pretzels with more holes there are theta functions in more variables.

<div class="key" markdown="1">
Theta functions are the building blocks of functions on surfaces, and their special values, the theta constants, are a fingerprint of the surface's shape.
</div>

### Fingerprints and counting
The values at the centre of the pattern (the *theta constants*) turn out to carry two kinds of information: the shape of the surface, and, surprisingly, answers to counting questions such as "in how many ways can 5 be written as a sum of four squares?" (answer: 48).

<div class="myth" markdown="1">
"Theta function" is a single function. There is a whole family: Jacobi's four in one variable, and Riemann's in many variables, each with variants called characteristics.
</div>

### Further reading
- Mumford–Series–Wright, *Indra's Pearls* (2002), [doi:10.1017/cbo9781107050051](https://doi.org/10.1017/cbo9781107050051).

## Somewhat technical

### Definition
With $q=e^{\pi i\tau}$, $\operatorname{Im}\tau>0$ (so $|q|<1$):
$$\vartheta_3(z,q)=\sum_{n\in\mathbb{Z}}q^{n^2}e^{2inz}=1+2\sum_{n\ge1}q^{n^2}\cos 2nz.$$
Its relatives: $\vartheta_4(z)=\vartheta_3(z+\tfrac\pi2)$, $\vartheta_2(z)=\sum_n q^{(n+1/2)^2}e^{(2n+1)iz}$, and $\vartheta_1(z)=-i\sum_n (-1)^n q^{(n+1/2)^2}e^{(2n+1)iz}=2\sum_{n\ge0}(-1)^nq^{(n+1/2)^2}\sin(2n+1)z$ (odd in $z$; conventions as in [DLMF §20.2](https://dlmf.nist.gov/20.2)).

### Periodicity, step by step
1. Replacing $z$ by $z+\pi$ multiplies each term by $e^{2in\pi}=1$: **periodic**.
2. Replacing $z$ by $z+\pi\tau$ multiplies the $n$-th term by $e^{2in\pi\tau}=q^{2n}$. Completing the square, $q^{n^2+2n}=q^{(n+1)^2}q^{-1}$, so after shifting the summation index: $\vartheta_3(z+\pi\tau)=q^{-1}e^{-2iz}\vartheta_3(z)$: **quasi-periodic**.

<div class="viz" data-viz="theta"></div>

### Worked example: a theta constant by hand
$\vartheta_3(0,q)$ at $q=0.1$: $1+2(0.1+0.1^4+0.1^9+\dots)=1+2(0.100100001\ldots)\approx1.200200002$. Three terms already give 15 digits because the exponents $n^2$ grow so fast.

### Two famous identities
- **Jacobi triple product.** $\displaystyle\sum_{n}q^{n^2}w^{n}=\prod_{m\ge1}(1-q^{2m})(1+q^{2m-1}w)(1+q^{2m-1}w^{-1})$.
- **Jacobi's quartic identity.** $\vartheta_3(0)^4=\vartheta_2(0)^4+\vartheta_4(0)^4$.

<div class="key" markdown="1">
Because $\vartheta_3(0,q)=\sum q^{n^2}$, its $k$-th power is $\sum_n r_k(n)q^n$, where $r_k(n)$ counts ways to write $n$ as a sum of $k$ squares (signs and order matter). Identities between theta constants are therefore counting theorems.
</div>

<figure><img src="{{ '/assets/img/jacobi-theta-3.png' | relative_url }}" alt="Color plot of Jacobi theta 3 over the unit disk of the nome q" loading="lazy" width="380"><figcaption>θ₃ as a function of the nome q. Image: 唐戈, Wikimedia Commons, CC BY-SA 4.0.</figcaption></figure>

### Further reading
- NIST DLMF, [Chapter 20: Theta Functions](https://dlmf.nist.gov/20) (definitions, identities, graphs).

## Engineers

### A Fourier series with Gaussian coefficients
$\vartheta_3(x,q)=1+2\sum q^{n^2}\cos 2nx$: periodic, real for real $q$, and the coefficients decay like a Gaussian in $n$. Truncation error after $N$ terms is about $2q^{N^2}$.

```python
from math import cos, pi
def theta3(x, q, N=None):
    if N is None:                                  # choose N so q^(N^2) < 1e-16
        N = 1
        while q ** (N * N) > 1e-16: N += 1
    return 1 + 2 * sum(q ** (n * n) * cos(2 * n * x) for n in range(1, N))

print(theta3(0, 0.1))     # 1.200200002...
print(theta3(pi, 0.5) - theta3(0, 0.5))   # 0: period pi
```

### Check an identity numerically
```python
def th(k, q, N=40):                                # theta constants (z = 0), real 0<q<1
    if k == 2: return 2 * sum(q ** ((n + 0.5) ** 2) for n in range(N))
    if k == 3: return 1 + 2 * sum(q ** (n * n) for n in range(1, N))
    if k == 4: return 1 + 2 * sum((-1) ** n * q ** (n * n) for n in range(1, N))

for q in (0.1, 0.3, 0.7):
    print(th(3, q) ** 4 - th(2, q) ** 4 - th(4, q) ** 4)   # ~1e-15: Jacobi's quartic identity
```

### Count with it: sums of four squares
```python
from itertools import product
N = 12
r4 = [0] * (N + 1)
for a, b, c, d in product(range(-4, 5), repeat=4):
    s = a*a + b*b + c*c + d*d
    if s <= N: r4[s] += 1
jacobi = [8 * sum(d for d in range(1, n + 1) if n % d == 0 and d % 4) for n in range(1, N + 1)]
print(r4[1:] == jacobi)    # True: r4(n) = 8 * (sum of divisors of n not divisible by 4)
```

<div class="myth" markdown="1">
"Theta series converge slowly because they are infinite." The opposite: the $q^{n^2}$ decay makes them among the fastest-converging series in analysis. In $g$ variables the cost is in the *number* of lattice points, which is why reduction of $\operatorname{Im}\tau$ matters (Deconinck et al. 2004).
</div>

### Further reading
- B. Deconinck, M. Heil, A. Bobenko, M. van Hoeij, M. Schmies, "Computing Riemann theta functions", *Math. Comp.* 73 (2004), [doi:10.1090/S0025-5718-03-01609-0](https://doi.org/10.1090/S0025-5718-03-01609-0).
- NIST DLMF, [Chapter 21: Multidimensional Theta Functions](https://dlmf.nist.gov/21).

## Scientists

### The heat kernel on a circle
With $q=e^{-\pi t}$, $\vartheta_3(x,q)=\sum_n e^{-\pi t n^2}e^{2inx}$ is a mode expansion of a periodized Gaussian: it solves a heat equation in $(x,t)$. Poisson summation converts the sum over modes into a sum over images, $t\leftrightarrow1/t$: the prototype of a modular transformation and of the high/low-temperature duality of a particle on a circle.

### Quasi-periodic waves
Riemann's multivariable theta function gives the finite-gap solutions of KdV, $u(x,t)=2\partial_x^2\log\theta(Ux+Wt+z\mid\tau)+c$ (Its–Matveev 1975, [doi:10.1007/BF01038218](https://doi.org/10.1007/BF01038218)). Each variable of $\theta$ is one interacting phase; letting cycles of the spectral curve pinch turns the solution into $N$ solitons.

<div class="viz" data-viz="kdv"></div>

### Spin structures
The $2^{2g}$ theta functions with half-integer characteristics correspond to the spin structures on a genus-$g$ surface; in superstring perturbation theory the sum over spin structures is a sum over these $\theta[\delta]$ (Alvarez-Gaumé–Moore–Vafa, *Comm. Math. Phys.* 106 (1986), [doi:10.1007/BF01210925](https://doi.org/10.1007/BF01210925)).

### Further reading
- Dubrovin, "Theta functions and non-linear equations" (1981), [doi:10.1070/rm1981v036n02abeh002596](https://doi.org/10.1070/rm1981v036n02abeh002596).

## Mathematicians

### Riemann theta function with characteristics
For $\tau\in\mathfrak{H}_g$, $z\in\mathbb{C}^g$, $\epsilon,\epsilon'\in\mathbb{R}^g$ (Farkas–Kra GSM 37 convention):
$$\theta\begin{bmatrix}\epsilon\\ \epsilon'\end{bmatrix}(z,\tau)=\sum_{n\in\mathbb{Z}^g}\exp 2\pi i\Big[\tfrac12\big(n+\tfrac{\epsilon}{2}\big)^t\tau\big(n+\tfrac{\epsilon}{2}\big)+\big(n+\tfrac{\epsilon}{2}\big)^t\big(z+\tfrac{\epsilon'}{2}\big)\Big].$$
For $\epsilon,\epsilon'\in\{0,1\}^g$ it is even or odd in $z$ according to the parity of $\epsilon\cdot\epsilon'$: $2^{g-1}(2^g+1)$ even and $2^{g-1}(2^g-1)$ odd characteristics.

### Riemann's vanishing theorem
For $\tau$ the period matrix of $X$, there is a vector of Riemann constants $\kappa$ such that $\theta(e,\tau)=0$ iff $e=A(D)+\kappa$ for an effective divisor $D$ of degree $g-1$ (sign conventions vary). Moreover (Riemann singularity theorem) $\operatorname{mult}_e\theta=\ell(D)$.

### Riemann's theta formula
Riemann's theta formula expresses the product $\theta(x)\theta(y)\theta(u)\theta(v)$ as $2^{-g}$ times a sum, over all $2^{2g}$ half-integer characteristics, of products of theta functions with that characteristic evaluated at $x_1=\tfrac12(x+y+u+v)$, $y_1=\tfrac12(x+y-u-v)$, $u_1=\tfrac12(x-y+u-v)$, $v_1=\tfrac12(x-y-u+v)$, with explicit signs; see Mumford, *Tata I*, Ch. II §6 for the exact statement. In genus 1 it specializes to Jacobi's quartic identity $\vartheta_3^4=\vartheta_2^4+\vartheta_4^4$ (verified numerically in the Engineers tab).

### Thomae's formula
For the hyperelliptic curve $y^2=\prod_{j=1}^{2g+1}(x-\lambda_j)$ (or $2g+2$ branch points), every even non-singular half-integer characteristic $e$ corresponds to a partition of the branch points into two sets $S,T$, and Thomae (1870) proved that $\theta[e](0,\tau)^4$ equals a constant independent of $e$ times $\prod_{i<j\in S}(\lambda_i-\lambda_j)\prod_{i<j\in T}(\lambda_i-\lambda_j)$, with the exact constant involving the $a$-periods. In genus 1, for $y^2=x(x-1)(x-\lambda)$: $\lambda=\vartheta_2(0)^4/\vartheta_3(0)^4$ and $1-\lambda=\vartheta_4(0)^4/\vartheta_3(0)^4$. Farkas–Zemel generalize this to $Z_n$ curves $y^n=\prod(x-\lambda_j)^{r_j}$.

<div class="myth" markdown="1">
"Theta constants of a Jacobian are arbitrary." They satisfy algebraic relations (Schottky–Jung, Thomae, Riemann's formula); describing all of them is the [Schottky problem](schottky-problem).
</div>

### Further reading
- Farkas–Kra, *Theta Constants, Riemann Surfaces and the Modular Group*, ch. "Theta functions with characteristics" ([doi:10.1090/gsm/037/02](https://doi.org/10.1090/gsm/037/02)) and "Theta constant identities" ([doi:10.1090/gsm/037/04](https://doi.org/10.1090/gsm/037/04)).
- Farkas–Kra, *Riemann Surfaces*, ch. "Theta Functions" ([doi:10.1007/978-1-4612-2034-3_7](https://doi.org/10.1007/978-1-4612-2034-3_7)).
- Mumford, *Tata Lectures on Theta I* (1983), *II* (2007, [doi:10.1007/978-0-8176-4578-6](https://doi.org/10.1007/978-0-8176-4578-6)).
- J. Fay, *Theta Functions on Riemann Surfaces*, LNM 352 (1973).
