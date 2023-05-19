struct NumberOfReads <: MOI.AbstractModelAttribute
    result_index::Int

    NumberOfReads(result_index::Integer = 1) = new(result_index)
end

MOI.is_set_by_optimize(::NumberOfReads) = true

MOI.supports(::QUBODrivers.AbstractSampler, ::NumberOfReads) = true

function MOI.get(model::QUBODrivers.AbstractSampler, nr::NumberOfReads)
    return QUBOTools.reads(model, nr.result_index)
end

function MOI.supports(model::ToQUBO.VirtualModel, nr::NumberOfReads)
    if model.optimizer !== nothing
        return MOI.supports(model.optimizer, nr)
    else
        return false
    end
end

function MOI.get(model::ToQUBO.VirtualModel, nr::NumberOfReads)
    if model.optimizer !== nothing
        return MOI.get(model.optimizer, nr)
    else
        return 0
    end
end

function reads(model::JuMP.Model; result::Integer = 1)
    return MOI.get(model, NumberOfReads(result))
end
