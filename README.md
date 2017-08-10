- Ruby version **2.3.3**
- Rails version **5.1.2**
- React version **15.6.1**

## Installation

### Database
- `rake db:create`
- `rake db:migrate`

### Dependencies
- `bundle install`
- `yarn install`

### Setup ENV vars
- copy config/application.yml.example to config/application.yml and fill the value

## Run Application

### Development
- `rails s`
- `./bin/webpack-dev-server --hot`
- open in browser `localhost:3000`

### Production
- `rake assets:precompile RAILS_ENV=production` will automatically run yarn and webpack compile
- `rails s -e production`
- open in browser `localhost:3000`
