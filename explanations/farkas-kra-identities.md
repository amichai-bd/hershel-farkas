---
layout: topic
title: Farkas–Kra Identities
---
# Farkas–Kra Partition Identities

<div class="common" markdown="1">
## History in brief

- **1748 – Euler** (in *Introductio in analysin infinitorum*) proves that partitions into distinct parts are as numerous as partitions into odd parts, via $\prod(1+q^n)=\prod1/(1-q^{2n-1})$.
- **1829 – Jacobi**'s triple product identity turns theta functions into partition generating functions.
- **1893–94 – Rogers**, "Second memoir on the expansion of certain infinite products", *Proc. London Math. Soc.* 25 ([doi:10.1112/plms/s1-25.1.318](https://doi.org/10.1112/plms/s1-25.1.318)), contains the Rogers–Ramanujan identities, later rediscovered by Ramanujan.
- **Schröter, Russell, Ramanujan** found modular equations of degrees 3, 5, 7, 11, 23 of an unusually simple type; Berndt derived the corresponding colored partition identities (as recounted by Sandon–Zanello, [arXiv:1112.2637](https://arxiv.org/abs/1112.2637)).
- **1997–2001 – Farkas and Kra** derive partition theorems from theta constant identities on modular curves, including the modulus-7 theorem (below).
- **2005 – Warnaar** generalizes it ([doi:10.1016/j.jcta.2004.08.008](https://doi.org/10.1016/j.jcta.2004.08.008)); **2009 – Kim** gives the first bijective proof ([doi:10.1016/j.jcta.2008.11.002](https://doi.org/10.1016/j.jcta.2008.11.002)).
</div>

<div class="common farkas" markdown="1">
## Where Farkas comes in

This page is about his and Kra's own theorem. Papers (all with I. Kra):
- "Theta constant identities with applications to combinatorial number theory", Contemp. Math. 211 (1997), [doi:10.1090/conm/211/02822](https://doi.org/10.1090/conm/211/02822).
- "Ramanujan partition identities", Contemp. Math. 240 (1999), [doi:10.1090/conm/240/03576](https://doi.org/10.1090/conm/240/03576).
- "A function-theoretic approach to the Ramanujan partition identities with applications to combinatorial number theory", Contemp. Math. 240 (1999), [doi:10.1090/conm/240/03577](https://doi.org/10.1090/conm/240/03577).
- "On the quintuple product identity", *Proc. AMS* 127 (1999), [doi:10.1090/s0002-9939-99-04791-7](https://doi.org/10.1090/s0002-9939-99-04791-7).
- "Partitions and theta constant identities", Contemp. Math. 251 (2000), [doi:10.1090/conm/251/03870](https://doi.org/10.1090/conm/251/03870).
- Book chapters (GSM 37): "Partition theory: Ramanujan congruences" ([doi:10.1090/gsm/037/05](https://doi.org/10.1090/gsm/037/05)), "Identities related to partition functions" ([doi:10.1090/gsm/037/06](https://doi.org/10.1090/gsm/037/06)), "Combinatorial and number theoretic applications" ([doi:10.1090/gsm/037/07](https://doi.org/10.1090/gsm/037/07)), the chapter Warnaar cites for the theorem.

Related work by Farkas alone: "On an arithmetical function" (*Ramanujan J.* 8 (2004), [doi:10.1007/s11139-004-0141-5](https://doi.org/10.1007/s11139-004-0141-5)) and part II ([doi:10.1090/conm/382/07052](https://doi.org/10.1090/conm/382/07052)); "Sums of squares and triangular numbers" ([doi:10.15852/ojac001.a.01](https://doi.org/10.15852/ojac001.a.01)). Warnaar's paper opens by recalling that "Hershel Farkas asked for a(nother) proof" of the theorem in a talk at the University of Melbourne.
</div>

## Non-technical

### Breaking numbers into pieces
A **partition** of a number splits it into a sum of whole numbers, order ignored: $4=3+1=2+2=2+1+1=1+1+1+1$, plus $4$ itself, so 5 partitions.

### Euler's warm-up
Count partitions of 6 into **different** pieces: $6$, $5+1$, $4+2$, $3+2+1$: four. Now into **odd** pieces: $5+1$, $3+3$, $3+1+1+1$, $1+1+1+1+1+1$: also four. Euler proved this always happens.

### The Farkas–Kra game
1. Allow multiples of 7 to come in **two colors**, red and blue (so red 14 and blue 14 count as different pieces).
2. Split an **even** number $2n$ into different **even** pieces.
3. Split the next number $2n+1$ into different **odd** pieces.
4. The two counts are always equal.

For $2n=18$ and $2n+1=19$ both counts are 9. Check bigger numbers yourself in the Somewhat technical tab.

<div class="key" markdown="1">
Farkas and Kra did not find this by counting. They found it by studying theta functions on special surfaces, and the counting theorem fell out of an identity between those functions.
</div>

<div class="myth" markdown="1">
"If a pattern holds for the first thousand numbers, it is proved." Many patterns fail late. Here the computer check is only evidence; the proof comes from the theta-function identity.
</div>

### Further reading
- Euler's theorem and partitions: G. E. Andrews, *The Theory of Partitions* (Cambridge, 1984), ch. 1, [doi:10.1017/cbo9780511608650](https://doi.org/10.1017/cbo9780511608650).

## Somewhat technical

### The theorem
**Theorem (Farkas–Kra).** Consider the positive integers where multiples of 7 occur in two copies, $7k$ and $7k'$. Let $E(n)$ be the number of partitions of $2n$ into distinct even parts and $O(n)$ the number of partitions of $2n+1$ into distinct odd parts. Then $E(n)=O(n)$ for all $n\ge0$. (Statement as in Warnaar 2005, Theorem 1.1.)

### Worked example, $n=9$
**Even side, partitions of 18** into distinct even parts, 14 available twice:
(18), (16, 2), (14, 4), (14′, 4), (12, 6), (12, 4, 2), (10, 8), (10, 6, 2), (8, 6, 4): **9**.

**Odd side, partitions of 19** into distinct odd parts, 7 available twice:
(19), (15, 3, 1), (13, 5, 1), (11, 7, 1), (11, 7′, 1), (11, 5, 3), (9, 7, 3), (9, 7′, 3), (7, 7′, 5): **9**.

Explore any $n$, with full lists:

<div class="viz" data-viz="farkaskra"></div>

### A cousin: Rogers–Ramanujan
Partitions of $n$ into parts differing by at least 2 are equinumerous with partitions into parts $\equiv\pm1\pmod5$:

<div class="viz" data-viz="rogers"></div>

<div class="myth" markdown="1">
"The two colors are a trick that could be dropped." Without the second copy of the multiples of 7 the counts differ: for $n=9$ there are 8 partitions of 18 into distinct even parts but only 6 partitions of 19 into distinct odd parts. The doubling is essential.
</div>

### Further reading
- S. O. Warnaar, "A generalization of the Farkas and Kra partition theorem for modulus 7" (2005), §1, [doi:10.1016/j.jcta.2004.08.008](https://doi.org/10.1016/j.jcta.2004.08.008); author's PDF at [UQ](https://people.smp.uq.edu.au/OleWarnaar/pubs/Farkas-Kra.pdf).

## Engineers

### Generating functions as arrays
Each allowed part $p$ that may be used at most once contributes a factor $(1+q^p)$; a part available in two copies contributes it twice. So
$$\sum_n E(n)q^{2n}=\prod_{k\ge1}(1+q^{2k})\prod_{k\ge1}(1+q^{14k}),\qquad O(n)=[q^{2n+1}]\prod_{k\ge1}(1+q^{2k-1})\prod_{k\ge1}(1+q^{7(2k-1)}).$$
(The odd-part product also has even powers, from an even number of odd parts; only its odd coefficients matter.)

### Compute both sides (0/1 knapsack)
```python
def distinct(parts, N):               # coefficients of prod (1 + q^p) up to q^N
    c = [1] + [0] * N
    for p in parts:
        for k in range(N, p - 1, -1):
            c[k] += c[k - p]
    return c

N = 401
even = distinct(list(range(2, N + 1, 2)) + list(range(14, N + 1, 14)), N)
odd  = distinct(list(range(1, N + 1, 2)) + list(range(7, N + 1, 14)), N)
print(even[18], odd[19])                                  # 9 9
print(all(even[2*n] == odd[2*n + 1] for n in range(200))) # True
```

### List the partitions (brute force for small n)
```python
def partitions(n, parts):            # parts: list of (value, label), each usable once
    out = []
    def rec(i, rem, acc):
        if rem == 0: out.append(acc[:]); return
        for j in range(i, len(parts)):
            v, lab = parts[j]
            if v <= rem: acc.append(lab); rec(j + 1, rem - v, acc); acc.pop()
    rec(0, n, [])
    return out

def pool(n, odd):
    ps = []
    for k in range(1 if odd else 2, n + 1, 2):
        ps.append((k, str(k)))
        if k % 7 == 0: ps.append((k, f"{k}'"))
    return ps

print(len(partitions(18, pool(18, False))), len(partitions(19, pool(19, True))))   # 9 9
```

<div class="key" markdown="1">
The DP runs in $O(N^2)$ and checks the theorem for all $n\le200$ in milliseconds; the proof covers all $n$.
</div>

### Further reading
- Andrews, *The Theory of Partitions* (1984), ch. 1–2.

## Scientists

### Fermions with a degenerate level
$\prod_p(1+q^p)$ is the grand-canonical partition function of free fermionic modes with energies $p$ (each level empty or singly occupied), with $q=e^{-\beta}$. "Distinct parts" is Pauli exclusion; "two copies of multiples of 7" is a doubly degenerate level. The theorem equates level-by-level the counts in an even-energy sector and an odd-energy sector.

### Theta functions as partition functions
Jacobi's triple product $\sum_nq^{n^2}w^n=\prod(1-q^{2m})(1+q^{2m-1}w)(1+q^{2m-1}w^{-1})$ is the statement that a charged free fermion's partition function equals a sum over charge sectors, the mechanism by which theta identities become counting identities. <span class="todo">TODO: add a cited source connecting the Farkas–Kra identities specifically to physics, if one exists.</span>

### Further reading
- Andrews–Baxter–Forrester (1984), [doi:10.1007/BF01014383](https://doi.org/10.1007/BF01014383), for Rogers–Ramanujan-type identities in statistical mechanics.

## Mathematicians

### Statement and generating-function form
With $(a;q)_\infty=\prod_{k\ge0}(1-aq^k)$ and $F(q)=(-q;q^2)_\infty(-q^{7};q^{14})_\infty$, the theorem says
$$q\,(-q^2;q^2)_\infty\,(-q^{14};q^{14})_\infty=\tfrac12\big(F(q)-F(-q)\big).$$
Farkas–Kra deduce it from an identity among theta constants at $\tau$ and $7\tau$, proved with the function theory of $\Gamma(7)$-type groups (GSM 37, chs. 4 and 7; Contemp. Math. 240, 251). <span class="todo">TODO: transcribe that theta-constant identity exactly from Warnaar's PDF / Farkas–Kra GSM 37.</span>

### Generalization (Warnaar 2005)
Warnaar shows the generating-function identity is a specialization of a general $q$-series identity making no reference to the modulus, so analogues hold for other moduli; e.g. for $m=5$, partitions of $2n$ into distinct even parts and of $2n+1$ into distinct odd parts are equinumerous when the integers $\not\equiv\pm1\pmod5$ occur in two copies. His proof is analytic, not bijective.

### Bijective proofs
- S. Kim (2009), [doi:10.1016/j.jcta.2008.11.002](https://doi.org/10.1016/j.jcta.2008.11.002): the first bijective proof.
- C. Sandon, F. Zanello, "Warnaar's bijection and colored partition identities, I", [arXiv:1112.2637](https://arxiv.org/abs/1112.2637): places it among five colored identities attached to the Schröter–Russell–Ramanujan modular equations of degrees 3, 5, 7, 11, 23.

### Related theta-function tools
- The quintuple product identity (Farkas–Kra, *Proc. AMS* 1999, [doi:10.1090/s0002-9939-99-04791-7](https://doi.org/10.1090/s0002-9939-99-04791-7)).
- Three-term theta identities (Contemp. Math. 256, [doi:10.1090/conm/256/03999](https://doi.org/10.1090/conm/256/03999)) and "Identities in the theory of theta constants" (Contemp. Math. 355, [doi:10.1090/conm/355/06454](https://doi.org/10.1090/conm/355/06454)).

### Further reading
- Farkas–Kra, GSM 37, chs. "Partition theory: Ramanujan congruences", "Identities related to partition functions", "Combinatorial and number theoretic applications".
- Warnaar (2005); Kim (2009); Sandon–Zanello; Andrews (1984), above.
- I. Pak, "Partition bijections, a survey", *Ramanujan J.* (2006), [doi:10.1007/s11139-006-9576-1](https://doi.org/10.1007/s11139-006-9576-1).
