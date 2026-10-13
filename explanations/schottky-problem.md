---
layout: topic
title: The Schottky Problem
---
# The Schottky Problem

## Non-technical
Every pretzel-shaped surface produces a table of numbers, its "period matrix", a bit like a fingerprint. But here is the puzzle: if someone hands you a table of numbers that *looks* like a fingerprint, how can you tell whether a real surface produced it, or whether it's a forgery?

For surfaces with one, two or three holes, every plausible table is genuine. From four holes on, most tables are forgeries: genuine ones are rare and obey hidden rules. Finding those rules is the **Schottky problem**, named after Friedrich Schottky, who found the rule for four holes in 1888. Hershel Farkas worked on this problem from his 1970 *Annals of Mathematics* papers onward.

## Somewhat technical
A genus-$g$ surface gives a $g\times g$ symmetric complex matrix $\tau$ with positive-definite imaginary part. Count parameters:

| genus $g$ | entries of $\tau$: $g(g+1)/2$ | surfaces: $3g-3$ (for $g\ge2$) | extra conditions |
|---|---|---|---|
| 2 | 3 | 3 | 0 |
| 3 | 6 | 6 | 0 |
| 4 | 10 | 9 | 1 (Schottky's equation) |
| 5 | 15 | 12 | 3 |
| 10 | 55 | 27 | 28 |

So for $g\ge4$ the true period matrices (Jacobians) form a thin subset of all candidates, and the Schottky problem asks for equations or a test that picks them out.

<div class="viz" data-viz="genus"></div>

## Engineers
It's a validation problem. The input is a $g\times g$ matrix; the question is "is this matrix the period matrix of some surface?" The table above shows the valid set has dimension $3g-3$ inside a space of dimension $g(g+1)/2$, so the codimension $\tfrac{(g-2)(g-3)}{2}$ grows quadratically. It is like a checksum: valid codewords satisfy constraints that arbitrary strings don't.

One answer (Shiota 1986, below) turns the test into a *differential equation check*: build a function from the theta function of $\tau$ and ask whether it satisfies a specific wave equation (KP). Another (Krichever 2010) is geometric: certain points on an associated variety must line up three at a time ("trisecants").

## Scientists
Remarkably, a physics equation solves it. Novikov conjectured, and Shiota proved (*Invent. Math.* 83 (1986), [doi:10.1007/BF01388967](https://doi.org/10.1007/BF01388967)), that an indecomposable $\tau$ is a Jacobian's period matrix iff
$$u(x,y,t)=2\partial_x^2\log\theta(Ux+Vy+Wt+z,\tau)$$
solves the **Kadomtsev–Petviashvili (KP)** equation for some vectors $U\neq0,V,W$. KP is the 2+1-dimensional generalization of KdV describing weakly nonlinear shallow-water waves. Krichever (*Ann. of Math.* 172 (2010), [doi:10.4007/annals.2010.172.485](https://doi.org/10.4007/annals.2010.172.485)) proved the sharper trisecant criterion (Welters' conjecture), closely tied to Fay's trisecant formula.

## Mathematicians
Let $\mathcal{A}_g=\mathfrak{H}_g/Sp(2g,\mathbb{Z})$ and $\mathcal{J}_g\subset\mathcal{A}_g$ the closure of the Jacobian locus, $\dim\mathcal{J}_g=3g-3$ for $g\ge2$. The Schottky problem: characterize $\mathcal{J}_g$.

**Schottky–Jung relations.** For an unramified double cover $\tilde X\to X$, the Prym variety's theta constants are expressed through those of $J(X)$ (Schottky–Jung proportionality). Eliminating Prym data yields modular equations vanishing on $\mathcal{J}_g$; for $g=4$ this recovers Schottky's equation. Farkas–Rauch ("Period relations of Schottky type on Riemann surfaces", *Ann. of Math.* 92 (1970), [doi:10.2307/1970627](https://doi.org/10.2307/1970627)) and Farkas ("On the Schottky relation and its generalization to arbitrary genus", *Ann. of Math.* 1970, [doi:10.2307/1970697](https://doi.org/10.2307/1970697)) developed this theory; survey: Farkas, "Schottky–Jung theory", Proc. Symp. Pure Math. 49 (1989), [doi:10.1090/pspum/049.1/1013146](https://doi.org/10.1090/pspum/049.1/1013146). Related: "On Fay's tri-secant formula" (*J. Analyse* 44 (1984), [doi:10.1007/bf02790197](https://doi.org/10.1007/bf02790197)); "The trisecant formula and hyperelliptic surfaces" (Contemp. Math. 136, [doi:10.1090/conm/136/1188197](https://doi.org/10.1090/conm/136/1188197)).

<figure><img src="{{ '/assets/img/double-torus-cover.png' | relative_url }}" alt="Diagram of a genus-3 surface mapping two-to-one onto a genus-2 surface: an unramified double cover" loading="lazy" width="420"><figcaption>An unramified double cover of a genus-2 surface, the kind of cover used in Schottky–Jung theory. Image: RobHar, Wikimedia Commons, public domain.</figcaption></figure>

**Solutions.** Shiota (1986, KP characterization, above). Krichever (2010): an indecomposable principally polarized abelian variety is a Jacobian iff its Kummer variety has a trisecant line.
