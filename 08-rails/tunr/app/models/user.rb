class User < ApplicationRecord
  has_secure_password # validation
  validates :email, :presence => true, :uniqueness => true
  has_many :mixtapes
end
