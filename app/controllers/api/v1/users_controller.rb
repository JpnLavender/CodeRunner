class Api::V1::UsersController < ApplicationController
  def index
    User.all
  end
  def create
    user =  User.new(user_params)
    if user.save
      render :show, status: :created
    else
      render :show, status: :error
    end
  end
  def update
    User.find_by(id: params[:id])
  end

  private
  def user_params
    params.permit(:name, :my_github_url, :mail, :password, :password_confirmation)
  end
end

