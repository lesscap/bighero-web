defmodule BigheroWeb.PageController do
  use BigheroWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html", assets: "index")
  end
end
