RAILS_ENV=production bundle exec rake assets:precompile
bundle exec rails server -d -b 0.0.0.0 webrick -e production