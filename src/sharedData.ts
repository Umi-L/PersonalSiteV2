import { writable, type Writable } from "svelte/store";

export enum Language {
    EN = "en",
    FR = "fr",
}

export const language: Writable<Language> = writable(Language.EN);



export enum FollowerMode {
    INVERTED = "inverted",
    READ_MORE = "read-more",
    HIDDEN = "hidden",
}

export const followerMode: Writable<FollowerMode> = writable(FollowerMode.INVERTED);

export const darkMode: Writable<boolean> = writable(true);

export const projectDescription: Writable<string> = writable("");