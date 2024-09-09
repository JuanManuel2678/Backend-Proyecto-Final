import { PORT } from "./config/config.js";
import app from "./app.js";

app.listen(PORT, () => console.log(`Server run on https://localhost:${PORT}}`));
