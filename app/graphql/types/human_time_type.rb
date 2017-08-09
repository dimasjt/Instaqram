Types::HumanTimeType = GraphQL::ObjectType.define do
  name "HumanTime"

  field :format, types.String do
    resolve ->(time, args, ctx) {
      time.to_date.to_formatted_s(:db)
    }
  end

  field :human, types.String do
    resolve ->(time, args, ctx) {
      time.to_date.to_formatted_s(:long)
    }
  end

  field :unix, types.Int do
    resolve ->(time, args, ctx) {
      time.utc.to_i * 1000
    }
  end
end
