var documenterSearchIndex = {"docs":
[{"location":"design/#Design","page":"Design","title":"Design","text":"","category":"section"},{"location":"#QUBO.jl-Documentation","page":"Home","title":"QUBO.jl Documentation","text":"","category":"section"},{"location":"#Introduction","page":"Home","title":"Introduction","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"QUBO.jl is an all-in-one package for working with QUBO formulations in JuMP and interfacing with QUBO solvers. This project aggregates three complementary packages: ToQUBO.jl, QUBODrivers.jl and QUBOTools.jl.","category":"page"},{"location":"#QUBO?","page":"Home","title":"QUBO?","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"QUBO is an acronym for Quadratic Unconstrained Binary Optimization. So every QUBO problem is comprised of:","category":"page"},{"location":"","page":"Home","title":"Home","text":"a linear or quadratic objective function\nno constraints\nbinary variables","category":"page"},{"location":"","page":"Home","title":"Home","text":"We can represent such problem as follows:","category":"page"},{"location":"","page":"Home","title":"Home","text":"beginarrayrl\n   min           mathbfx Qmathbfx \n   textrmst  mathbfx in mathbbB^n\nendarray","category":"page"},{"location":"","page":"Home","title":"Home","text":"QUBOs are suited for representing non-convex global optimization problems. With that said, the significant advances in computing systems and algorithms specialized for sampling QUBOs have contributed to their popularity.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Some of the paradigms that stand out for running QUBOs are quantum gate-based optimization algorithms (QAOA and VQE), quantum annealers and hardware-accelerated platforms (Coherent Ising Machines and Simulated Bifurcation Machines).","category":"page"},{"location":"#QUBO.jl-features","page":"Home","title":"QUBO.jl features","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"QUBO.Jl main features are spreaded into its three subpackages:","category":"page"},{"location":"","page":"Home","title":"Home","text":"ToQUBO.jl:  reformulate general JuMP problems into the QUBO format. \nQUBODrivers.jl: define a simple interface to connect with these solvers using a MOI-compliant API.  \nQUBOTools.jl:   a set of methods to work with different formats for QUBO.","category":"page"},{"location":"","page":"Home","title":"Home","text":"More features are available in the documentation.","category":"page"},{"location":"#Quick-Start","page":"Home","title":"Quick Start","text":"","category":"section"},{"location":"#Instalation","page":"Home","title":"Instalation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"julia> ]add https://github.com/psrenergy/QUBO.jl#master","category":"page"},{"location":"#Example","page":"Home","title":"Example","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using JuMP\nusing QUBO\n\nmodel = Model(() -> ToQUBO.Optimizer(ExactSampler.Optimizer))\n\n@variable(model, x[1:3], Bin)\n@constraint(model, 0.3*x[1] + 0.5*x[2] + 1.0*x[3] <= 1.6)\n@objective(model, Max, 1.0*x[1] + 2.0*x[2] + 3.0*x[3])\n\noptimize!(model)\n\nfor i = 1:result_count(model)\n    xi = value.(x, result = i)\n    yi = objective_value(model, result = i)\n\n    println(\"f($xi) = $yi\")\nend\n","category":"page"},{"location":"","page":"Home","title":"Home","text":"<div align=\"center\">\n    <h2>QUBO.jl Packages</h2>\n    <a href=\"https://github.com/psrenergy/ToQUBO.jl\">\n        <img width=\"200px\" src=\"https://raw.githubusercontent.com/psrenergy/ToQUBO.jl/master/docs/src/assets/logo.svg\" alt=\"ToQUBO.jl\" />\n    </a>\n    <a href=\"https://github.com/psrenergy/QUBODrivers.jl\">\n        <img width=\"200px\" src=\"https://raw.githubusercontent.com/psrenergy/QUBODrivers.jl/master/docs/src/assets/logo.svg\" alt=\"QUBODrivers.jl\" />\n    </a>\n    <a href=\"https://github.com/psrenergy/QUBOTools.jl\">\n        <img width=\"200px\" src=\"https://raw.githubusercontent.com/psrenergy/QUBOTools.jl/main/docs/src/assets/logo.svg\" alt=\"QUBOTools.jl\" />\n    </a>\n</div>","category":"page"}]
}