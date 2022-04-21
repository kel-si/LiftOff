if Rails.env === 'production' #what does this mean?
  Rails.application.config.session_store :cookie_store, key: '_lift-off', domain: 'lift-off-json-api'
else
  Rails.application.config.session_store :cookie_store, key: '_lift-off'
end 