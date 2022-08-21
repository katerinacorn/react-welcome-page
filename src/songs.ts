import faker from "faker";

export const songs = [
  {
    author: faker.name.firstName(),
    album: faker.name.jobType(),
    name: faker.name.jobTitle(),
    avatarUrl: faker.image.animals(),
    explicitContent: faker.random.boolean(),
    lyrics: faker.lorem.paragraphs(),
    url: "https://www.chosic.com/wp-content/uploads/2021/04/And-So-It-Begins-Inspired-By-Crush-Sometimes.mp3",
  },
  {
    author: faker.name.firstName(),
    album: faker.name.jobType(),
    name: faker.name.jobTitle(),
    avatarUrl: faker.image.business(),
    explicitContent: faker.random.boolean(),
    lyrics: faker.lorem.paragraphs(),
    url: "https://www.chosic.com/wp-content/uploads/2021/05/inossi-got-you.mp3"
  },
  {
    author: faker.name.firstName(),
    album: faker.name.jobType(),
    name: faker.name.jobTitle(),
    avatarUrl: faker.image.fashion(),
    explicitContent: faker.random.boolean(),
    lyrics: faker.lorem.paragraphs(),
    url: "https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3"
  },
  {
    author: faker.name.firstName(),
    album: faker.name.jobType(),
    name: faker.name.jobTitle(),
    avatarUrl: faker.image.food(),
    explicitContent: faker.random.boolean(),
    lyrics: faker.lorem.paragraphs(),
    url: "https://www.chosic.com/wp-content/uploads/2021/07/purrple-cat-equinox.mp3"
  }
];
