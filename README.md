- Ruby version
**2.3.3**

## Installation

### Database
- `rake db:create`
- `rake db:migrate`

### Dependencies
- `bundle install`
- `yarn install`

## Run Application

### Development
- `rails s`
- `./bin/webpack-dev-server --hot`

### Production
- `rake assets:precompile RAILS_ENV=production` will automatically run yarn and webpack compile
- `rails s -e production
