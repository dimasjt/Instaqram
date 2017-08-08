source "https://rubygems.org"

ruby "2.3.3"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem "puma", "~> 3.7"
gem "rails", "~> 5.1.1"
gem "pg"

gem "coffee-rails", "~> 4.2"
gem "sass-rails", "~> 5.0"
gem "uglifier", ">= 1.3.0"

gem "webpacker"

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "pry-rails"

  gem "capybara", "~> 2.13"
  gem "selenium-webdriver"

  gem "factory_girl_rails"
  gem "faker"
  gem "figaro"
end

group :test do
  gem "database_cleaner"
  gem "rspec-rails"
  gem "shoulda-matchers", git: "https://github.com/thoughtbot/shoulda-matchers.git", branch: "rails-5"
  gem "simplecov"
end

group :development do
  gem "annotate"
  gem "graphiql-rails"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "web-console", ">= 3.3.0"

  gem "guard", require: false
  gem "guard-bundler", require: false
  gem "guard-rspec", require: false

  gem "rubocop", require: false
end

group :development, :tddium_ignore, :darwin do
  gem "terminal-notifier-guard", require: false # OSX-specific notifications for guard
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem "carrierwave"
gem "devise"
gem "fog"
gem "graphql"
gem "jwt"
gem "kaminari"
gem "mini_magick"
