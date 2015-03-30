Rails.application.routes.draw do

  root 'home#index'

  get 'wakeup' => 'home#wake_up'

end
