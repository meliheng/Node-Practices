// const promise1 = new Promise((resolve, reject) => {
// 	resolve("VERİLER ALINDI");
// 	reject("BAGLANTI HATASI");
// });

// console.log(promise1);
// promise1
// 	.then((value) => {
// 		console.log(value);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

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
addBook({ name: "Kitap 4", author: "Yazar 4" })
	.then(() => {
		console.log("YENI LİSTE");
		listBooks();
	})
	.catch((error) => {
		console.log(error);
	});
