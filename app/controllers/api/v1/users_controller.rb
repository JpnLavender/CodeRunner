class Api::V1::UsersController < ApplicationController
  def index
    render :json => User.all
  end

  def create
    user =  User.new(user_params)
    if user.save
      render :json => user
    else
      render :json, status: :error
    end
  end

  def update
    user = User.find_by(id: params[:id]).update(user_params)
    if user.save
      render :show, status: :created
    else
      render :show, status: :error
    end
  end

  private
  def user_params
    params.permit(:name, :my_github_url, :default_lang, :mail, :password, :password_confirmation)
  end
end

