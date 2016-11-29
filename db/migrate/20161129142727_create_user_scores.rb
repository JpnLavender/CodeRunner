class CreateUserScores < ActiveRecord::Migration[5.0]
  def change
    create_table :user_scores do |t|
      t.integer :score_id
      t.integer :user_id

      t.timestamps
    end
  end
end
