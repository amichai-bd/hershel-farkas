---
layout: topic
title: Farkas–Kra Identities
---
# Farkas–Kra Partition Identities

## Non-technical
A **partition** splits a number into a sum of whole numbers: $4 = 3+1 = 2+2 = 2+1+1 = 1+1+1+1$.

Now a game. Take the number 18 and split it into *different even* numbers: $16+2$, $12+4+2$, and so on. Take 19 and split it into *different odd* numbers: $15+3+1$, etc. One twist: multiples of 7 come in two colors, say red 14 and blue 14, and they count as different. Count the ways for 18 and for 19. Both are **9**. Try 20 and 21, or 200 and 201: the two counts always match. That is the Farkas–Kra theorem.

The surprise is *why*: Farkas and Kra discovered it not by counting, but by studying the geometry of theta functions on surfaces. Mathematicians then spent years looking for a direct "matching" proof (Warnaar 2005; Kim 2009).

## Somewhat technical
**Theorem (Farkas–Kra).** Consider positive integers where multiples of 7 occur in two copies, $7k$ and $7k'$. Let $E(n)$ be the number of partitions of $2n$ into distinct even parts and $O(n)$ the number of partitions of $2n+1$ into distinct odd parts. Then $E(n)=O(n)$ for all $n$. (Statement as given in Warnaar 2005, citing Farkas–Kra 1999/2000 and their book, Ch. 7.)

**Worked example** ($n=9$, from Warnaar): the 9 partitions of 18 are
(18), (16, 2), (14, 4), (14′, 4), (12, 6), (12, 4, 2), (10, 8), (10, 6, 2), (8, 6, 4).

Check it yourself for any $n$:

<div class="viz" data-viz="farkaskra"></div>

## Engineers
Encode each counting rule as a **generating function**: the coefficient of $q^n$ counts partitions of $n$. Distinct parts from a set $P$ give $\prod_{p\in P}(1+q^p)$; a part in two copies contributes the factor twice. So
$$\sum_n E(n)q^{2n}=\prod_{k\ge1}(1+q^{2k})\prod_{k\ge1}(1+q^{14k}),\qquad O(n)=[q^{2n+1}]\prod_{k\ge1}(1+q^{2k-1})\prod_{k\ge1}(1+q^{7(2k-1)}).$$
(The second product also has even powers, from an even number of odd parts; only its odd coefficients matter.)
The widget above computes both with this dynamic-programming loop (each factor $(1+q^p)$ is a 0/1-knapsack step):

```
def distinct(parts, N):            # coefficients of prod (1 + q^p)
    c = [1] + [0]*N
    for p in parts:
        for k in range(N, p-1, -1):
            c[k] += c[k-p]
    return c
```

Equality of the two series up to $q^{2N+1}$ is a fast numerical check; the theorem says it holds forever. Farkas and Kra proved it via an identity among theta constants rather than by brute force.

## Scientists
Partition generating functions are partition functions in the statistical-mechanics sense: $\prod(1+q^p)$ is the partition function of free fermionic modes with energies $p$ (each level empty or filled once), with $q=e^{-\beta}$. "Distinct parts" = Pauli exclusion; "two copies of multiples of 7" = a doubly degenerate level. The theorem says the even-sector and odd-sector fermion partition functions agree level by level. Jacobi's triple product, the fermion–boson correspondence behind such identities, links them to theta functions. <span class="todo">TODO: add a cited source connecting the Farkas–Kra identities specifically to physics, if one exists.</span>

## Mathematicians
**Theorem 1.1** in Warnaar ("A generalization of the Farkas and Kra partition theorem for modulus 7", *J. Combin. Theory Ser. A* 110 (2005), [doi:10.1016/j.jcta.2004.08.008](https://doi.org/10.1016/j.jcta.2004.08.008)) states the result above, attributed to Farkas–Kra (Contemp. Math. 251, [doi:10.1090/conm/251/03870](https://doi.org/10.1090/conm/251/03870); Contemp. Math. 240, [doi:10.1090/conm/240/03576](https://doi.org/10.1090/conm/240/03576), [doi:10.1090/conm/240/03577](https://doi.org/10.1090/conm/240/03577); book GSM 37, Ch. 7). Equivalently, in $q$-Pochhammer notation, with $F(q)=(-q;q^2)_\infty(-q^{7};q^{14})_\infty$, the theorem says
$$q\,(-q^2;q^2)_\infty\,(-q^{14};q^{14})_\infty=\tfrac12\big(F(q)-F(-q)\big),$$
i.e. it equals the odd part of $F$ (distinct odd parts can also sum to even numbers; those terms are discarded).
which Farkas–Kra derive from a theta-constant identity at levels $\tau$ and $7\tau$ (Warnaar §1 recalls it). <span class="todo">TODO: transcribe that theta-constant identity exactly from Warnaar's PDF / Farkas–Kra GSM 37 Ch. 4.</span>

**Follow-up work (verified):**
- S. O. Warnaar (2005), above: obtains it as a specialization of a general $q$-series identity without reference to the modulus 7, giving analogues for other moduli (e.g. $m=5$ with numbers $\not\equiv\pm1 \pmod 5$ doubled). Not bijective.
- S. Kim, "Bijective proofs of partition identities arising from modular equations", *J. Combin. Theory Ser. A* (2009), [doi:10.1016/j.jcta.2008.11.002](https://doi.org/10.1016/j.jcta.2008.11.002): first bijective proof.
- C. Sandon, F. Zanello, "Warnaar's bijection and colored partition identities, I", [arXiv:1112.2637](https://arxiv.org/abs/1112.2637): places it among the five Schröter–Russell–Ramanujan type colored identities (moduli 3, 5, 7, 11, 23; cf. Berndt).
