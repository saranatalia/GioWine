Rails.application.routes.draw do

  root 'home#index'
  get 'wine' => 'home#wine', as: :wine
  get 'contact' => 'home#contact', as: :contact

  get 'wakeup' => 'home#wake_up'


end
