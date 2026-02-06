"use strict";

const path = require("path");
const express = require("express");

const publicRoutes = require("./src/routes/public.routes");
const adminRoutes = require("./src/routes/admin.routes");
const apiRoutes = require("./src/routes/api.routes");

const app = express();

app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "src", "public")));

app.use("/", publicRoutes);
app.use("/admin", adminRoutes);
app.use("/api", apiRoutes);

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on port ${port}`);
  });
}
