const handler = (request, response) => {

    const { url, headers, method } = request;

    response.writeHead(500, {"Content-Type": "application/json"});
    response.write(JSON.stringify({ message: "Hello from the other side", url, method }));
    response.end();

};

module.exports = handler;