const notFound = (response) => {
    // Send not found response
    response.writeHead(404, {"Content-Type": "application/json"});
    response.write(JSON.stringify({ message: "Not found" }));
    response.end();
};

const handler = (request, response) => {

    const { url, headers, method } = request;

    if (method === "POST") {
        // Extract the body from the request
        let body = [];
        request.on("data", (chunk) => {
            body.push(chunk);
        }).on("end", () => {
            body = Buffer.concat(body).toString();
            console.log(body);

            // Add generate endpoint
            if (url === "/generate") {
                response.writeHead(200, {"Content-Type": "application/json"});
                response.write(JSON.stringify({ message: "Hello from the other side"}));
                response.end();
                return;
            }

            notFound(response);
            return;
        });
        return;
    }

    notFound(response);
    return;

};

module.exports = handler;