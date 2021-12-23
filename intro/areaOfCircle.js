const arg = process.argv.slice(2);
function CircleArea(radius) {
	const area = 3.14 * Math.pow(radius, 2);
	console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`);
}
CircleArea(arg[0]);
