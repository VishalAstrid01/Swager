const express = require("express");
const swaggerUi = require("swagger-ui-express");
const axios = require("axios");

const app = express();
const PORT = 5000;
const FINNHUB_SWAGGER_URL = "https://finnhub.io/static/swagger.json"; 

// Fetch Finnhub Swagger JSON and serve Swagger UI
axios.get(FINNHUB_SWAGGER_URL)
    .then(response => {
        const swaggerData = response.data;
        app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerData));
        console.log(`✅ Swagger UI available at http://localhost:${PORT}/api-docs`);
    })
    .catch(error => {
        console.error("❌ Error loading Swagger JSON:", error);
    });

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Swagger server running on http://localhost:${PORT}`);
});
