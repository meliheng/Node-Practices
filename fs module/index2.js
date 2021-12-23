const fs = require("fs");

//! DOSYA OKUMAK

// fs.readFile("password.txt", "utf8", (err, data) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log(data);
// 	console.log("DOSYA OKUNDU");
// });

//! DOSYA YAZMAK

// fs.writeFile("example.json", '{"name":"melih","age":23}', "utf8", (err) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log("JSON DOSYA BAŞARILI BİR ŞEKİLDE OLUŞTURULDU");
// });

//! VERİ EKLEMEK
// fs.appendFile("example.txt", "\n KODLUYORUZ 22222", "utf8", (err) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log("YENİ VERİ EKLENDİ");
// });

//! DOSYA SİLMEK
// fs.unlink("example.json", (err) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log("DOSYA SİLİNDİ");
// });

//! KLASORLER OLUŞTURMAK

// fs.mkdir("uploads/img", { recursive: true }, (err) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log("KLASORLER OLUSTURULDU");
// });

//!KLASORLER SİLMEK

// fs.rmdir("uploads", { recursive: true }, (err) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log("KLASORLER SILINDI");
// });
