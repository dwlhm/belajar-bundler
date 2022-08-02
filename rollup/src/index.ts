import express, { Express, Request, Response } from 'express';
import path from 'path';

const app: Express = express();
const {
    PORT = 3000
} = process.env;

app.use(express.static(path.join(__dirname, "..", "dist")));

app.get('/', (req: Request, res: Response): void => {
    res.sendFile(path.join(__dirname, "..", "dist" , "index.html"));
})

if (require.main == module) {
    app.listen(PORT, (): void => {
        console.log(`Server started at http://localhost:${PORT}`)
    })
}

export default app;