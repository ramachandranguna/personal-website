
import express from 'express';
const next = require('next');
const bodyParser = require('body-parser');
const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
// var cookieParser = require('cookie-parser');

const handle = app.getRequestHandler()

export default app.prepare().then(() => {
    const server: express.Application = express();
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    // server.use(cookieParser());
    server.get('/category/:slug', (req: any, res: any) => {
        const {
            params: { slug },
        } = req;
        let categoryId = slug.split('-').pop();
        return app.render(req, res, `/category/${slug}`, {
            ...req.query,
            categoryId,
        });
    });
    server.all('*', (req: any, res: any) => {
        return handle(req, res);
    });

    server.listen(port, () => {
        console.log(`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV
            }`);
    });
})