class BooksController < ApplicationController
  # this remders the component
def app 
  render component: "App"
end

 # these are all json
def index 
  render json: Item.all
end
 
def show
end

def update 
end

def destroy
end
end
