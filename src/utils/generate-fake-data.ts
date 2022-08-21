import * as Faker from "faker";

type Callback = (faker: typeof Faker) => any;

export const generateFakeData = (length: number, callback: Callback) => {
	return new Array(length).fill(null).map(() => callback(Faker));
}