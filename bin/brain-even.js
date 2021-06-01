import readlineSync from 'readline-sync';
import name from '../src/cli.js';

const isEven = () => {
	console.log('Answer "yes" if the number is even, otherwise answer "no".');

	const getRandomInt = (max) => {
		return Math.floor(Math.random() * max);
	};
	let num = getRandomInt(100);

	const even = (num) => {
		return num % 2 == 0 ? 'yes' : 'no';
	};
	let iter = 0;

	while (iter < 3) {
		const num = getRandomInt(100);
		const answerPlayer = readlineSync.question(
			`Question: ${num}\nYour answer:`
		);
		const answerComputer = even(num);
		if (answerPlayer == answerComputer) {
			console.log('Correct!');
			iter = iter + 1;
			if (iter == 3) {
				console.log(`Congratulations, ${name}!`);
			}
		} else {
			console.log(
				`'${answerPlayer}' is wrong answer ;(. Correct answer was '${answerComputer}'`
			);
			console.log(`Let's try again, ${name}!`);
			break;
		}
	}
};
export default isEven;
