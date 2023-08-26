import { TGameScreenshot } from './TGameScreenshot';
import { TGameMinimumSystemRequirements } from './TGameMinimumSystemRequirements';

export type TGame = {
    id: number;
    title: string;
    thumbnail: string;
    status?: string; // -
    short_description?: string; // -
    description?: string; // -
    game_url?: string; // -
    genre: string;
    platform?: string;
    publisher: string;
    developer?: string;
    release_date: string;
    freetogame_profile_url?: string; // -
    minimum_system_requirements?: TGameMinimumSystemRequirements;
    screenshots?: Array<TGameScreenshot>;
};
