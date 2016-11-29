class Question < ApplicationRecord
  has_many :score_questions
  has_many :scores, through: :score_questions

  has_many :user_questions
  has_many :users, through: :user_questions
end
