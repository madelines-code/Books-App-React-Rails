class BooksController < ApplicationController

  before_action :set_book, only: [:show, :update, :destroy]
  # this remders the component
  def app 
    render component: "App"
  end

  # these are all json
  def index 
    render json: Book.all
  end
  
  def show
    render json: @book 
  end

  def create
  @book = Book.new(book_params)
  if(@book.save)
    render json: @book
  else
    # 422 error = unprocessable entity (doesn't clear the sanitization params)
    render json: {errors: @book.errors.full_messages}, status: 422
  end
  end


  def update 
    if(@book.update(book_params))
      render json: @book
    else
      render json: { errors: @book.errors.full_messages }, status: 422 
    end

  end

  def destroy
    render json: @book.destroy 
  end

  private
  def set_book
    @book=Book.find(params[:id])
  end

  #the reason we sanitize our data is to keep out database clean with only valid entries
  def book_params
    params.require(:book).permit(:title, :author, :quantity)
  end

end
