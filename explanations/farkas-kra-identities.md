---
layout: topic
title: Farkas–Kra Identities
---
# Farkas–Kra Partition Identities

## Non-technical
A partition splits a number into a sum: 4 = 3+1 = 2+2 = 2+1+1 = 1+1+1+1. Sometimes two quite different ways of counting partitions always give the same answer, for every number, for reasons that are not at all obvious. Farkas and Kra found new such coincidences by looking at theta functions, objects from geometry, rather than by direct counting.

## Somewhat technical
Classic example (Euler): partitions into distinct parts are equinumerous with partitions into odd parts. Generating functions make this a product identity: $\prod(1+q^n)=\prod 1/(1-q^{2n-1})$. Theta functions are generating functions too, so identities between theta constants become identities about partitions.

## Engineers
Use generating functions as a computation: encode partitions as a power series, where the coefficient of $q^n$ counts partitions of $n$ with some property. Two counting rules agree for every $n$ exactly when their generating functions are equal. You can test such a claim by expanding both products to, say, $q^{200}$ and comparing coefficients:

```
def count_distinct(N):            # coefficients of prod (1+q^n)
    c = [1] + [0]*N
    for n in range(1, N+1):
        for k in range(N, n-1, -1): c[k] += c[k-n]
    return c
```

Farkas and Kra prove such equalities by recognizing both sides as theta constants and using identities between them, rather than by brute force.

## Scientists
Partition generating functions are partition functions in the statistical-mechanics sense: $\prod 1/(1-q^n)$ is the partition function of a bosonic oscillator tower with $q=e^{-\beta}$, and the Jacobi triple product identity relates fermionic and bosonic counts. Identities among theta constants therefore become equalities between counting functions, which is the mechanism Farkas–Kra exploit. <span class="todo">TODO: add a cited source connecting the Farkas–Kra identities specifically to physics, if one exists.</span>

## Mathematicians
In "Theta Constant Identities with Applications to Combinatorial Number Theory" (Contemp. Math. 211, 1997), "Ramanujan Partition Identities" and "A Function Theoretic Approach to the Ramanujan Partition Identities" (Contemp. Math. 240, 1999), and "Partitions and Theta Constant Identities" (Contemp. Math. 251, 2000), Farkas and Kra derived partition theorems from theta identities for $\Gamma(N)$. A well-known example is stated there. <span class="todo">TODO: state the exact theorem from the 1999/2000 paper (and from the user's photo) after checking the source text; do not paraphrase from memory.</span> <span class="todo">TODO: add later combinatorial proofs by other authors, with verified citations.</span>
