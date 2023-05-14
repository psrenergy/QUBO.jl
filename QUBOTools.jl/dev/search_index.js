var documenterSearchIndex = {"docs":
[{"location":"formats/MiniZinc/#MiniZinc","page":"MiniZinc","title":"MiniZinc","text":"","category":"section"},{"location":"formats/MiniZinc/","page":"MiniZinc","title":"MiniZinc","text":"QUBOTools.MiniZinc","category":"page"},{"location":"formats/MiniZinc/#QUBOTools.MiniZinc","page":"MiniZinc","title":"QUBOTools.MiniZinc","text":"\n\n\n\n","category":"type"},{"location":"formats/HFS/#HFS","page":"HFS","title":"HFS","text":"","category":"section"},{"location":"formats/HFS/","page":"HFS","title":"HFS","text":"QUBOTools.HFS","category":"page"},{"location":"formats/HFS/#QUBOTools.HFS","page":"HFS","title":"QUBOTools.HFS","text":"HFS\n\nThis format offers a description for the setup of chimera graphs.\n\n\n\n\n\n","category":"type"},{"location":"formats/HFS/","page":"HFS","title":"HFS","text":"QUBOTools.Chimera","category":"page"},{"location":"formats/HFS/#QUBOTools.Chimera","page":"HFS","title":"QUBOTools.Chimera","text":"Chimera(\n    linear_terms::Dict{Int,Int}\n    quadratic_terms::Dict{Tuple{Int,Int},Int}\n    cell_size::Int\n    precision::Int\n    scale::Float64\n    offset::Float64\n    factor::Float64\n    degree::Int\n    effective_degree::Int\n    coordinates::Dict{Int,Tuple{Int,Int,Int,Int}}\n)\n\nThe format of the instance-description file starts with a line giving the size of the Chimera graph[chimera]. Two numbers are given to specify an m times n rectangle, but currently only a square (m = n) is accepted.\n\nThe subsequent lines are of the form\n\n    <Chimera vertex> <Chimera vertex> weight\n\nwhere <Chimera vertex> is specified by four numbers using the format, Chimera graph, C_N:\n\nVertices are v = (x y o i) where\n\nx y in 0 N - 1 are the horizontal, vertical coordinates of the K_4 4\no in 0 1 is the orientation: (0 = texthorizontally connected, 1 = textvertically connected)\ni in 0 3 is the index within the \"semi-K_44\" or \"bigvertex\"\nThere is an involution given by x iff y, o iff 1 - o\n\nThere is an edge from v_p to v_q if at least one of the following holds:\n\n(x_p y_p) = (x_q y_q) wedge o_p neq o_q\nx_p - x_q = 1 wedge y_p = y_q wedge o_p = o_q = 0 wedge i_p = i_q\nx_p = x_q wedge y_p-y_q = 1 wedge o_p = o_q = 1 wedge i_p = i_q\n\n[chimera] alex1770/QUBO-Chimera\n\n\n\n\n\n","category":"type"},{"location":"formats/HFS/#Data-Access","page":"HFS","title":"Data Access","text":"","category":"section"},{"location":"formats/HFS/","page":"HFS","title":"HFS","text":"This format requires a couple specific methods to access its data as listed below.","category":"page"},{"location":"formats/HFS/","page":"HFS","title":"HFS","text":"QUBOTools.chimera_cell_size\nQUBOTools.chimera_precision","category":"page"},{"location":"api/#api-reference","page":"API Reference","title":"API Reference","text":"","category":"section"},{"location":"api/#Fallback-dispatch","page":"API Reference","title":"Fallback dispatch","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"When extending QUBOTools, one must implement a method for QUBOTools.backend. ","category":"page"},{"location":"api/","page":"API Reference","title":"API Reference","text":"QUBOTools.backend","category":"page"},{"location":"api/#QUBOTools.backend","page":"API Reference","title":"QUBOTools.backend","text":"backend(model)::AbstractModel\nbackend(model::AbstractModel)::AbstractModel\n\nRetrieves the model's backend. Implementing this function allows one to profit from fallback implementations of the other methods.\n\n\n\n\n\n","category":"function"},{"location":"api/#Variable-System","page":"API Reference","title":"Variable System","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"QUBOTools.varlt","category":"page"},{"location":"api/#QUBOTools.varlt","page":"API Reference","title":"QUBOTools.varlt","text":"varlt(x::V, y::V) where {V}\n\nThis function exists to define an arbitrary ordering for a given type and was created to address [1]. There is no predefined comparison between instances MOI's VariableIndex type. [1] https://github.com/jump-dev/MathOptInterface.jl/issues/1985\n\n\n\n\n\n","category":"function"},{"location":"api/#Variable-Domains","page":"API Reference","title":"Variable Domains","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"QUBOTools.Domain\nQUBOTools.BoolDomain\nQUBOTools.SpinDomain\nQUBOTools.UnknownDomain\nQUBOTools.domain\nQUBOTools.sense","category":"page"},{"location":"api/#QUBOTools.Domain","page":"API Reference","title":"QUBOTools.Domain","text":"Domain\n\n\n\n\n\n","category":"type"},{"location":"api/#QUBOTools.BoolDomain","page":"API Reference","title":"QUBOTools.BoolDomain","text":"BoolDomain <: Domain\n\nx in mathbbB = lbrace0 1rbrace\n\n\n\n\n\n","category":"type"},{"location":"api/#QUBOTools.SpinDomain","page":"API Reference","title":"QUBOTools.SpinDomain","text":"SpinDomain <: Domain\n\ns in mathbbS = lbrace-1 1rbrace\n\n\n\n\n\n","category":"type"},{"location":"api/#QUBOTools.domain","page":"API Reference","title":"QUBOTools.domain","text":"domain(model::AbstractModel)::Domain\ndomain(fmt::AbstractFormat)::Domain\n\nReturns the singleton representing the variable domain of a given model.\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.sense","page":"API Reference","title":"QUBOTools.sense","text":"sense(model)::Sense\n\n\n\n\n\n","category":"function"},{"location":"api/#Frame-Casting","page":"API Reference","title":"Frame Casting","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"QUBOTools.cast","category":"page"},{"location":"api/#QUBOTools.cast","page":"API Reference","title":"QUBOTools.cast","text":"cast(\n    sense_route::Pair{A,B},\n    domain_route::Pair{X,Y},\n    data,\n) where {A<:Sense,B<:Sense,X<:Domain,Y<:Domain}\n\ncast(::S, ::S, model::AbstractModel) where {S<:Sense}\ncast(::A, ::B, model::AbstractModel) where {A<:Sense,B<:Sense}\n\nRecasting the sense of a model preserves its meaning:\n\nbeginarrayll\n    min_s alpha f(s) + beta equiv max_s -alpha f(s) + beta \n                                   equiv max_s alpha -f(s) - beta \nendarray\n\nThe linear terms, quadratic terms and constant offset of a model have its signs reversed.\n\ncast(::S, ::S, s::Sample) where {S<:Sense}\ncast(::A, ::B, s::Sample) where {A<:Sense,B<:Sense}\ncast(::S, ::S, ω::SampleSet) where {S<:Sense}\ncast(::A, ::B, ω::SampleSet) where {A<:Sense,B<:Sense}\n\ncast(target, model::AbstractModel)\ncast(route, ψ::Vector{U})\ncast(route, Ψ::Vector{Vector{U}})\ncast(route, ω::SampleSet)\n\nReturns a new object, switching its domain from source to target.\n\nReverses the sign of the objective value.\n\n\n\n\n\n","category":"function"},{"location":"api/#Solution-Interface","page":"API Reference","title":"Solution Interface","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"QUBOTools.Sample\nQUBOTools.SampleSet\nQUBOTools.sampleset","category":"page"},{"location":"api/#QUBOTools.Sample","page":"API Reference","title":"QUBOTools.Sample","text":"Sample{T,U}(state::Vector{U}, value::T, reads::Integer) where{T,U}\n\n\n\n\n\n","category":"type"},{"location":"api/#QUBOTools.SampleSet","page":"API Reference","title":"QUBOTools.SampleSet","text":"SampleSet{T,U}(\n    data::Vector{Sample{T,U}},\n    metadata::Dict{String,Any},\n) where {T,U}\n\nIt compresses repeated states by adding up the reads field. It was inspired by [dwave], with a few tweaks.\n\ninfo: Info\nA SampleSet{T,U} was designed to be read-only. It is optimized to support queries over the solution set.\n\nReferences\n\n[dwave]: ocean docs\n\n\n\n\n\n","category":"type"},{"location":"api/#QUBOTools.sampleset","page":"API Reference","title":"QUBOTools.sampleset","text":"sampleset(model)::SampleSet\n\nReturns the SampleSet stored in a model.\n\n\n\n\n\n","category":"function"},{"location":"api/","page":"API Reference","title":"API Reference","text":"QUBOTools.state\nQUBOTools.value\nQUBOTools.energy\nQUBOTools.reads","category":"page"},{"location":"api/#QUBOTools.state","page":"API Reference","title":"QUBOTools.state","text":"state(model, i::Integer)\n\nReturns the state vector corresponding to the i-th solution on the model's sampleset.\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.value","page":"API Reference","title":"QUBOTools.value","text":"value(model, state::Vector)\nvalue(model, index::Integer)\n\nThis function aims to evaluate the energy of a given state under some QUBO Model.\n\nvalue(Q::Dict{Tuple{Int,Int},T}, ψ::Vector{U}, α::T = one(T), β::T = zero(T)) where {T}\nvalue(h::Dict{Int,T}, J::Dict{Tuple{Int,Int},T}, ψ::Vector{U}, α::T = one(T), β::T = zero(T)) where {T}\n\ninfo: Info\nScale and offset factors are taken into account.\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.energy","page":"API Reference","title":"QUBOTools.energy","text":"energy\n\nAn alias for value.\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.reads","page":"API Reference","title":"QUBOTools.reads","text":"reads(model)\nreads(model, i::Integer)\n\nReturns the read frequency of the i-th solution on the model's sampleset.\n\n\n\n\n\n","category":"function"},{"location":"api/#Models","page":"API Reference","title":"Models","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"QUBOTools.AbstractModel\nQUBOTools.Model\nQUBOTools.model_name\nQUBOTools.AbstractFormat\nQUBOTools.infer_format","category":"page"},{"location":"api/#QUBOTools.AbstractModel","page":"API Reference","title":"QUBOTools.AbstractModel","text":"AbstractModel{V,T}\n\nRepresents an abstract QUBO Model and should support most of the queries made available by QUBOTools. ```\n\nAs shown in the example above, implementing a method for the backend function gives access to most fallback implementations.\n\n\n\n\n\n","category":"type"},{"location":"api/#QUBOTools.Model","page":"API Reference","title":"QUBOTools.Model","text":"Model{\n    V <: Any,\n    T <: Real,\n    U <: Integer\n} <: AbstractModel{V,T}\n\nThe Model was designed to work as a general for all implemented interfaces. It is intended to be the core engine behind the target codecs.\n\nMathOptInterface/JuMP\n\nBoth V <: Any and T <: Real parameters exist to support MathOptInterface/JuMP integration. By choosing V = MOI.VariableIndex and T matching Optimizer{T} the hard work should be done.\n\n\n\n\n\n","category":"type"},{"location":"api/#QUBOTools.model_name","page":"API Reference","title":"QUBOTools.model_name","text":"model_name(model)::String\n\nReturns a string representing the model type.\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.AbstractFormat","page":"API Reference","title":"QUBOTools.AbstractFormat","text":"AbstractFormat\n\n\n\n\n\n","category":"type"},{"location":"api/#QUBOTools.infer_format","page":"API Reference","title":"QUBOTools.infer_format","text":"infer_format(::AbstractString)::AbstractFormat\ninfer_format(::Symbol)::AbstractFormat\ninfer_format(::Symbol, ::Symbol)::AbstractFormat\n\nGiven a file path, tries to infer the type associated to a QUBO model format.\n\n\n\n\n\n","category":"function"},{"location":"api/#Data-Access","page":"API Reference","title":"Data Access","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"QUBOTools.linear_terms\nQUBOTools.explicit_linear_terms\nQUBOTools.quadratic_terms\nQUBOTools.scale\nQUBOTools.offset","category":"page"},{"location":"api/#QUBOTools.linear_terms","page":"API Reference","title":"QUBOTools.linear_terms","text":"linear_terms(model)::Dict{Int,T} where {T <: Real}\n\nRetrieves the linear terms of a model as a dict.\n\ninfo: Info\nThe explicit_linear_terms method includes all variables, breaking linear sparsity.\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.explicit_linear_terms","page":"API Reference","title":"QUBOTools.explicit_linear_terms","text":"explicit_linear_terms(model)::Dict{Int,T} where {T <: Real}\n\nRetrieves the linear terms of a model as a dict, including zero entries.\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.quadratic_terms","page":"API Reference","title":"QUBOTools.quadratic_terms","text":"quadratic_terms(model)::Dict{Tuple{Int,Int},T} where {T <: Real}\n\nRetrieves the quadratic terms of a model as a dict. For every key pair (i j) holds that i  j.\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.scale","page":"API Reference","title":"QUBOTools.scale","text":"scale(model)\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.offset","page":"API Reference","title":"QUBOTools.offset","text":"offset(model)\n\n\n\n\n\n","category":"function"},{"location":"api/","page":"API Reference","title":"API Reference","text":"QUBOTools.variable_map\nQUBOTools.variable_inv\nQUBOTools.variable_set\nQUBOTools.variables","category":"page"},{"location":"api/#QUBOTools.variable_map","page":"API Reference","title":"QUBOTools.variable_map","text":"variable_map(model)::Dict{V,Int} where {V}\nvariable_map(model, x::V)::Integer where {V}\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.variable_inv","page":"API Reference","title":"QUBOTools.variable_inv","text":"variable_inv(model)::Dict{Int,V} where {V}\nvariable_inv(model, i::Integer)::V where {V}\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.variable_set","page":"API Reference","title":"QUBOTools.variable_set","text":"variable_set(model)::Set\n\nReturns the set of variables of a given model.\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.variables","page":"API Reference","title":"QUBOTools.variables","text":"variables(model)::Vector\n\nReturns a sorted vector containing the model's variables. If order doesn't matter, use variable_set(model) instead.\n\n\n\n\n\n","category":"function"},{"location":"api/","page":"API Reference","title":"API Reference","text":"QUBOTools.id\nQUBOTools.version\nQUBOTools.description\nQUBOTools.metadata","category":"page"},{"location":"api/#QUBOTools.id","page":"API Reference","title":"QUBOTools.id","text":"id(model)\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.version","page":"API Reference","title":"QUBOTools.version","text":"version(model)\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.description","page":"API Reference","title":"QUBOTools.description","text":"description(model)\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.metadata","page":"API Reference","title":"QUBOTools.metadata","text":"metadata(model::AbstractModel)\nmetadata(sampleset::SampleSet)\n\n\n\n\n\n","category":"function"},{"location":"api/#Queries","page":"API Reference","title":"Queries","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"QUBOTools.domain_size\nQUBOTools.linear_size\nQUBOTools.quadratic_size\nQUBOTools.density\nQUBOTools.linear_density\nQUBOTools.quadratic_density\nQUBOTools.adjacency","category":"page"},{"location":"api/#QUBOTools.domain_size","page":"API Reference","title":"QUBOTools.domain_size","text":"domain_size(model)::Integer\n\nCounts the number of variables in the model.\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.linear_size","page":"API Reference","title":"QUBOTools.linear_size","text":"linear_size(model)::Int\n\nCounts the number of non-zero linear terms in the model.\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.quadratic_size","page":"API Reference","title":"QUBOTools.quadratic_size","text":"quadratic_size(model)::Int\n\nCounts the number of non-zero quadratic terms in the model.\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.density","page":"API Reference","title":"QUBOTools.density","text":"density(model)::Float64\n\nComputes the density rho of non-zero terms in a model, according to the expression\n\nrho = frac2Q + LN^2\n\nwhere L is the number of non-zero linear terms, Q the number of quadratic ones and N the number of variables.\n\nIf the model is empty, returns NaN.\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.linear_density","page":"API Reference","title":"QUBOTools.linear_density","text":"linear_density(model)::Float64\n\nComputes the linear density rho_l, given by\n\nrho_l = fracLN\n\nwhere L is the number of non-zero linear terms and N the number of variables.\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.quadratic_density","page":"API Reference","title":"QUBOTools.quadratic_density","text":"quadratic_density(model)::Float64\n\nComputes the linear density rho_q, given by\n\nrho_q = frac2QN (N - 1)\n\nwhere Q is the number of non-zero quadratic terms and N the number of variables.\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.adjacency","page":"API Reference","title":"QUBOTools.adjacency","text":"adjacency(model)::Dict{Int,Set{Int}}\nadjacency(G::Vector{Tuple{Int,Int}})::Dict{Int,Set{Int}}\nadjacency(G::Set{Tuple{Int,Int}})::Dict{Int,Set{Int}}\nadjacency(G::Dict{Tuple{Int,Int},T})::Dict{Int,Set{Int}}\n\nComputes the adjacency list representation for the quadratic terms of a given model. A mapping between each variable index and the set of its neighbors is returned.\n\nadjacency(model, k::Integer)::Set{Int}\nadjacency(G::Vector{Tuple{Int,Int}}, k::Integer)::Set{Int}\nadjacency(G::Set{Tuple{Int,Int}}, k::Integer)::Set{Int}\nadjacency(G::Dict{Tuple{Int,Int},T}, k::Integer)::Set{Int}\n\nIf a second parameter, an integer, is present, then the set of neighbors of that node is returned.\n\nwarning: Warning\nComputing specific neighborhoods is expensive. Thus, it is recommended that one stores the adjacency list for repeated access.\n\n\n\n\n\n","category":"function"},{"location":"api/#Normal-Forms","page":"API Reference","title":"Normal Forms","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"QUBOTools.qubo\nQUBOTools.ising","category":"page"},{"location":"api/#QUBOTools.qubo","page":"API Reference","title":"QUBOTools.qubo","text":"qubo(model::AbstractModel{<:BoolDomain})\nqubo(model::AbstractModel{<:BoolDomain}, ::Type{Dict}, T::Type = Float64)\n\nReturns sparse dictionary representation.\n\nqubo(model::AbstractModel{<:BoolDomain}, ::Type{Vector}, T::Type = Float64)\n\nReturns sparse vector quadruple (linear, quadratic, lower index & upper index).\n\nqubo(model::AbstractModel{<:BoolDomain}, ::Type{Matrix}, T::Type = Float64)\n\nReturns dense matrix representation.\n\nqubo(model::AbstractModel{<:BoolDomain}, ::Type{SparseMatrixCSC}, T::Type = Float64)\n\nReturns sparse matrix representation.\n\nqubo(model::AbstractModel{<:SpinDomain}, args...)\n\nReturns QUBO form from Ising Model (Spin).\n\nqubo(h::Dict{Int,T}, J::Dict{Tuple{Int, Int}, T}, α::T = one(T), β::T = zero(T)) where {T}    \nqubo(h::Vector{T}, J::Vector{T}, u::Vector{Int}, v::Vector{Int}, α::T = one(T), β::T = zero(T)) where {T}\nqubo(h::Vector{T}, J::Matrix{T}, α::T = one(T), β::T = zero(T)) where {T}\nqubo(h::SparseVector{T}, J::SparseMatrixCSC{T}, α::T = one(T), β::T = zero(T)) where {T}\n\ninfo: Info\nApart from the sparse matricial case, the linear terms are explicitly included, breaking sparsity by containing zero entries.\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOTools.ising","page":"API Reference","title":"QUBOTools.ising","text":"ising(model::AbstractModel{<:SpinDomain})\nising(model::AbstractModel{<:SpinDomain}, ::Type{<:Dict}, T::Type = Float64))\n\nReturns sparce dictionary representation\n\nising(model::AbstractModel{<:BoolDomain}, ::Type{Vector}, T::Type = Float64)\n\nReturns sparse vector quadruple (linear, quadratic, lower index & upper index).\n\nising(model::AbstractModel{<:BoolDomain}, ::Type{Matrix}, T::Type = Float64)\n\nReturns dense matrix representation.\n\nising(model::AbstractModel{<:SpinDomain}, ::Type{SparseMatrixCSC}, T::Type = Float64)\n\nReturns sparce matrix representation\n\nising(model::AbstractModel{<:BoolDomain}, args...)\n\nReturns Ising Model form from QUBO Model (Bool).\n\nising(h::Dict{Int,T}, J::Dict{Tuple{Int, Int}, T}, α::T = one(T), β::T = zero(T)) where {T}    \nising(h::Vector{T}, J::Vector{T}, u::Vector{Int}, v::Vector{Int}, α::T = one(T), β::T = zero(T)) where {T}\nising(h::Vector{T}, J::Matrix{T}, α::T = one(T), β::T = zero(T)) where {T}\nising(h::SparseVector{T}, J::SparseMatrixCSC{T}, α::T = one(T), β::T = zero(T)) where {T}\n\nIsing Normal Form\n\ninfo: Info\nApart from the sparse matricial case, the linear terms are explicitly included, breaking sparsity by containing zero entries.\n\n\n\n\n\n","category":"function"},{"location":"analysis/#Analysis","page":"Analysis","title":"Analysis","text":"","category":"section"},{"location":"analysis/#Visualization","page":"Analysis","title":"Visualization","text":"","category":"section"},{"location":"analysis/","page":"Analysis","title":"Analysis","text":"using Plots\nusing QUBOTools\n\nS = SampleSet([\n    Sample([0, 0], 0.5,  8),\n    Sample([0, 1], 1.2, 10),\n    Sample([1, 0], 1.8, 12),\n    Sample([1, 1], 1.5,  4),\n])\n\nplot(S)","category":"page"},{"location":"analysis/#Benchmarking","page":"Analysis","title":"Benchmarking","text":"","category":"section"},{"location":"analysis/#Timing","page":"Analysis","title":"Timing","text":"","category":"section"},{"location":"analysis/","page":"Analysis","title":"Analysis","text":"QUBOTools.total_time\nQUBOTools.effective_time","category":"page"},{"location":"analysis/#QUBOTools.total_time","page":"Analysis","title":"QUBOTools.total_time","text":"total_time(ω::SampleSet)\n\nRetrieves the total time spent during the whole solution gathering process, as experienced by the user.\n\n\n\n\n\n","category":"function"},{"location":"analysis/#QUBOTools.effective_time","page":"Analysis","title":"QUBOTools.effective_time","text":"effective_time(ω::SampleSet)\n\nRetrieves the time spent by the algorithm in the strict sense, that is, excluding time spent with data access, precompilation and other activities. That said, it is assumed that t_texteffective le t_texttotal.\n\n\n\n\n\n","category":"function"},{"location":"analysis/#Solution-Quality","page":"Analysis","title":"Solution Quality","text":"","category":"section"},{"location":"analysis/","page":"Analysis","title":"Analysis","text":"QUBOTools.success_rate","category":"page"},{"location":"analysis/#QUBOTools.success_rate","page":"Analysis","title":"QUBOTools.success_rate","text":"success_rate(ω::SampleSet{T,<:Any}, λ::T) where {T}\n\nReturns the success rate according to the given sample set and the optimal objective value lambda.\n\n\n\n\n\n","category":"function"},{"location":"analysis/#Time-to-Solution-(TTS)","page":"Analysis","title":"Time-to-Solution (TTS)","text":"","category":"section"},{"location":"analysis/","page":"Analysis","title":"Analysis","text":"QUBOTools.tts","category":"page"},{"location":"analysis/#QUBOTools.tts","page":"Analysis","title":"QUBOTools.tts","text":"tts(ω::SampleSet{T,<:Any}, λ::T, s::Float64=0.99) where {T}\n\nComputes the time to solution (TTS) from the optimal objective value and a sample set. The success factor s defaults to 099.\n\ntts(t::Float64, p::Float64, s::Float64=0.99)\n\nComputes the time to solution (TTS) given the effective time t spent running the algorithm and the success probability p. The success factor s defaults to 099.\n\ntexttts(t p s) = t fraclog(1 - s)log(1 - p)\n\n\n\n\n\n","category":"function"},{"location":"manual/#Manual","page":"Manual","title":"Manual","text":"","category":"section"},{"location":"manual/#Introduction","page":"Manual","title":"Introduction","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"This manual aims to explain the fundamental concepts behind loading and manipulating QUBO models.","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"using QUBOTools","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"By loading the package with an using statement, only a few constants will be dumped in the namespace, mostly model types.","category":"page"},{"location":"manual/#Mathematical-Formulation","page":"Manual","title":"Mathematical Formulation","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"The conventions adopted by QUBOTools are built over models of the form","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"beginarrayrl\n    textQUBO min  alpha left mathbfx Q mathbfx + mathbfell mathbfx + beta right 1ex\n          textst  mathbfx in S cong mathbbB^n\nendarray","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"where alpha beta in mathbbR are the scale and offset parameters. The vector mathbfell in mathbbR^n stores the linear terms and Q in mathbbR^n times n, the quadratic interaction matrix, is assumed to be in its triangular superior form.","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"info: Info\nAny problem loaded with this package will be converted internally to the normal form presented above.","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"info: Info\nThe scaling factor alpha is assumed to be positive in the minimization sense. Negative values are used to indicate maximization problems.","category":"page"},{"location":"manual/#Basic-File-I/O","page":"Manual","title":"Basic File I/O","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"To read and write QUBO models one is expected to use the Base.read/Base.write API.","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"# File Path\nfpath = joinpath(@__DIR__, \"data\", \"problem.json\")\n\nmodel = read(fpath, BQPJSON())","category":"page"},{"location":"manual/#Data-Access","page":"Manual","title":"Data Access","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"When querying a model, one should rely on the provided methods, whose definitions are listed in the API Reference.","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"QUBOTools.description(model)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"QUBOTools.linear_terms(model)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"QUBOTools.quadratic_terms(model)","category":"page"},{"location":"manual/#Conversion-between-File-Formats","page":"Manual","title":"Conversion between File Formats","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"One of the main functionalities of this package is to allow fast conversion from a QUBO file format to another. Achieving this is as simple as writing the loaded model but providing a different specification:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"write(\"problem.qubo\", model, QUBO())","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"It can also be used to switch between variable domains while keeping the file format unchanged:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"write(\"problem.qubo\", model, BQPJSON{SpinDomain}())","category":"page"},{"location":"formats/BQPJSON/#BQPJSON","page":"BQPJSON","title":"BQPJSON","text":"","category":"section"},{"location":"formats/BQPJSON/","page":"BQPJSON","title":"BQPJSON","text":"QUBOTools.BQPJSON","category":"page"},{"location":"formats/BQPJSON/#QUBOTools.BQPJSON","page":"BQPJSON","title":"QUBOTools.BQPJSON","text":"BQPJSON\n\nPrecise and detailed information found in the bqpjson docs\n\n\n\n\n\n","category":"type"},{"location":"formats/QUBO/#QUBO","page":"QUBO","title":"QUBO","text":"","category":"section"},{"location":"formats/QUBO/","page":"QUBO","title":"QUBO","text":"QUBOTools.QUBO","category":"page"},{"location":"formats/QUBO/#QUBOTools.QUBO","page":"QUBO","title":"QUBOTools.QUBO","text":"QUBO{D}(;\n    style::Union{Symbol,Nothing} = nothing,\n    comment::Union{String,Nothing} = nothing,\n) where {D}\n\nReferences\n\n[1] qbsolv docs\n\n\n\n\n\n","category":"type"},{"location":"#QUBOTools.jl","page":"Home","title":"QUBOTools.jl","text":"","category":"section"},{"location":"#Introduction","page":"Home","title":"Introduction","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The QUBOTools.jl package implements codecs and query methods for working with QUBO instances. Its purpose is to provide fast and reliable conversion between common formats used to represent such problems. This allows for rapid leverage of many emergent computing architectures whose job is to solve this kind of optimization problem.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The QUBO term, in the strict sense, is widely used to indicate boolean problems of the form","category":"page"},{"location":"","page":"Home","title":"Home","text":"beginarrayrl\n       min  mathbfx Q mathbfx \ntextst  mathbfx in mathbbB^n\nendarray","category":"page"},{"location":"","page":"Home","title":"Home","text":"with symmetric Q in mathbbR^n times n. Nevertheless, this package also provides full support for Ising Models, given by","category":"page"},{"location":"","page":"Home","title":"Home","text":"beginarrayrl\n       min  mathbfs J mathbfs + mathbfh mathbfs \ntextst  mathbfs in leftlbrace-1 1rightrbrace^n\nendarray","category":"page"},{"location":"","page":"Home","title":"Home","text":"where J in mathbbR^n times n is upper triangular and mathbfh in mathbbR^n.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"QUBOTools.jl is avaible through Julia's General Registry:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> import Pkg\n\njulia> Pkg.add(\"QUBOTools\")\n\njulia> using QUBOTools","category":"page"},{"location":"#Design-Goals","page":"Home","title":"Design Goals","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The objective of this package is to provide:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Fast and reliable I/O, including conversion between formats.\nModel & Solution Analysis through data queries, metrics and plot recipes.\nGeneric yet complete backend for powering other applications.\nSynthetic problem generation.","category":"page"},{"location":"formats/Qubist/#Qubist","page":"Qubist","title":"Qubist","text":"","category":"section"},{"location":"formats/Qubist/","page":"Qubist","title":"Qubist","text":"7 2\n1 1 0.75\n2 2 -3.0\n3 3 1.25\n1 2 1.0\n1 3 1.0\n2 3 1.0","category":"page"},{"location":"formats/Qubist/","page":"Qubist","title":"Qubist","text":"QUBOTools.Qubist","category":"page"},{"location":"formats/Qubist/#QUBOTools.Qubist","page":"Qubist","title":"QUBOTools.Qubist","text":"Qubist\n\n\n\n\n\n","category":"type"},{"location":"assets/README/#QUBOTools.jl's-Assets","page":"QUBOTools.jl's Assets","title":"QUBOTools.jl's Assets","text":"","category":"section"},{"location":"assets/README/#logo","page":"QUBOTools.jl's Assets","title":"Logo","text":"","category":"section"},{"location":"assets/README/","page":"QUBOTools.jl's Assets","title":"QUBOTools.jl's Assets","text":"QUBOTools's logo depicts the conversion between binary data and spin states. This represents the available codecs for manipulating Ising and QUBO models.","category":"page"},{"location":"assets/README/","page":"QUBOTools.jl's Assets","title":"QUBOTools.jl's Assets","text":"(Image: QUBOTools.jl)","category":"page"},{"location":"assets/README/#Colors","page":"QUBOTools.jl's Assets","title":"Colors","text":"","category":"section"},{"location":"assets/README/","page":"QUBOTools.jl's Assets","title":"QUBOTools.jl's Assets","text":"The colors were chosen according to  Julia's Reference for logo graphics¹. Text color matches the innermost shape and renders fairly well in both light and dark background themes.","category":"page"},{"location":"assets/README/#Typography","page":"QUBOTools.jl's Assets","title":"Typography","text":"","category":"section"},{"location":"assets/README/","page":"QUBOTools.jl's Assets","title":"QUBOTools.jl's Assets","text":"Arial(#2) Font was used. It was chosen to represent the simplicity of this package.","category":"page"},{"location":"assets/README/","page":"QUBOTools.jl's Assets","title":"QUBOTools.jl's Assets","text":"<a href=\"#1\">¹</a> github.com/JuliaLang/julia-logo-graphics","category":"page"}]
}