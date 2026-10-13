---
layout: topic
title: The Schottky Problem
---
# The Schottky Problem

## Non-technical
Every surface with $g$ holes produces a table of numbers (its period matrix). But not every table that looks right comes from a surface. The Schottky problem asks: how can you tell which tables are genuine? It's like being handed a fingerprint and asking whether a real person has it.

## Somewhat technical
Period matrices live in $\mathfrak{H}_g$, of dimension $g(g+1)/2$, while surfaces of genus $g\ge2$ form a space of dimension $3g-3$. These agree for $g\le3$ but for $g\ge4$ the Jacobians form a proper subvariety. Schottky (1888) found the equation cutting it out for $g=4$. Describing it in general is the Schottky problem.

## Engineers
It's a validation problem. A symmetric $g\times g$ complex matrix with positive-definite imaginary part has $g(g+1)/2$ free entries; matrices that actually come from a surface have only $3g-3$ degrees of freedom (for $g \ge 2$). For $g=4$: $10$ parameters vs $9$, so valid matrices satisfy one hidden equation (Schottky's, 1888). For large $g$ the gap grows quadratically vs linearly, so "is this matrix a Jacobian's?" needs a test, the way a checksum separates valid codewords from arbitrary strings.

## Scientists
Remarkably, a physics equation solves it. Novikov conjectured, and Shiota proved (1986, [doi:10.1007/BF01388967](https://doi.org/10.1007/BF01388967)), that $\tau$ is a period matrix of a Jacobian iff $u = 2\partial_x^2\log\theta(Ux+Vy+Wt+z,\tau)$ solves the Kadomtsev–Petviashvili (KP) equation, a 2+1 dimensional generalization of KdV describing shallow-water waves. Krichever (2010, [doi:10.4007/annals.2010.172.485](https://doi.org/10.4007/annals.2010.172.485)) gave a sharper characterization through trisecants, tied to Fay's trisecant formula.

## Mathematicians
Schottky–Jung relations express theta constants of a Prym variety of an unramified double cover in terms of those of the Jacobian, producing candidate equations for the Jacobian locus; Farkas and Rauch developed these in *Ann. of Math.* (1970), and Farkas later surveyed the subject ("Schottky–Jung theory," Proc. Symp. Pure Math. 49, 1989). The problem was solved in a different form by Shiota (1986), proving Novikov's conjecture that $\tau$ is a Jacobian iff $\theta$ yields a KP equation solution; Krichever (2010) proved the trisecant characterization (Welters' conjecture), which connects to Fay's trisecant formula studied by Farkas (1984, 1992). See [Applications](../applications).
