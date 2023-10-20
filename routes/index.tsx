import { App } from "..";

export default (app: App) =>
  app.get("/", () => {
    return <h1>Sexy</h1>;
  });
