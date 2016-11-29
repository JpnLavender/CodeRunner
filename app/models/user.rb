class User < ApplicationRecord
  has_many :user_scores
  has_many :scores, through: :user_scores

  has_many :user_questions
  has_many :question, through: :user_questions
end
