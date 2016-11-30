class ScoreQuestion < ApplicationRecord
  belongs_to :score
  belongs_to :question
  belongs_to :user
end
