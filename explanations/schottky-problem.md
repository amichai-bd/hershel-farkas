---
layout: topic
title: The Schottky Problem
---
# The Schottky Problem

<div class="common" markdown="1">
## History in brief

- **1857 – Riemann** attaches to every surface of genus $g$ a period matrix and a theta function ([doi:10.1515/crll.1857.54.115](https://doi.org/10.1515/crll.1857.54.115)).
- **1888 – Schottky.** Friedrich Schottky finds an equation in the theta constants that vanishes on period matrices of genus-4 surfaces: "Zur Theorie der Abelschen Functionen von vier Variabeln", *J. reine angew. Math.* 102 ([doi:10.1515/crll.1888.102.304](https://doi.org/10.1515/crll.1888.102.304)).
- **1909 – Schottky and Jung** relate theta constants of a surface to those of the Prym variety of a double cover: the *Schottky–Jung relations* (surveyed in Farkas, "Schottky–Jung theory", 1989, [doi:10.1090/pspum/049.1/1013146](https://doi.org/10.1090/pspum/049.1/1013146)).
- **1970 – Farkas and Rauch** develop Schottky-type period relations in arbitrary genus (*Ann. of Math.*, below).
- **1980s – via physics.** Novikov conjectures that the KP soliton equation characterizes Jacobians; Shiota proves it (*Invent. Math.* 83 (1986), [doi:10.1007/BF01388967](https://doi.org/10.1007/BF01388967)).
- **2010 – Krichever** proves the trisecant (Welters) characterization (*Ann. of Math.* 172, [doi:10.4007/annals.2010.172.485](https://doi.org/10.4007/annals.2010.172.485)).
- **Survey:** S. Grushevsky, "The Schottky problem" (2012), [doi:10.1017/9781139032766.007](https://doi.org/10.1017/9781139032766.007).
</div>

<div class="common farkas" markdown="1">
## Where Farkas comes in

- **Schottky relation in every genus.** H. M. Farkas, "On the Schottky relation and its generalization to arbitrary genus", *Ann. of Math.* (1970), [doi:10.2307/1970697](https://doi.org/10.2307/1970697).
- **Farkas–Rauch period relations.** "Period relations of Schottky type on Riemann surfaces", *Ann. of Math.* (1970), [doi:10.2307/1970627](https://doi.org/10.2307/1970627), preceded by the PNAS notes on "two kinds of theta constants" (1968–69). OpenAlex lists about 44 citing works, including Dubrovin's KP papers (1981–82) and Grushevsky–Salvati Manni (2008).
- **Hyperelliptic period relations**: *Israel J. Math.* (1971), [doi:10.1007/bf02771646](https://doi.org/10.1007/bf02771646); Poincaré relations (with Ehrenpreis, Ann. Math. Studies 79, [doi:10.1515/9781400881642-012](https://doi.org/10.1515/9781400881642-012)).
- **Survey**: "Schottky–Jung theory", Proc. Symp. Pure Math. 49 (1989), [doi:10.1090/pspum/049.1/1013146](https://doi.org/10.1090/pspum/049.1/1013146).
- **Trisecants**: "On Fay's tri-secant formula" (1984, [doi:10.1007/bf02790197](https://doi.org/10.1007/bf02790197)); "The trisecant formula and hyperelliptic surfaces" (1992, [doi:10.1090/conm/136/1188197](https://doi.org/10.1090/conm/136/1188197)).
- **Still working on it**: talk "The Schottky Relation in arbitrary genus", 2016 Gainesville Number Theory Conference ([program](https://qseries.org/alladi60/program.pdf)); "Vanishing thetanulls and Jacobians" (2006, [doi:10.1090/conm/397/07460](https://doi.org/10.1090/conm/397/07460)).
</div>

## Non-technical

### A fingerprint puzzle
Every pretzel-shaped surface produces a table of numbers, its period matrix, like a fingerprint. Now someone hands you a table that *looks* like a fingerprint. Is there a real surface behind it, or is it a forgery? That is the Schottky problem.

### When forgeries become possible
For surfaces with up to three holes there are no forgeries: every plausible table really comes from some surface (allowing a few degenerate cases). From four holes on, the tables have *more* entries than the surfaces have ways to vary, so most plausible tables are forgeries and the genuine ones obey hidden rules. Friedrich Schottky found the single hidden rule for four holes in 1888.

<div class="key" markdown="1">
Not every "fingerprint" belongs to a surface. The Schottky problem asks for a test that tells the genuine ones apart.
</div>

### An unexpected detective
In the 1980s the answer came from an unexpected direction: an equation that describes water waves. A table is genuine exactly when a function built from it describes a valid wave (Shiota 1986). Hershel Farkas worked on the classical approach, through hidden relations among theta constants, from his 1970 papers onward.

<div class="myth" markdown="1">
"Once solved, the problem is closed." Several solutions exist (via waves, via geometry), but finding explicit *equations* for every genus, in the spirit of Schottky's, is still an active research topic.
</div>

### Further reading
- [Riemann surfaces](riemann-surfaces) and [Theta functions](theta-functions) on this site, Non-technical tabs.

## Somewhat technical

### The parameter count
A genus-$g$ surface gives a $g\times g$ complex matrix $\tau$ that is symmetric with positive-definite imaginary part; such matrices form Siegel's upper half-space $\mathfrak{H}_g$, of dimension $g(g+1)/2$. Surfaces of genus $g\ge2$ depend on $3g-3$ complex parameters.

| genus $g$ | $\dim\mathfrak{H}_g=g(g+1)/2$ | moduli $3g-3$ | missing conditions |
|---|---|---|---|
| 2 | 3 | 3 | 0 |
| 3 | 6 | 6 | 0 |
| 4 | 10 | 9 | 1 (Schottky's equation) |
| 5 | 15 | 12 | 3 |
| 6 | 21 | 15 | 6 |
| 10 | 55 | 27 | 28 |

<div class="viz" data-viz="genus"></div>

### Worked example: why genus 4 needs one equation
1. Count: $10-9=1$, so (up to the action of the symplectic group) Jacobians form a hypersurface in the 10-dimensional space.
2. A hypersurface is cut out locally by one equation; Schottky (1888) wrote it down as a polynomial relation among theta constants.
3. For $g=5$ the gap is 3, so at least 3 equations are needed, and they are much harder to write down.

<div class="myth" markdown="1">
"Genus 2 and 3 are trivial." Not quite: in those genera a generic $\tau$ is a period matrix, but some $\tau$ (e.g. block-diagonal ones, which split into lower-genus pieces) are not.
</div>

### Further reading
- Farkas–Kra, *Riemann Surfaces*, ch. "Theta Functions" ([doi:10.1007/978-1-4612-2034-3_7](https://doi.org/10.1007/978-1-4612-2034-3_7)).

## Engineers

### A validation problem
Input: a $g\times g$ complex matrix. Question: is it the period matrix of some curve? The valid set has dimension $3g-3$ in a space of dimension $g(g+1)/2$, so the codimension $\tfrac{(g-2)(g-3)}2$ grows quadratically. It's like a checksum: valid codewords satisfy constraints that arbitrary strings don't.

### Step 1: is it even a candidate?
```python
import numpy as np
def in_siegel_space(tau, tol=1e-12):
    tau = np.asarray(tau, dtype=complex)
    symmetric = np.allclose(tau, tau.T, atol=tol)
    pos_def = np.all(np.linalg.eigvalsh(tau.imag) > tol)
    return symmetric and pos_def

print(in_siegel_space([[1j, 0.5], [0.5, 2j]]))   # True: a candidate in H_2
print(in_siegel_space([[1j, 0.5], [0.2, 2j]]))   # False: not symmetric
```

### Step 2: how many hidden constraints?
```python
for g in range(2, 11):
    print(g, g*(g+1)//2, 3*g-3, (g-2)*(g-3)//2)   # dim H_g, moduli, codimension
```

### Step 3: the modern tests
- **Differential-equation test (Shiota 1986).** Build $u=2\partial_x^2\log\theta(Ux+Vy+Wt+z,\tau)$ and check whether it solves the KP equation for some vectors $U\ne0,V,W$. Computationally: evaluate $\theta$ and its derivatives (Deconinck et al. 2004) and test the PDE residual; the theorem says a residual of zero, for some $U,V,W$, certifies a Jacobian (for indecomposable $\tau$).
- **Geometric test (Krichever 2010).** Three points of the associated Kummer variety lying on a line (a trisecant).

<div class="key" markdown="1">
Each theta-constant relation you know (Schottky–Jung, Farkas–Rauch) is a polynomial that must evaluate to 0 on genuine inputs, a necessary-condition check you can run numerically.
</div>

### Further reading
- Deconinck et al., "Computing Riemann theta functions" (2004), [doi:10.1090/S0025-5718-03-01609-0](https://doi.org/10.1090/S0025-5718-03-01609-0).
- Frauendiener–Klein, "Hyperelliptic theta-functions and spectral methods: KdV and KP solutions" (2006), [doi:10.1007/s11005-006-0068-4](https://doi.org/10.1007/s11005-006-0068-4).

## Scientists

### Waves decide geometry
Novikov conjectured and Shiota proved (1986) that an indecomposable $\tau$ is a Jacobian's period matrix iff
$$u(x,y,t)=2\partial_x^2\log\theta(Ux+Vy+Wt+z,\tau)$$
satisfies the **Kadomtsev–Petviashvili** equation $\tfrac34u_{yy}=\partial_x\!\big(u_t-\tfrac14(6uu_x+u_{xxx})\big)$ (normalizations vary; this is the form used in Mumford, *Tata II*) for some $U\ne0$, $V$, $W$. KP describes weakly two-dimensional shallow-water waves; its one-dimensional reduction is KdV.

<div class="viz" data-viz="kdv"></div>

### Why it works, heuristically
Theta functions of Jacobians admit Fay's trisecant identity; differentiating it gives exactly a bilinear (Hirota-form) KP equation for $\theta$. Shiota's theorem is the converse: only Jacobians do this. Dubrovin's 1981 and 1982 papers on KP and period relations, which cite Farkas–Rauch, develop this bridge ([doi:10.1070/rm1981v036n02abeh002596](https://doi.org/10.1070/rm1981v036n02abeh002596), [doi:10.1070/im1982v019n02abeh001418](https://doi.org/10.1070/im1982v019n02abeh001418)).

<div class="myth" markdown="1">
"The KP criterion is a numerical shortcut." It's an exact theorem; numerically you can only test it approximately.
</div>

### Further reading
- I. A. Taimanov, "Secants of abelian varieties, theta functions, and soliton equations" (1997), [doi:10.1070/rm1997v052n01abeh001743](https://doi.org/10.1070/rm1997v052n01abeh001743).

## Mathematicians

### Statement
Let $\mathcal{A}_g=\mathfrak{H}_g/Sp(2g,\mathbb{Z})$ be the moduli space of principally polarized abelian varieties, and $\mathcal{J}_g$ the closure of the image of the Torelli map $\mathcal{M}_g\to\mathcal{A}_g$, $\dim\mathcal{J}_g=3g-3$ ($g\ge2$). **Schottky problem:** characterize $\mathcal{J}_g$ inside $\mathcal{A}_g$. For $g\le3$, $\mathcal{J}_g=\mathcal{A}_g$.

### Schottky–Jung
Let $\tilde X\to X$ be an unramified double cover with $X$ of genus $g$, and $P$ its Prym variety, a ppav of dimension $g-1$ with period matrix $\Pi$. The Schottky–Jung proportionalities express the squares of the theta constants $\theta[\cdot](0,\Pi)$ through products of pairs of theta constants $\theta[\cdot](0,\tau)$ of $X$. Identities that hold for *every* ppav of dimension $g-1$ (such as Riemann's theta relations) therefore become, through the proportionalities, nontrivial relations among the theta constants of $X$: modular forms on $\mathcal{A}_g$ vanishing on $\mathcal{J}_g$. For $g=4$ (a 3-dimensional Prym) this recovers Schottky's equation. The precise statement and the Farkas–Rauch generalization are in Farkas, "Schottky–Jung theory" (1989).

<figure><img src="{{ '/assets/img/double-torus-cover.png' | relative_url }}" alt="A genus-3 surface mapping two-to-one onto a genus-2 surface" loading="lazy" width="380"><figcaption>An unramified double cover, the input of Schottky–Jung theory. Image: RobHar, Wikimedia Commons, public domain.</figcaption></figure>

### Solutions
- **Shiota (1986).** An indecomposable ppav $(A,\Theta)$ is a Jacobian iff $\theta$ yields a KP solution.
- **Krichever (2010).** An indecomposable ppav is a Jacobian iff its Kummer variety $K(A)\subset\mathbb{P}^{2^g-1}$ has a trisecant line (Welters' conjecture, in its strongest form).
- **Andreotti–Mayer (1967)** gave a characterization "up to extra components" via the dimension of the singular locus of $\Theta$.

<div class="myth" markdown="1">
"The Schottky–Jung relations cut out exactly $\mathcal{J}_g$." They define a locus containing $\mathcal{J}_g$; whether it equals $\mathcal{J}_g$ (beyond small genus) is a known subtle question, discussed in Grushevsky's survey.
</div>

### Further reading
- Farkas, "Schottky–Jung theory" (1989); Farkas–Rauch (1970); Farkas (1970), above.
- Grushevsky, "The Schottky problem" (2012), [doi:10.1017/9781139032766.007](https://doi.org/10.1017/9781139032766.007).
- Mumford, *Tata Lectures on Theta II* (2007), [doi:10.1007/978-0-8176-4578-6](https://doi.org/10.1007/978-0-8176-4578-6).
