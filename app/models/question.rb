class Question < ApplicationRecord
  has_many :score_questions
  has_many :scores, through: :score_questions
end
