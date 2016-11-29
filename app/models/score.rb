class Score < ApplicationRecord
  has_many :user_scores
  has_many :users, through: :user_scores

  has_many :score_questions
  has_many :question, through: :score_questions
end
