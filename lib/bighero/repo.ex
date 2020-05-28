defmodule Bighero.Repo do
  use Ecto.Repo,
    otp_app: :bighero,
    adapter: Ecto.Adapters.Postgres
end
