---
layout: topic
title: Riemann Surfaces
---
# Riemann Surfaces

<div class="common" markdown="1">
## History in brief

- **1820s – Abel and Jacobi.** Niels Henrik Abel's great memoir on integrals of algebraic functions (submitted to the Paris Academy in 1826, published only in 1841, after his death in 1829) contains what is now *Abel's theorem*. Carl Gustav Jacob Jacobi's *Fundamenta Nova Theoriae Functionum Ellipticarum* (1829) built the theory of elliptic functions by inverting elliptic integrals.
- **1851 – Riemann's dissertation.** Bernhard Riemann's Göttingen thesis, *Grundlagen für eine allgemeine Theorie der Functionen einer veränderlichen complexen Grösse*, introduced surfaces spread over the plane on which multi-valued functions become single-valued. A transcription is hosted by [Trinity College Dublin](https://www.maths.tcd.ie/pub/HistMath/People/Riemann/).
- **1857 – "Theorie der Abel'schen Functionen"**, *J. reine angew. Math.* 54 ([doi:10.1515/crll.1857.54.115](https://doi.org/10.1515/crll.1857.54.115)): genus, periods, the Riemann theta function, and Riemann's inequality, which his student Gustav Roch sharpened (1865) into the **Riemann–Roch theorem**.
- **20th century.** Moduli and Teichmüller theory; Harry E. Rauch, Farkas's doctoral advisor, studied Weierstrass points and moduli ("Weierstrass points, branch points, and moduli of Riemann surfaces", *Comm. Pure Appl. Math.* 12 (1959), [doi:10.1002/cpa.3160120310](https://doi.org/10.1002/cpa.3160120310)). Farkas's thesis (Yeshiva, 1965) was *Analytic Submanifolds of Teichmüller Space*.
</div>

<div class="common farkas" markdown="1">
## Where Farkas comes in

- **Special divisors and Weierstrass points in moduli.** His first papers locate surfaces with special properties inside Teichmüller space: "Special divisors and analytic subloci of Teichmüller space" (*Amer. J. Math.* 88 (1966), [doi:10.2307/2373086](https://doi.org/10.2307/2373086)), "Special divisors on compact Riemann surfaces" (*Proc. AMS* 1968, [doi:10.1090/s0002-9939-1968-0222283-5](https://doi.org/10.1090/s0002-9939-1968-0222283-5)), "Weierstrass points and analytic submanifolds of Teichmüller space" (*Proc. AMS* 1969, [doi:10.1090/s0002-9939-1969-0232928-2](https://doi.org/10.1090/s0002-9939-1969-0232928-2)).
- **Automorphisms.** "Remarks on automorphisms of compact Riemann surfaces" (Ann. of Math. Studies 79, 1974, [doi:10.1515/9781400881642-013](https://doi.org/10.1515/9781400881642-013)).
- **Hyperelliptic surfaces and coverings.** "Unramified double coverings of hyperelliptic surfaces" I and II (*J. Analyse* 1976, [doi:10.1007/bf02786710](https://doi.org/10.1007/bf02786710); *Proc. AMS* 1987, [doi:10.1090/s0002-9939-1987-0908651-6](https://doi.org/10.1090/s0002-9939-1987-0908651-6)); "Branched two-sheeted covers" (with Kra, *Israel J. Math.* 74, 1991).
- **The textbook.** *Riemann Surfaces* with Irwin Kra (Springer GTM 71; 1980, 2nd ed. 1992), cited roughly 980 times across both editions in OpenAlex (see [Applications](../applications#citing)).
</div>

## Non-technical

### The problem: functions with two answers
Ask "what number times itself is 4?" and you get two answers, 2 and −2. For ordinary numbers that's a small nuisance. For complex numbers it becomes a real puzzle: if you start at 4 with the answer 2 and slowly walk around a circle back to 4, keeping your answer continuous, you come back holding **−2**. The two answers swap.

### Riemann's fix: build a new place
Riemann's idea was not to choose, but to build a surface with **two floors**, one for each answer, joined along a ramp around the troublesome point 0, like a spiral car park. On that surface the square root has exactly one value at every spot.

<figure><img src="{{ '/assets/img/riemann-surface-sqrt.png' | relative_url }}" alt="Two sheets spiralling through each other around a central point: the Riemann surface of the square root" loading="lazy" width="460"><figcaption>The two "floors" of the square root, joined around 0. Image: Leonid 2, Wikimedia Commons, CC BY-SA 3.0.</figcaption></figure>

<div class="key" markdown="1">
A Riemann surface is the *natural home* of a function: the place where all its possible values sit side by side without conflict.
</div>

### Closing it up: spheres, doughnuts and pretzels
When you finish building and close the surface up, it is a smooth shape without edges. Only one thing really distinguishes these shapes from each other at a glance: the number of holes, called the genus. A ball has none, a doughnut one, a pretzel two or more.

<div class="viz" data-viz="genus"></div>

<div class="myth" markdown="1">
"A Riemann surface is a picture of a curved surface in space." The 3D picture is only a helpful drawing. What really matters is how you can do calculus on it, and two surfaces that *look* the same (both doughnuts) can still be genuinely different as Riemann surfaces: a fat doughnut and a thin one are different shapes in this sense.
</div>

### Further reading
- D. Mumford, C. Series, D. Wright, *Indra's Pearls: The Vision of Felix Klein*, Cambridge Univ. Press (2002), [doi:10.1017/cbo9781107050051](https://doi.org/10.1017/cbo9781107050051): a picture-rich introduction to the symmetries behind these surfaces.

## Somewhat technical

### Definition in words
A **Riemann surface** is a connected surface covered by "charts" that identify small patches with discs in $\mathbb{C}$, such that switching between overlapping charts is a holomorphic map. That's enough structure to say what a holomorphic or meromorphic function on the surface is.

### Three examples
1. **The Riemann sphere** $\hat{\mathbb{C}}=\mathbb{C}\cup\{\infty\}$, with charts $z$ and $1/z$. Genus 0.
2. **A torus** $\mathbb{C}/\Lambda$, $\Lambda=\{m+n\tau\}$, $\operatorname{Im}\tau>0$. Genus 1. Drag $\tau$ and fold:

<div class="viz" data-viz="lattice"></div>

3. **Hyperelliptic surfaces** $y^2=(x-a_1)\cdots(x-a_{n})$ with distinct $a_i$: two sheets ($\pm y$) over the $x$-sphere, joined at the branch points.

### Worked example: the genus of $y^2=f(x)$
**Step 1.** Over each $x$ there are 2 values of $y$, except where $f(x)=0$: those are branch points. If $\deg f=n$, then $\infty$ is also a branch point when $n$ is odd. So the number of branch points is $n$ ($n$ even) or $n+1$ ($n$ odd); call it $2k$.

**Step 2.** The Riemann–Hurwitz formula for a 2-sheeted cover of the sphere says $2g-2=2(0-2)+2k$, i.e. $g=k-1$.

**Step 3.** Examples: $y^2=x^3-x$: $n=3$, $2k=4$, $g=1$ (a torus). $y^2=x^5-1$: $n=5$, $2k=6$, $g=2$. $y^2=x^6-1$: $n=6$, $2k=6$, $g=2$.

<div class="key" markdown="1">
Every compact Riemann surface can be described by a polynomial equation $P(x,y)=0$ (Riemann's existence theorem), so these "abstract surfaces" are exactly the complex algebraic curves.
</div>

### Loops and integrals
A genus-$g$ surface has $2g$ basic loops, $a_1,\dots,a_g$ and $b_1,\dots,b_g$, and exactly $g$ independent holomorphic differentials $\omega_1,\dots,\omega_g$ (expressions $f(z)\,dz$). Integrating them around the loops gives the **periods**; these numbers are the surface's fingerprint (see [Theta functions](theta-functions) and the [Schottky problem](schottky-problem)).

<div class="myth" markdown="1">
"Genus counts the branch points." No: for $y^2=f(x)$ it's (number of branch points)/2 − 1, and other covers follow the Riemann–Hurwitz formula.
</div>

### Further reading
- T. Needham, *Visual Complex Analysis*, Oxford Univ. Press (1997), [doi:10.1093/oso/9780198534471.001.0001](https://doi.org/10.1093/oso/9780198534471.001.0001).
- Farkas–Kra, *Riemann Surfaces*, chapter "An Overview" ([doi:10.1007/978-1-4612-2034-3_1](https://doi.org/10.1007/978-1-4612-2034-3_1)).

## Engineers

### Think data structure
A multi-valued function like $\sqrt z$ is a lookup that returns two values. A Riemann surface is the data structure that makes it single-valued by storing a **sheet index** next to $z$, and flipping it whenever your path crosses a branch cut. Where you put the cut is an implementation detail; the surface is not.

```python
import cmath
def sqrt_along_path(path):
    """Continue sqrt continuously along a list of complex points."""
    w = cmath.sqrt(path[0])
    out = [w]
    for z in path[1:]:
        r = cmath.sqrt(z)
        w = r if abs(r - w) < abs(-r - w) else -r   # pick the nearer branch
        out.append(w)
    return out

circle = [4 * cmath.exp(2j * cmath.pi * k / 200) for k in range(201)]
print(sqrt_along_path(circle)[-1])   # about -2: one loop around 0 swaps the sheets
```

### Periodic in two directions
A genus-1 surface is $\mathbb{C}/\Lambda$: the plane with periodic boundary conditions in two directions, exactly like a tiled texture or a 2D FFT grid.

```python
import math
def to_torus(z, tau):                 # reduce z into the fundamental parallelogram
    n = math.floor(z.imag / tau.imag) # how many tau-steps up
    z -= n * tau
    return complex(z.real - math.floor(z.real), z.imag)

print(to_torus(complex(3.7, 2.5), complex(0.3, 1.0)))   # same torus point, in the cell
```

<div class="viz" data-viz="torus3d"></div>

### Genus from the equation (Riemann–Hurwitz)

```python
def genus_hyperelliptic(deg_f):       # y^2 = f(x), f squarefree
    branch = deg_f + (deg_f % 2)      # infinity is a branch point when deg f is odd
    return branch // 2 - 1

print([genus_hyperelliptic(d) for d in range(3, 9)])   # [1, 1, 2, 2, 3, 3]
```

### The size parameters
| quantity | value for genus $g$ |
|---|---|
| holomorphic differentials | $g$ |
| basic loops | $2g$ |
| period matrix | $g\times g$, symmetric: $g(g+1)/2$ numbers |
| shape parameters (moduli), $g\ge2$ | $3g-3$ |

<div class="key" markdown="1">
For $g\ge4$, $g(g+1)/2 > 3g-3$: the period matrix has more entries than the surface has degrees of freedom. That mismatch is the [Schottky problem](schottky-problem).
</div>

### Further reading
- B. Deconinck, M. van Hoeij, "Computing Riemann matrices of algebraic curves", *Physica D* 152–153 (2001), [doi:10.1016/S0167-2789(01)00156-7](https://doi.org/10.1016/S0167-2789(01)00156-7).
- SageMath [`RiemannSurface`](https://doc.sagemath.org/html/en/reference/curves/sage/schemes/riemann_surfaces/riemann_surface.html) documentation.

## Scientists

### World-sheets and spectral curves
In physics a compact Riemann surface appears in at least two roles:
1. **World-sheet.** A closed string sweeps out a surface; $g$ loops in a string diagram = genus $g$. The $g$-loop amplitude is an integral over the moduli space of genus-$g$ surfaces (D'Hoker–Phong, *Rev. Mod. Phys.* 60 (1988), [doi:10.1103/revmodphys.60.917](https://doi.org/10.1103/revmodphys.60.917)).
2. **Spectral curve.** For a periodic Schrödinger operator $-\partial_x^2+u(x)$ with finitely many spectral gaps, the band edges $\lambda_1,\dots,\lambda_{2g+1}$ define $y^2=\prod(\lambda-\lambda_j)$, a genus-$g$ hyperelliptic surface. The potential $u$ (and its KdV evolution) is written through that surface's theta function (Its–Matveev 1975, [doi:10.1007/BF01038218](https://doi.org/10.1007/BF01038218)).

<figure><img src="{{ '/assets/img/triple-torus.png' | relative_url }}" alt="A smooth closed surface with three holes" loading="lazy" width="380"><figcaption>A genus-3 surface: a three-loop closed-string world-sheet. Image: Oleg Alexandrov, Wikimedia Commons, public domain.</figcaption></figure>

### Conformal structure is the physics
Two metrics on a surface that differ by a local rescaling define the same Riemann surface. In 2D conformal field theory this is precisely the gauge freedom: the theory depends on the surface only through its complex structure, i.e. its point in moduli space.

<div class="myth" markdown="1">
"The holes are physical holes in space." They are topology of the world-sheet or of the spectral curve, not of physical space.
</div>

### Further reading
- B. A. Dubrovin, "Theta functions and non-linear equations", *Russian Math. Surveys* 36 (1981), [doi:10.1070/rm1981v036n02abeh002596](https://doi.org/10.1070/rm1981v036n02abeh002596).
- D'Hoker–Phong (1988), above.

## Mathematicians

### Setting and notation
$X$ a compact Riemann surface of genus $g\ge1$; $\{a_i,b_i\}_{i=1}^g$ a canonical homology basis ($a_i\cdot b_j=\delta_{ij}$, $a_i\cdot a_j=b_i\cdot b_j=0$); $\omega_1,\dots,\omega_g$ the basis of $H^0(X,K)$ normalized by $\int_{a_i}\omega_j=\delta_{ij}$; $\tau_{ij}=\int_{b_i}\omega_j$.

**Riemann bilinear relations.** $\tau={}^t\tau$ and $\operatorname{Im}\tau>0$, so $\tau\in\mathfrak{H}_g$.

### Riemann–Roch
For a divisor $D$, with $\ell(D)=\dim\{f: (f)+D\ge0\}\cup\{0\}$ and $K$ a canonical divisor,
$$\ell(D)-\ell(K-D)=\deg D-g+1.$$
Consequences: $\deg K=2g-2$, $\ell(K)=g$; for $\deg D>2g-2$, $\ell(D)=\deg D-g+1$.

### Abel–Jacobi
The Jacobian $J(X)=\mathbb{C}^g/L$, $L=\mathbb{Z}^g+\tau\mathbb{Z}^g$, and $A_{P_0}:X\to J(X)$, $P\mapsto\left(\int_{P_0}^P\omega_j\right)_j$, extended additively to divisors.
- **Abel's theorem.** Divisors $D,D'$ of the same degree are linearly equivalent iff $A(D)=A(D')$.
- **Jacobi inversion.** $A:X^{(g)}\to J(X)$ is surjective (and birational).

### Weierstrass points
$P$ is a Weierstrass point iff $\ell(gP)\ge2$, equivalently some holomorphic differential vanishes to order $\ge g$ at $P$. For $g\ge2$ the number $N$ of Weierstrass points (counted with weight) satisfies $2g+2\le N\le g^3-g$, with $N=2g+2$ iff $X$ is hyperelliptic.

<div class="myth" markdown="1">
"$\ell(D)$ depends only on $\deg D$." Only for $\deg D>2g-2$ (or $\deg D<0$); in between, special divisors with $\ell(K-D)>0$ exist, and their loci in moduli are exactly what Farkas's 1966–1969 papers study.
</div>

### Further reading
- Farkas–Kra, *Riemann Surfaces*, 2nd ed., chapters "Riemann Surfaces", "Compact Riemann Surfaces", "Automorphisms of Compact Surfaces—Elementary Theory" ([doi:10.1007/978-1-4612-2034-3](https://doi.org/10.1007/978-1-4612-2034-3)).
- B. Riemann, "Theorie der Abel'schen Functionen" (1857), above.
- D. Mumford, *Tata Lectures on Theta I*, Birkhäuser (1983), Ch. II, [doi:10.1007/978-1-4899-2843-6](https://doi.org/10.1007/978-1-4899-2843-6).
