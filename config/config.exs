# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :bighero,
  ecto_repos: [Bighero.Repo]

# Configures the endpoint
config :bighero, BigheroWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "CYPb6qUyVtgSaDbTpVe/wMbeOXGPfoK0s+E1eDbmiyEl6Ci0ldH11jB6Loq5W4gp",
  render_errors: [view: BigheroWeb.ErrorView, accepts: ~w(html json)],
  pubsub_server: Bighero.PubSub,
  live_view: [signing_salt: "u079583d"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
