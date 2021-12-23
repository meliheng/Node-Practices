const fs = require("fs");

//! CREATE FOLDER AND WRITE DATA

fs.writeFile(
	"employees.json",
	'{"name":"Employee 1 Name","salary":2000}',
	"utf8",
	(err) => {
		if (err) return console.log(err);
		console.log("YENI VERI EKLENDI");
	}
);

//! READ DATA

fs.readFile("employees.json", "utf8", (err, data) => {
	if (err) return console.log(err);
	console.log(data);
});

//! UPDATE DATA

fs.writeFile(
	"employees.json",
	'{"name":"Melih","salary":30000}',
	"utf8",
	(err) => {
		if (err) return console.log(err);
		console.log("KAYIT GUNCELLENDI");
	}
);

//! DELETE FOLDER

fs.unlink("employees.json", (err) => {
	if (err) return console.log(err);
	console.log("DOSYA BASARIYLA SILINDI");
});
