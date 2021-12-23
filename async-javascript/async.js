function getData(data) {
	return new Promise((resolve, reject) => {
		console.log("Veriler alınmaya çalışılıyor...");
		if (data) {
			resolve("Veriler alındı");
		} else {
			reject("Veriler alınamadı");
		}
	});
}
function cleanData(receivedData) {
	return new Promise((resolve, reject) => {
		console.log("Veriler düzenleniyor...");
		if (receivedData) {
			resolve("Veriler düzenlendi");
		} else {
			reject("Veriler düzenlenemedi");
		}
	});
}

// async function processData() {
// 	try {
// 		const receivedData = await getData(true);
// 		console.log(receivedData);
// 		const cleanedData = await cleanData(false);
// 		console.log(cleanedData);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
// processData();

const books = [
	{ name: "Kitap 1", author: "Yazar 1" },
	{ name: "Kitap 2", author: "Yazar 2" },
	{ name: "Kitap 3", author: "Yazar 3" },
];

const listBooks = () => {
	books.map((book) => {
		console.log(book.name);
	});
};
const addBook = (newBook) => {
	const promise1 = new Promise((resolve, reject) => {
		books.push(newBook);
		//resolve(books);
		reject("BIR HATA OLUŞTU");
	});
	return promise1;
};
//listBooks();
// addBook({ name: "Kitap 4", author: "Yazar 4" })
// 	.then(() => {
// 		console.log("YENI LİSTE");
// 		listBooks();
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

async function showBooks() {
	try {
		await addBook({ name: "Kitap 4", author: "Yazar 4" });
		listBooks();
	} catch (error) {
		console.log(error);
	}
}
showBooks();
