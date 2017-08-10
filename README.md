- Ruby version **2.3.3**
- Rails version **5.1.2**
- React version **15.6.1**

## Installation

### Install Dependencies
- `bundle install`
- `yarn install`

### Setup ENV vars
- copy _config/application.yml.example_ to _config/application.yml_ and fill the value

### Database
- `rake db:create`
- `rake db:migrate`

## Run Application

### Development
- `rails s`
- `./bin/webpack-dev-server --hot`
- open in browser `localhost:3000`

### Production
- `rake assets:precompile RAILS_ENV=production` will automatically run yarn and webpack compile
- `rails s -e production`
- open in browser `localhost:3000`
