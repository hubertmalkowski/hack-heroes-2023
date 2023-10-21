import { html } from "@elysiajs/html";
import { App } from "..";
import { Page } from "../utils/render-page";

export default (app: App) =>
  app.get("/", ({ html }) => {
    return html(
      <Page>
        <body>
          <h1>Woow</h1>
        </body>
      </Page>
    );
  });
