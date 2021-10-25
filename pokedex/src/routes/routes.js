import { Route, Switch } from "react-router-dom";
import { Game } from "../pages/Game";
import { Home } from "../pages/Home";

export function Routes() {
  return (
    <Switch> {/* deve ser usado ao redor da rota */}      
      <Route path="/" component={Home} exact /> {/* utilizar o exact para evitar problemas outra coisa atrás e sempre redirecionar para a barra*/}
      <Route path="/game" component={Game} />
    </Switch>
  );
}