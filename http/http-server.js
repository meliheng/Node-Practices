const http = require("http");

const server = http.createServer((req, res) => {
	const url = req.url;
	if (url === "/index") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<h2>Index Sayfasina Hosgeldiniz</h2>");
	} else if (url === "/about") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<h2>Hakkimda Sayfasina Hosgeldiniz</h2>");
	} else if (url === "/contact") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<h2>Iletisim Sayfasina Hosgeldiniz</h2>");
	}
	res.end();
});

const port = 5000;
server.listen(port, () => {
	console.log(`server ${port} numaralı portta başarıyla oluşturuldu.`);
});
