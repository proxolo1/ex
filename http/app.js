const http = require('http');
const controller = require('./controller')
const getRequest = require('./utils')
const PORT = 1212;
const server = http.createServer((req, res) => {
    if (req.url === "/api/todo" && req.method === "GET") {
        res.writeHead(200, { contentType: 'application/json' });
        res.write(controller.getTodo());
        res.end();
    }
    else if (req.url.match(/\/api\/todo\/([0-9]+)/) && req.method === "GET") {
        res.writeHead(200, { contentType: 'application/json' });
        res.write(controller.getTodoId(req.url.split('/')[3]));
        res.end();
    }
    else if (req.url === "/api/todo/create" && req.method === "POST") {
        res.writeHead(200, { contentType: 'application/json' });
        // res.write(controller.createTodo(getRequest(req)))
        console.log(getRequest(req));
        res.end();
    }
    else {
        res.writeHead(404, { contentType: 'application/json' });
        res.write("fudck");
        res.end();
    }
});
server.listen(PORT, () => {
    console.log(`server running successfully ${PORT}`);
});