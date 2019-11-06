import React from "react";
import Header from "./main/Header";
import Footer from "./main/Footer";
import routingConfig from "./config/routing";
import routeUtils from "./utils/routingUtils";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import auth from "../core/auth";
import { AUTH } from "./config/authorization";

class RouterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerRoutes: this.getHeaderRoutes(),
      routes: { ...routingConfig.RoutingPaths },
      isAuthenticated: auth.isAuthenticated()
    };
  }

  login = form => {
    auth.login(form, isAuth => {
      if (isAuth) {
        const headerRoutes = [...this.state.headerRoutes];

        headerRoutes
          .find(r => r.path === "/user")
          .children.forEach(route => {
            let userData = auth.getUserData();
            route.resolvedPath = route.path.replace(/:id/g, userData.id);
          });

        this.setState({ isAuthenticated: isAuth, headerRoutes: headerRoutes });
        this.props.history.push("/");
      } else {
        this.setState({ errorMsg: "Username or passoword wrong!" });
      }
    });
  };

  logout = () => {
    const { history } = this.props;
    auth.logout(() => {
      this.setState({ isAuthenticated: auth.isAuthenticated() });
      if (history) history.push("/");
    });
  };

  render() {
    const routes = Object.keys(this.state.routes).map(
      key => routingConfig.RoutingPaths[key]
    );

    const switchRoute = this.generateChildRoute(routes);

    return (
      <div className="router-app">
        <Header
          data={this.state.headerRoutes}
          isAuthenticated={this.state.isAuthenticated}
          logout={this.logout}
        />
        <div className="pages">
          <Switch>{switchRoute}</Switch>
        </div>
        <Footer />
      </div>
    );
  }

  handleAction = (action, param) => {
    switch (action) {
      case "submitLogin":
        this.login(param);
        break;
      default:
        break;
    }
  };

  generateRoute(route) {
    const RouteCmp = route.component;

    return (
      RouteCmp && (
        <PrivateRoute
          exact={route.path === "/"}
          path={route.path}
          key={route.path}
        >
          <RouteCmp
            action={this.handleAction}
            errorMsg={this.state.errorMsg}
            routeRef={route}
            userData={auth.getUserData()}
          />
        </PrivateRoute>
      )
    );
  }

  generateChildRoute(children) {
    let routes = [];
    children.forEach(route => {
      routes.push(this.generateRoute(route));
      if (route.children && route.children.length) {
        routes = routes.concat(this.generateChildRoute(route.children));
      }
    });

    return routes.filter(route => route);
  }

  getHeaderRoutes = () => {
    let { home, login, workshop, user } = { ...routingConfig.RoutingPaths };

    return routeUtils.parsePath([home, workshop, user, login]);
  };
}

function PrivateRoute({ children, ...rest }) {
  const { routeRef, userData } = children.props;
  return (
    <Route
      {...rest}
      render={({ location }) => {
        const roles = userData && AUTH[userData.role];
        const isAuthorized =
          (routeRef &&
            routeRef.authorization &&
            auth.isAuthenticated() &&
            roles.includes(routeRef.authorization)) ||
          (routeRef && !routeRef.authorization);

        const redirect = (
          <Redirect
            to={{
              pathname: "/non-authorized",
              state: { from: location }
            }}
          />
        );

        return isAuthorized && children ? children : redirect;
      }}
    />
  );
}

export default withRouter(RouterApp);
