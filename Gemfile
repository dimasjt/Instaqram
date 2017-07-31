source "https://rubygems.org"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem "puma", "~> 3.7"
gem "rails", "~> 5.1.1"

gem "coffee-rails", "~> 4.2"
gem "sass-rails", "~> 5.0"
gem "turbolinks", "~> 5"
gem "uglifier", ">= 1.3.0"

gem "webpacker"

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "pry-rails"

  gem "capybara", "~> 2.13"
  gem "selenium-webdriver"

  gem "sqlite3"
end

group :development do
  gem "annotate"
  gem "graphiql-rails"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "web-console", ">= 3.3.0"

  gem "rubocop", require: false
end

group :production do
  gem "pg"
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem "carrierwave"
gem "devise"
gem "graphql"
gem "jwt"
gem "mini_magick"
