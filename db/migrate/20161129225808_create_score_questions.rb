class CreateScoreQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :score_questions do |t|
      t.integer :score_id
      t.integer :question_id

      t.timestamps
    end
  end
end
