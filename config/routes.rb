Rails.application.routes.draw do

  root 'home#index'
  get 'wine'    => 'home#wine', as: :wine
  get 'contact' => 'home#contact', as: :contact
  get 'press'   => 'home#press', as: :press
  get 'news'    => 'home#news', as: :news
  get 'calendar'=> 'home#calendar', as: :calendar
  get 'winefrance' => 'home#winefrance', as: :winefrance

  get 'wakeup' => 'home#wake_up'


end
