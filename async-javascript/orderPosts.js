const posts = [
	{
		id: 1,
		title: "About React",
		content: "React is the JS framework",
		author: "Melih",
	},
	{
		id: 2,
		title: "About Vue",
		content: "Vue is the JS framework",
		author: "Ahmet",
	},
	{
		id: 3,
		title: "About Angular",
		content: "Angular is the JS framework",
		author: "Melih",
	},
];
const listPosts = () => {
	posts.map((post) => console.log(post.content));
};
const addPost = (post) => {
	return new Promise((resolve, reject) => {
		posts.push(post);
		resolve("post eklendi");
	});
};

async function processPost() {
	try {
		await addPost({
			id: 4,
			title: "About Javascript",
			content: "Javascript is used to construct web projects",
			author: "Fatma",
		});
		listPosts();
	} catch (error) {
		console.log(error);
	}
}

listPosts();
console.log("-----------------------------------");
processPost();
