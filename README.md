# QUBO.jl <img src="https://raw.githubusercontent.com/JuliaLang/julia/master/doc/src/assets/julia.ico" height="26"/> :left_right_arrow:	 :atom_symbol:	


## Introduction

`QUBO.jl` is an all-in-one package for working with QUBO formulations in [JuMP](https://github.com/jump-dev/JuMP.jl) and interfacing with QUBO solvers. This project aggregates three complementary packages: [`ToQUBO.jl`](https://github.com/psrenergy/ToQUBO.jl), [`Anneal.jl`](https://github.com/psrenergy/Anneal.jl) and [`QUBOTools.jl`](https://github.com/psrenergy/QUBOTools.jl).

## What is a QUBO?

QUBO is an acronym for *Quadratic Unconstrained Binary Optimization*. So every QUBO problem is comprised of:
- an objective function at most quadratic
- no constraints
- binary variables

We can represent a QUBO problem as follows.

```math
\begin{array}{rl}
   \min          & \mathbf{x}' Q\,\mathbf{x} \\
   \mathrm{s.t.} & \mathbf{x} \in \mathbb{B}^{n}
\end{array}
```

QUBOs are suited for representing non-convex global optimization problems. With that said, the significant advances in computing systems and algorithms specialized for sampling QUBOs have contributed to their popularity.

Some of the paradigms that stand out for running QUBOs are quantum gate-based optimization algorithms (QAOA and VQE), quantum annealers and hardware-accelerated platforms (Coherent Ising Machines and Simulated Bifurcation Machines).

## `QUBO.jl` features

`QUBO.Jl` main features are spreaded into its three subpackages:

- `ToQUBO.jl`:  reformulate general JuMP problems into the QUBO format. 

- `Anneal.jl`: define a simple interface to connect with these solvers using a [MOI](https://github.com/jump-dev/MathOptInterface.jl)-compliant API.  

- `QUBOTools.jl`:   a set of methods to work with different formats for QUBO.

More features are available in the documentation.

## Quick Start

### Instalation
```julia
julia> ]add https://github.com/psrenergy/ToQUBO.jl#master
```
### Example

```julia
using QUBO
using JuMP
ToQUBO = QUBO.ToQUBO
Anneal = QUBO.Anneal

model = Model(() -> ToQUBO.Optimizer(ExactSampler.Optimizer))

@variable(model, x[1:3], Bin)
@constraint(model, 0.3*x[1] + 0.5*x[2] + 1.0*x[3] <= 1.6)
@objective(model, Max, 1.0*x[1] + 2.0*x[2] + 3.0*x[3])

optimize!(model)

for i = 1:result_count(model)
    xᵢ = value.(x, result = i)
    yᵢ = objective_value(model, result = i)
    println("f($xᵢ) = $yᵢ")
end

```


<div align="center">
    <h2>QUBO.jl Packages</h2>
    <a href="https://github.com/psrenergy/ToQUBO.jl">
        <img width="200px" src="https://raw.githubusercontent.com/psrenergy/ToQUBO.jl/master/docs/src/assets/logo.svg" alt="ToQUBO.jl" />
    </a>
    <a href="https://github.com/psrenergy/Anneal.jl">
        <img width="200px" src="https://raw.githubusercontent.com/psrenergy/Anneal.jl/master/docs/src/assets/logo.svg" alt="Anneal.jl" />
    </a>
    <a href="https://github.com/psrenergy/QUBOTools.jl">
        <img width="200px" src="https://raw.githubusercontent.com/psrenergy/QUBOTools.jl/main/docs/src/assets/logo.svg" alt="QUBOTools.jl" />
    </a>
</div>
