class HomeController < ActionController::Base
  layout "application"

  def wake_up
    # regularly called by new_relic to test the website is responding
    # Also keeo the dyno awake (if we are only using one)
    render nothing: true
  end

  def index
    @title = 'Welcome to GioWine'
  end

  def wine
    @title = 'GioWine > Wine'
  end

  def contact
    @title = "Giowine > Contact"
  end

  def press
    @title = "Giowine > Press"
  end

  def news
    @title = "Giowine > News"
  end

  def calendar
    @title = "Giowine > Calendar"
  end

  def winefrance
    @title = "Giowine > French Wine"
  end

end
