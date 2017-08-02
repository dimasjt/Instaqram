Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :register, function: Functions::Register.new
  field :login, function: Functions::Login.new
  field :updateProfile, function: Functions::UpdateProfile.new

  field :postPhoto, function: Functions::PostPhoto.new
  field :commentPhoto, function: Functions::CommentPhoto.new
  field :likePhoto, function: Functions::LikePhoto.new
  field :unlikePhoto, function: Functions::UnlikePhoto.new

  field :follow, function: Functions::Followship.new(:follow)
  field :unfollow, function: Functions::Followship.new(:unfollow)
end
