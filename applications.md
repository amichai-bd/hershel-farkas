---
layout: default
title: Applications
pageclass: apps
---
# Applications

Riemann surfaces, theta functions and modular forms, the fields Hershel Farkas works in, turn up well outside pure mathematics. Each area below has the same five audience tabs as the rest of the site (pick one and every section switches), a **path** showing how it connects to his fields, and citations checked against Crossref/doi.org.

A note on honesty: most of these are applications of the *fields*, not of a particular Farkas paper. Where a work actually cites his papers or books, it is listed under [Works that cite Farkas](#citing), based on the OpenAlex citation index.

<div class="cards app-map">
<a class="card" href="#integrable"><span class="card-icon" aria-hidden="true">〰</span><h3>Waves &amp; solitons</h3><p>KdV, KP, ocean waves, optical fibers</p></a>
<a class="card" href="#strings"><span class="card-icon" aria-hidden="true">∿</span><h3>String theory &amp; CFT</h3><p>Genus expansion, partition functions</p></a>
<a class="card" href="#crypto"><span class="card-icon" aria-hidden="true">🔐</span><h3>Cryptography</h3><p>Elliptic &amp; genus-2 curves, pairings</p></a>
<a class="card" href="#codes"><span class="card-icon" aria-hidden="true">⌗</span><h3>Coding theory</h3><p>Goppa / AG codes</p></a>
<a class="card" href="#numbers"><span class="card-icon" aria-hidden="true">∑</span><h3>Number theory</h3><p>Partitions, q-series, Ramanujan</p></a>
<a class="card" href="#statmech"><span class="card-icon" aria-hidden="true">⬢</span><h3>Statistical mechanics</h3><p>Hard hexagons, Rogers–Ramanujan</p></a>
<a class="card" href="#numerics"><span class="card-icon" aria-hidden="true">⌨</span><h3>Computation</h3><p>Theta functions &amp; period matrices in software</p></a>
</div>

<section class="app" id="integrable" markdown="1">
## 〰 Integrable systems: KdV, KP and solitons

<p class="path"><strong>Path:</strong> Riemann surface (hyperelliptic curve) → its period matrix → Riemann theta function → exact wave solutions of KdV/KP → solitons in water and in optical fibers. The <a href="explanations/schottky-problem">Schottky problem</a> runs the other way: KP solutions characterize which period matrices come from surfaces.</p>

<div data-layers markdown="1">
### Non-technical
In 1834 John Scott Russell followed a single hump of water along a canal for miles: it didn't spread out or break. Such lonely waves, **solitons**, turn out to be described by a famous equation (KdV). Its most general periodic, wavy solutions are built from theta functions on surfaces with holes: one hole per independent wave pattern. Today the same ideas help send data down optical fibers as pulses of light that keep their shape.

### Somewhat technical
The Korteweg–de Vries (KdV) equation $u_t+6uu_x+u_{xxx}=0$ models shallow-water waves. Zabusky and Kruskal (1965) saw in computer experiments that its pulses pass through each other unchanged and coined the word "soliton"; Gardner–Greene–Kruskal–Miura (1967) found the exact solution method (inverse scattering). Periodic solutions with $g$ independent phases are written with the theta function of a genus-$g$ surface (Its–Matveev 1975). Watch two solitons collide:

<div class="viz" data-viz="kdv"></div>

### Engineers
Think of a theta-function KdV solution as a *nonlinear Fourier series*: instead of sines, the building blocks are $g$ interacting cnoidal waves, and the "spectrum" is a hyperelliptic curve. Osborne's book develops exactly this for ocean data, writing Riemann theta functions as ordinary Fourier series so they can be computed and applied to ocean-wave data. In fiber optics, the nonlinear Schrödinger equation (also integrable) supports light solitons: predicted by Hasegawa–Tappert (1973), observed by Mollenauer–Stolen–Gordon (1980).

### Scientists
For KdV, $u(x,t)=2\partial_x^2\log\theta(Ux+Wt+z\mid\tau)+c$, with $\tau$ the period matrix of the spectral curve $y^2=\prod_{j=1}^{2g+1}(\lambda-\lambda_j)$ whose branch points are the band edges of the periodic Schrödinger operator (Its–Matveev 1975). Pinching cycles of the curve degenerates $\theta$ into a finite sum of exponentials: the $N$-soliton. KP, $(\,u_t+6uu_x+u_{xxx})_x+3\sigma^2u_{yy}=0$, extends this to 2+1 dimensions; Osborne treats its periodic solutions for ocean waves. Dubrovin's survey (1981) is the standard physics-facing account and cites Farkas–Rauch.

### Mathematicians
Finite-gap theory: a compact Riemann surface $X$ with a point $P_\infty$ and local parameter gives Baker–Akhiezer functions and quasi-periodic KP solutions through $\theta$ on $J(X)$ (Krichever's construction). Conversely Shiota (1986) proved Novikov's conjecture: an indecomposable ppav is a Jacobian iff its theta function gives a KP solution. Taimanov's survey (1997) links secants of abelian varieties, theta functions and soliton equations, which is where Fay's trisecant formula (Farkas 1984; Farkas 1992) enters.
</div>

**Sources**
- N. J. Zabusky, M. D. Kruskal, "Interaction of 'solitons' in a collisionless plasma…", *Phys. Rev. Lett.* 15 (1965). [doi:10.1103/PhysRevLett.15.240](https://doi.org/10.1103/PhysRevLett.15.240)
- C. S. Gardner, J. M. Greene, M. D. Kruskal, R. M. Miura, "Method for solving the Korteweg–deVries equation", *Phys. Rev. Lett.* 19 (1967). [doi:10.1103/PhysRevLett.19.1095](https://doi.org/10.1103/PhysRevLett.19.1095)
- A. R. Its, V. B. Matveev, *Theor. Math. Phys.* (1975). [doi:10.1007/BF01038218](https://doi.org/10.1007/BF01038218)
- B. A. Dubrovin, "Theta functions and non-linear equations", *Russian Math. Surveys* 36 (1981). [doi:10.1070/rm1981v036n02abeh002596](https://doi.org/10.1070/rm1981v036n02abeh002596)
- T. Shiota, *Invent. Math.* 83 (1986). [doi:10.1007/BF01388967](https://doi.org/10.1007/BF01388967)
- I. A. Taimanov, "Secants of abelian varieties, theta functions, and soliton equations", *Russian Math. Surveys* (1997). [doi:10.1070/rm1997v052n01abeh001743](https://doi.org/10.1070/rm1997v052n01abeh001743)
- A. R. Osborne, *Nonlinear Ocean Waves and the Inverse Scattering Transform*, International Geophysics 97 (2010): chapters "Riemann Theta Functions" [doi:10.1016/s0074-6142(10)97008-3](https://doi.org/10.1016/s0074-6142(10)97008-3), "Riemann Theta Functions as Ordinary Fourier Series" [doi:10.1016/s0074-6142(10)97009-5](https://doi.org/10.1016/s0074-6142(10)97009-5), "The Periodic Kadomtsev–Petviashvili Equation" [doi:10.1016/s0074-6142(10)97011-3](https://doi.org/10.1016/s0074-6142(10)97011-3)
- A. Hasegawa, F. Tappert, *Appl. Phys. Lett.* 23 (1973). [doi:10.1063/1.1654836](https://doi.org/10.1063/1.1654836)
- L. F. Mollenauer, R. H. Stolen, J. P. Gordon, *Phys. Rev. Lett.* 45 (1980). [doi:10.1103/PhysRevLett.45.1095](https://doi.org/10.1103/PhysRevLett.45.1095)
- J. Frauendiener, C. Klein, "Hyperelliptic theta-functions and spectral methods: KdV and KP solutions", *Lett. Math. Phys.* 76 (2006). [doi:10.1007/s11005-006-0068-4](https://doi.org/10.1007/s11005-006-0068-4)
</section>

<section class="app" id="strings" markdown="1">
## ∿ String theory, partition functions and conformal field theory

<p class="path"><strong>Path:</strong> Riemann surface = string world-sheet → sum over genus (loops) → integrals over moduli space → integrands built from theta constants and modular forms → modular invariance constrains the theory.</p>

<div data-layers markdown="1">
### Non-technical
In string theory a particle is a tiny loop of string; as it moves it sweeps out a surface. When strings split and rejoin, that surface gets holes. Physicists compute by adding up contributions from surfaces with 0, 1, 2, … holes, which means they need exactly the tools Farkas studied: surfaces with many holes and the theta functions that live on them.

### Somewhat technical
A one-loop (genus-1) string world-sheet is a torus, described by one number $\tau$. Because many $\tau$'s describe the same torus (they differ by the modular group, see [Modular forms](explanations/modular-forms)), the physics must be *modular invariant*. At genus $g$ the torus is replaced by a genus-$g$ surface and $\tau$ by a $g\times g$ period matrix; the formulas use theta functions with characteristics, one per "spin structure".

### Engineers
The bookkeeping is like a perturbation series where term $g$ is an integral over all shapes of genus-$g$ surfaces (dimension $3g-3$ complex). The integrand is assembled from theta constants $\theta[\delta](0,\tau)$ for each of the $2^{2g}$ characteristics $\delta$, and the integral must not depend on how you labelled the cycles: a symmetry check under $Sp(2g,\mathbb{Z})$, analogous to requiring a result to be basis-independent.

### Scientists
Two-dimensional conformal field theory (Belavin–Polyakov–Zamolodchikov 1984) is the world-sheet theory. Alvarez-Gaumé–Moore–Vafa (1986) used theta functions and modular invariance on higher-genus surfaces to study string partition functions; Dijkgraaf–Verlinde–Verlinde (1988) treated $c=1$ CFTs on Riemann surfaces; D'Hoker–Phong reviewed the geometry of string perturbation theory (1988) and derived two-loop superstring formulas (2001). Alvarez-Gaumé–Moore–Vafa, Dijkgraaf–Verlinde–Verlinde and the 1988 D'Hoker–Phong review all cite Farkas–Kra's *Riemann Surfaces* (per OpenAlex).

### Mathematicians
The $g$-loop bosonic string measure is a section over $\mathcal{M}_g$ (Belavin–Knizhnik/Mumford isomorphism), and chiral superstring measures are expressed via $\theta[\delta](0,\tau)$, with the Schottky problem re-entering at $g\ge4$ because the formulas live on $\mathcal{A}_g$ but must restrict correctly to $\mathcal{J}_g$. Grushevsky–Salvati Manni (2008, "Jacobians with a vanishing theta-null in genus 4") and Matone–Volpato (2011) are examples in this line that cite Farkas–Rauch (1970).
</div>

**Sources**
- A. A. Belavin, A. M. Polyakov, A. B. Zamolodchikov, *Nucl. Phys. B* 241 (1984). [doi:10.1016/0550-3213(84)90052-X](https://doi.org/10.1016/0550-3213(84)90052-X)
- L. Alvarez-Gaumé, G. Moore, C. Vafa, "Theta functions, modular invariance, and strings", *Comm. Math. Phys.* 106 (1986). [doi:10.1007/BF01210925](https://doi.org/10.1007/BF01210925)
- R. Dijkgraaf, E. Verlinde, H. Verlinde, "c = 1 conformal field theories on Riemann surfaces", *Comm. Math. Phys.* (1988). [doi:10.1007/bf01224132](https://doi.org/10.1007/bf01224132)
- E. D'Hoker, D. H. Phong, "The geometry of string perturbation theory", *Rev. Mod. Phys.* 60 (1988). [doi:10.1103/revmodphys.60.917](https://doi.org/10.1103/revmodphys.60.917); "Two-loop superstrings I", [arXiv:hep-th/0110247](https://arxiv.org/abs/hep-th/0110247)
- S. Grushevsky, R. Salvati Manni, *Israel J. Math.* (2008). [doi:10.1007/s11856-008-0031-4](https://doi.org/10.1007/s11856-008-0031-4)
- M. Matone, R. Volpato, *J. Math. Phys.* (2011). [doi:10.1063/1.3653550](https://doi.org/10.1063/1.3653550)
</section>

<section class="app" id="crypto" markdown="1">
## 🔐 Cryptography: elliptic curves, genus-2 Jacobians and pairings

<p class="path"><strong>Path:</strong> genus-1 Riemann surface = elliptic curve → its points form a group (the Jacobian) → do the same algebra over a finite field → hard discrete-log problem → public-key cryptography. Genus 2: the Jacobian of a genus-2 curve, with fast arithmetic from theta functions.</p>

<div data-layers markdown="1">
### Non-technical
An elliptic curve is the "doughnut" Riemann surface written as an equation. Its points can be "added" by a geometric rule, and if you do the arithmetic on a clock (numbers wrap around), adding a point to itself many times is easy, but working out *how many times* from the result is extremely hard. That one-way street secures much of today's internet traffic. Try the arithmetic below on a tiny curve.

### Somewhat technical
Points of $E: y^2=x^3+ax+b$ form a group: the line through $P$ and $Q$ meets $E$ in a third point, reflect it to get $P+Q$. Over $\mathbb{C}$ this group is exactly the torus $\mathbb{C}/\Lambda$, and addition is just adding complex numbers modulo the lattice. Over a finite field $\mathbb{F}_p$, Miller (1985) and Koblitz (1987) proposed using it for cryptography.

<div class="viz" data-viz="ecc"></div>

### Engineers
Slope $\lambda=(y_Q-y_P)/(x_Q-x_P)$ (or $(3x_P^2+a)/(2y_P)$ when doubling), $x_R=\lambda^2-x_P-x_Q$, $y_R=\lambda(x_P-x_R)-y_P$, all mod $p$, with division done by modular inverse. Scalar multiplication $kP$ costs $O(\log k)$ via double-and-add; inverting it is the ECDLP. **Genus 2:** points are replaced by divisor classes on the Jacobian of $y^2=f(x)$, $\deg f=5$ or $6$, added with Cantor's algorithm (1987); Koblitz proposed hyperelliptic cryptosystems (1989). Gaudry (2007) showed the Kummer surface arithmetic can be done with **theta functions**, giving very fast genus-2 scalar multiplication. **Pairings** (e.g. the Weil pairing) map pairs of points to a finite-field element bilinearly; Boneh–Franklin (2001) built identity-based encryption from them.

### Scientists
Same structure physicists meet on the torus: the group law on $E(\mathbb{C})$ is translation on $\mathbb{C}/\Lambda$, and theta functions are the coordinates in which that translation is algebraic. Over finite fields the "torus" is a finite abelian group of size about $p$ (Hasse bound $|\#E-(p+1)|\le2\sqrt p$); its size and structure are what security depends on.

### Mathematicians
For a curve $C/\mathbb{F}_q$ of genus $g$, $J_C(\mathbb{F}_q)$ is a finite abelian group used for DLP-based schemes; for $g=2$, the Kummer surface $J_C/\pm1$ maps to $\mathbb{P}^3$ via the four theta functions of level 2 (second-order theta functions), and Gaudry's formulas are pseudo-additions in those coordinates. Constructing genus-2 curves with CM (Goren–Lauter 2011, citing Farkas–Kra) and complete addition laws on abelian varieties (Arène–Kohel–Ritzenthaler 2012, citing Farkas–Kra) are examples tying the theory to cryptographic curve generation.
</div>

**Sources**
- V. S. Miller, "Use of elliptic curves in cryptography", CRYPTO '85, LNCS 218. [doi:10.1007/3-540-39799-X_31](https://doi.org/10.1007/3-540-39799-X_31)
- N. Koblitz, "Elliptic curve cryptosystems", *Math. Comp.* 48 (1987). [doi:10.1090/S0025-5718-1987-0866109-5](https://doi.org/10.1090/S0025-5718-1987-0866109-5); "Hyperelliptic cryptosystems", *J. Cryptology* 1 (1989). [doi:10.1007/BF02252872](https://doi.org/10.1007/BF02252872)
- D. G. Cantor, "Computing in the Jacobian of a hyperelliptic curve", *Math. Comp.* 48 (1987). [doi:10.1090/S0025-5718-1987-0866101-0](https://doi.org/10.1090/S0025-5718-1987-0866101-0)
- P. Gaudry, "Fast genus 2 arithmetic based on Theta functions", *J. Math. Cryptology* 1 (2007). [doi:10.1515/jmc.2007.012](https://doi.org/10.1515/jmc.2007.012)
- D. Boneh, M. Franklin, "Identity-based encryption from the Weil pairing", CRYPTO 2001, LNCS. [doi:10.1007/3-540-44647-8_13](https://doi.org/10.1007/3-540-44647-8_13)
- E. Z. Goren, K. Lauter, "Genus 2 curves with complex multiplication", *IMRN* (2011). [doi:10.1093/imrn/rnr052](https://doi.org/10.1093/imrn/rnr052)
- C. Arène, D. Kohel, C. Ritzenthaler, "Complete addition laws on abelian varieties", *LMS J. Comput. Math.* (2012). [doi:10.1112/s1461157012001027](https://doi.org/10.1112/s1461157012001027)
</section>

<section class="app" id="codes" markdown="1">
## ⌗ Coding theory: Goppa and algebraic-geometry codes

<p class="path"><strong>Path:</strong> algebraic curve (a Riemann surface, but over a finite field) → spaces of functions with bounded poles (Riemann–Roch) → evaluate them at points → error-correcting code whose quality is controlled by the genus. Modular curves (see <a href="explanations/modular-forms">Modular forms</a>) give the best families.</p>

<div data-layers markdown="1">
### Non-technical
When you send data through a noisy channel, you add clever redundancy so mistakes can be fixed. Goppa's idea: choose the redundancy by evaluating functions on a curve. Curves with many points but few holes give the most efficient codes, and some of the best come from modular curves, the very surfaces Farkas and Kra drew explicit pictures of.

### Somewhat technical
Reed–Solomon codes evaluate polynomials (functions on a line, genus 0) at points. Goppa codes evaluate functions on a curve of genus $g$. Riemann–Roch says how many functions are available, which fixes the code's dimension, and the number of zeros a function can have bounds its distance.

### Engineers
Code $C(D,G)=\{(f(P_1),\dots,f(P_n)) : f\in L(G)\}$ over $\mathbb{F}_q$. With $2g-2<\deg G<n$: length $n$, dimension $k=\deg G-g+1$, minimum distance $d\ge n-\deg G$, so $k+d\ge n+1-g$. The genus is exactly the "penalty" versus the Singleton bound. Tsfasman–Vlăduţ–Zink (1982) used modular and Shimura curves, which have many rational points relative to $g$, to beat the Gilbert–Varshamov bound for $q\ge49$ square. Decoding uses the Feng–Rao bound and Weierstrass semigroups (Bras-Amorós 2004, citing Farkas–Kra).

### Scientists
Think of the genus as a "defect" in the code's efficiency, and of curves with many points per genus as optimal resources; the asymptotic Drinfeld–Vlăduţ bound $N/g\le\sqrt q-1$ is what modular curves attain.

### Mathematicians
For a smooth projective curve $X/\mathbb{F}_q$, divisors $D=P_1+\dots+P_n$ and $G$ with disjoint supports, $C_L(D,G)$ has $k=\ell(G)-\ell(G-D)$ and $d\ge n-\deg G$. Weierstrass gap sequences (the same Weierstrass points as in Farkas's early papers) control the order bound on $d$ used by Feng–Rao decoding.
</div>

**Sources**
- M. A. Tsfasman, S. G. Vlăduţ, T. Zink, *Math. Nachr.* 109 (1982). [doi:10.1002/mana.19821090103](https://doi.org/10.1002/mana.19821090103)
- V. D. Goppa, *Geometry and Codes*, Mathematics and Its Applications (1988), ch. "Algebraic curves". [doi:10.1007/978-94-015-6870-8_3](https://doi.org/10.1007/978-94-015-6870-8_3). <span class="todo">TODO: Goppa's original 1981 Doklady note (no DOI found).</span>
- M. Bras-Amorós, "Acute semigroups, the order bound on the minimum distance, and the Feng–Rao improvements", *IEEE Trans. Inf. Theory* (2004). [doi:10.1109/tit.2004.828104](https://doi.org/10.1109/tit.2004.828104)
</section>

<section class="app" id="numbers" markdown="1">
## ∑ Number theory: partitions, modular forms, q-series and Ramanujan

<p class="path"><strong>Path:</strong> theta constants on modular curves → identities among them (Farkas–Kra) → expand as q-series → statements about partitions, sums of squares and triangular numbers. This is Farkas's own application of his geometry.</p>

<div data-layers markdown="1">
### Non-technical
Counting the ways to break a number into pieces sounds like a puzzle for children, but it hides deep patterns, many found by Ramanujan. Farkas and Kra discovered that identities between theta functions, coming from geometry, prove such patterns. Their modulus-7 theorem is one example you can check on the [Farkas–Kra page](explanations/farkas-kra-identities).

### Somewhat technical
Generating functions translate counting into algebra: $\sum p(n)q^n=\prod 1/(1-q^n)$. Theta functions are such series, e.g. $\theta_3(0,q)^2=\sum r_2(n)q^n$ counts sums of two squares. An identity between theta functions is therefore an infinite family of counting statements.

### Engineers
Every identity here can be regression-tested: expand both sides to $q^N$ with integer arithmetic and compare coefficients. That's what the explorers on this site do; the proofs (via modular forms) guarantee the pattern holds for all $N$.

### Scientists
q-series appear as characters of conformal field theories and as partition functions (see the next section); the same Rogers–Ramanujan and theta identities appear on both sides.

### Mathematicians
Farkas–Kra derive identities among theta constants for $\Gamma(N)$ and apply them to Ramanujan-type partition identities and to sums of squares and triangular numbers (Contemp. Math. 211, 240, 251; *Ramanujan J.* 8 (2004), [doi:10.1007/s11139-004-0141-5](https://doi.org/10.1007/s11139-004-0141-5); "Sums of squares and triangular numbers", [doi:10.15852/ojac001.a.01](https://doi.org/10.15852/ojac001.a.01)). Pak's survey "Partition bijections" (2006) cites their book.
</div>

**Sources**
- S. O. Warnaar, *J. Combin. Theory A* 110 (2005). [doi:10.1016/j.jcta.2004.08.008](https://doi.org/10.1016/j.jcta.2004.08.008)
- S. Kim, *J. Combin. Theory A* (2009). [doi:10.1016/j.jcta.2008.11.002](https://doi.org/10.1016/j.jcta.2008.11.002)
- I. Pak, "Partition bijections, a survey", *Ramanujan J.* (2006). [doi:10.1007/s11139-006-9576-1](https://doi.org/10.1007/s11139-006-9576-1)
- S. Cooper, *Bull. Austral. Math. Soc.* (2005), citing Farkas–Kra. [doi:10.1017/s000497270003834x](https://doi.org/10.1017/s000497270003834x)
</section>

<section class="app" id="statmech" markdown="1">
## ⬢ Statistical mechanics: hard hexagons and Rogers–Ramanujan

<p class="path"><strong>Path:</strong> q-series and theta-function identities (number theory) → exact partition functions of lattice models → phase transitions computed exactly.</p>

<div data-layers markdown="1">
### Non-technical
Imagine coins on a honeycomb grid that are not allowed to touch. How crowded can it get, and when does the pattern suddenly snap into order? Rodney Baxter solved this "hard hexagon" model exactly in 1980, and the answer turned out to be two famous identities of Rogers and Ramanujan from the early 1900s.

### Somewhat technical
The first Rogers–Ramanujan identity: the number of partitions of $n$ into parts that differ by at least 2 equals the number of partitions into parts $\equiv\pm1\pmod5$. Check it:

<div class="viz" data-viz="rogers"></div>

### Engineers
In generating-function form, $\sum_{k\ge0}\frac{q^{k^2}}{(1-q)\cdots(1-q^k)}=\prod_{n\equiv\pm1 (5)}\frac1{1-q^n}$. The left side is a "sum over configurations with an exclusion rule" (like the no-touching rule); the right side is a simple product, which is what makes the model exactly solvable.

### Scientists
Baxter's exact solution (1980) expresses the hard-hexagon order parameters through Rogers–Ramanujan-type q-series; Andrews–Baxter–Forrester (1984) generalized this to the eight-vertex SOS models with generalized Rogers–Ramanujan identities. The nome $q$ is a function of the activity, and modular properties of the q-series give the critical behaviour.

### Mathematicians
Rogers–Ramanujan functions $G(q),H(q)$ are, up to a power of $q$, modular functions for $\Gamma(5)$, and their ratio is the Rogers–Ramanujan continued fraction, a Hauptmodul for $\Gamma(5)$ (cf. Duke, "Continued fractions and modular functions", *Bull. AMS* 2005, which cites Farkas–Kra). This is the same modular-curve setting as Farkas–Kra's work on $\Gamma(N)$.
</div>

**Sources**
- R. J. Baxter, "Hard hexagons: exact solution", *J. Phys. A* 13 (1980). [doi:10.1088/0305-4470/13/3/007](https://doi.org/10.1088/0305-4470/13/3/007)
- G. E. Andrews, R. J. Baxter, P. J. Forrester, *J. Stat. Phys.* 35 (1984). [doi:10.1007/BF01014383](https://doi.org/10.1007/BF01014383)
- W. Duke, *Bull. AMS* (2005). [doi:10.1090/s0273-0979-05-01047-5](https://doi.org/10.1090/s0273-0979-05-01047-5)
</section>

<section class="app" id="numerics" markdown="1">
## ⌨ Computation: theta functions and period matrices in software

<p class="path"><strong>Path:</strong> plane algebraic curve → numerically integrate differentials along cycles → period matrix $\tau$ → evaluate $\theta(z,\tau)$ to guaranteed accuracy → use in physics (KdV/KP solutions), cryptography and number theory.</p>

<div data-layers markdown="1">
### Non-technical
To use theta functions in practice, someone has to compute them, quickly and accurately. Researchers have built algorithms and free software that take the equation of a curve, work out its "fingerprint" (period matrix), and evaluate its theta function.

### Somewhat technical
Two steps: (1) compute the period matrix by integrating holomorphic differentials around the $a$ and $b$ cycles (Deconinck–van Hoeij 2001); (2) evaluate the theta series, truncated to a region of the integer lattice chosen so the error is below a target (Deconinck et al. 2004).

### Engineers
Deconinck–Heil–Bobenko–van Hoeij–Schmies (2004) split $\theta$ into an exponential "oscillatory" part and a bounded "theta-like" sum, and bound the truncation error using the shortest lattice vector of $\operatorname{Im}\tau$ (lattice reduction again, as in the [modular group demo](explanations/modular-forms)). Implementations: Swierczewski–Deconinck in Sage (2013) and the open-source [abelfunctions](https://github.com/abelfunctions/abelfunctions) library; SageMath's [`RiemannSurface`](https://doc.sagemath.org/html/en/reference/curves/sage/schemes/riemann_surfaces/riemann_surface.html) computes period matrices with certified precision (Bruin–Sijsling–Zotine 2019); Maple's [`algcurves`](https://www.maplesoft.com/support/help/maple/view.aspx?path=algcurves) package includes [`periodmatrix`](https://www.maplesoft.com/support/help/maple/view.aspx?path=algcurves/periodmatrix). Frauendiener–Klein (2004, 2006) use spectral methods for hyperelliptic theta functions.

### Scientists
These tools make finite-gap solutions practical: given band edges (branch points), compute $\tau$, $U$, $W$, then $u=2\partial_x^2\log\theta$ numerically, and compare with experiments or simulations (Frauendiener–Klein 2006 do this for KdV and KP).

### Mathematicians
Certified period matrices enable rigorous numerical computation of endomorphism rings of Jacobians (Bruin–Sijsling–Zotine 2019) and, via theta constants, of invariants of curves (e.g. CM genus-2 curves). The theoretical input is classical: Riemann bilinear relations ensure $\operatorname{Im}\tau>0$, and Siegel reduction shortens the lattice sums (cf. Farkas–Kra, *Riemann Surfaces*, cited by Deconinck–van Hoeij).
</div>

**Sources**
- B. Deconinck, M. van Hoeij, "Computing Riemann matrices of algebraic curves", *Physica D* 152–153 (2001). [doi:10.1016/S0167-2789(01)00156-7](https://doi.org/10.1016/S0167-2789(01)00156-7)
- B. Deconinck, M. Heil, A. Bobenko, M. van Hoeij, M. Schmies, "Computing Riemann theta functions", *Math. Comp.* 73 (2004). [doi:10.1090/S0025-5718-03-01609-0](https://doi.org/10.1090/S0025-5718-03-01609-0)
- C. Swierczewski, B. Deconinck, "Computing Riemann theta functions in Sage with applications", *Math. Comput. Simulation* (2013). [doi:10.1016/j.matcom.2013.04.018](https://doi.org/10.1016/j.matcom.2013.04.018)
- N. Bruin, J. Sijsling, A. Zotine, "Numerical computation of endomorphism rings of Jacobians", ANTS XIII, *Open Book Series* 2 (2019). [doi:10.2140/obs.2019.2.155](https://doi.org/10.2140/obs.2019.2.155)
- J. Frauendiener, C. Klein, *J. Comput. Appl. Math.* 167 (2004). [doi:10.1016/j.cam.2003.10.003](https://doi.org/10.1016/j.cam.2003.10.003)
- NIST DLMF, [Ch. 20 Theta Functions](https://dlmf.nist.gov/20) and [Ch. 21 Multidimensional Theta Functions](https://dlmf.nist.gov/21)
</section>

<section class="app" id="citing" markdown="1">
## 📚 Works that cite Farkas

From the [OpenAlex](https://openalex.org) citation index (retrieved 2026-10-13). Counts: *Riemann Surfaces* 1980 ed. ≈481 citations, 1992 ed. ≈497; *Theta Constants, Riemann Surfaces and the Modular Group* ≈137; Farkas–Rauch, "Period relations of Schottky type" (1970) ≈44. A selection of applied and physics works:

| Field | Work | Cites |
|---|---|---|
| String theory | Alvarez-Gaumé, Moore, Vafa, *Comm. Math. Phys.* 1986 [doi](https://doi.org/10.1007/bf01210925) | Riemann Surfaces |
| String theory | D'Hoker, Phong, *Rev. Mod. Phys.* 1988 [doi](https://doi.org/10.1103/revmodphys.60.917) | Riemann Surfaces |
| CFT | Dijkgraaf, Verlinde, Verlinde, *Comm. Math. Phys.* 1988 [doi](https://doi.org/10.1007/bf01224132) | Riemann Surfaces |
| Topological strings | Aganagic, Bouchard, Klemm, "Topological strings and (almost) modular forms", *Comm. Math. Phys.* 2007 [doi](https://doi.org/10.1007/s00220-007-0383-3) | Theta Constants |
| Particle physics | Novichkov, Penedo, Petcov, "Modular A5 symmetry for flavour model building", *JHEP* 2019 [doi](https://doi.org/10.1007/jhep04(2019)174) | Theta Constants |
| Black holes / qubits | Lévay, "Two-center black holes, qubits, and elliptic curves", *Phys. Rev. D* 2011 [doi](https://doi.org/10.1103/physrevd.84.025023) | Theta Constants |
| Feynman integrals | Duhr, Porkert, Stawinski, "Canonical differential equations beyond genus one", *JHEP* 2025 [doi](https://doi.org/10.1007/jhep02(2025)014) | Riemann Surfaces |
| Random matrices | Bleher, Its, *Comm. Pure Appl. Math.* 2003 [doi](https://doi.org/10.1002/cpa.10065) | Riemann Surfaces |
| Topological recursion | Eynard, Orantin, *J. Phys. A* 2009 [doi](https://doi.org/10.1088/1751-8113/42/29/293001) | Riemann Surfaces |
| Nonlinear optics / NLS | Tovbis, Venakides, Zhou, *Comm. Pure Appl. Math.* 2004 [doi](https://doi.org/10.1002/cpa.20024); Biondini, Mantzavinos 2017 [doi](https://doi.org/10.1002/cpa.21701) | Riemann Surfaces |
| Solitons | Fan, Hon, *Phys. Rev. E* 2008 [doi](https://doi.org/10.1103/physreve.78.036607) | Riemann Surfaces |
| Integrable systems | Dubrovin, *Russian Math. Surveys* 1981 [doi](https://doi.org/10.1070/rm1981v036n02abeh002596); Dubrovin, KP and period relations, 1982 [doi](https://doi.org/10.1070/im1982v019n02abeh001418) | Farkas–Rauch 1970 |
| Quantum entanglement | Gaur, "2-Rényi CCNR negativity of compact boson…", *JHEP* 2025 [doi](https://doi.org/10.1007/jhep08(2025)153) | Farkas–Rauch 1970 |
| Numerics | Deconinck, van Hoeij, *Physica D* 2001 [doi](https://doi.org/10.1016/s0167-2789(01)00156-7) | Riemann Surfaces |
| Cryptography | Goren, Lauter, *IMRN* 2011 [doi](https://doi.org/10.1093/imrn/rnr052); Arène, Kohel, Ritzenthaler 2012 [doi](https://doi.org/10.1112/s1461157012001027) | Riemann Surfaces |
| Coding theory | Bras-Amorós, *IEEE Trans. Inf. Theory* 2004 [doi](https://doi.org/10.1109/tit.2004.828104) | Riemann Surfaces |
| Computer graphics | Kälberer, Nieser, Polthier, "QuadCover: surface parameterization using branched coverings", *Comput. Graph. Forum* 2007 [doi](https://doi.org/10.1111/j.1467-8659.2007.01060.x) | Riemann Surfaces |

<span class="todo">TODO: Google Scholar / Semantic Scholar cross-check, and citations of the Farkas–Kra partition papers specifically.</span>
</section>
