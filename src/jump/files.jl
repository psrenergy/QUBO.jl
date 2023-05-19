@doc raw"""
    read!(path, model[, fmt])
"""
function read! end

function read!(
    path::AbstractString,
    model::JuMP.Model,
    fmt::QUBOTools.AbstractFormat = QUBOTools.infer_format(path),
)
    @assert isempty(model)

    src_model = QUBOTools.read_model(path, fmt)

    L = QUBOTools.linear_terms(src_model)
    Q = QUBOTools.quadratic_terms(src_model)
    α = QUBOTools.scale(src_model)
    β = QUBOTools.offset(src_model)

    vars = QUBOTools.variables(src_model)
    vinv = QUBOTools.variable_inv(src_model)

    if QUBOTools.domain(src_model) === QUBOTools.𝔹
        JuMP.@variable(model, v[vars], Bin)
    else
        JuMP.@variable(model, v[vars], Spin)
    end

    JuMP.@expression(
        model,
        f,
        sum(ℓ * v[vinv[i]] for (i, ℓ) in L) +
        sum(q * v[vinv[i]] * v[vinv[j]] for ((i, j), q) in Q)
    )

    if QUBOTools.sense(src_model) === QUBOTools.Min
        JuMP.@objective(model, Min, α * (f + β))
    else
        JuMP.@objective(model, Max, α * (f + β))
    end

    return model
end