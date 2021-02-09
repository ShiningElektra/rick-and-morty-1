import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElement";
import { Character, getCharacter, getCharacters } from "../../utils/api";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

export const Rick = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchenz",
    status: "Alive",
    species: "Human",
    origin: { name: "Earth (C-137)" },
  });

export const Morty = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Morty Smith",
    status: "Dead",
    species: "Human",
    origin: { name: "Earth (C-137)" },
  });

export const Multiple = () => {
  const characters: Character[] = [
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      name: "Morty Smith",
      status: "Dead",
      species: "Human",
      origin: { name: "Earth (C-137)" },
    },
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      name: "Rick Sanchenz",
      status: "Alive",
      species: "Human",
      origin: { name: "Earth (C-137)" },
    },
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/25.jpeg",
      name: "Armothy",
      status: "Dead",
      species: "unknown",
      origin: { name: "Post-Apocalyptic Earth" },
    },
  ];

  const container = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });

  return container;
};

type CharacterFromAPIProps = {
  loaded: { character: Character };
};
export const CharacterFromAPI = (
  _args,
  { loaded: { character } }: CharacterFromAPIProps
) => {
  return createCard(character);
};

// https://storybook.js.org/docs/react/writing-stories/loaders#gatsby-focus-wrapper
CharacterFromAPI.loaders = [
  async () => ({
    character: await getCharacter(2),
  }),
];

type CharactersFromAPIProps = {
  loaded: { characters: Character[] };
};
export const CharactersFromAPI = (
  _args,
  { loaded: { characters } }: CharactersFromAPIProps
) => {
  const container = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });

  return container;
};

// https://storybook.js.org/docs/react/writing-stories/loaders#gatsby-focus-wrapper
CharactersFromAPI.loaders = [
  async () => ({
    characters: await getCharacters(),
  }),
];
