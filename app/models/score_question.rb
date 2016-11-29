class ScoreQuestion < ApplicationRecord
  belongs_to :score
  belongs_to :Question
end
