import { TGame } from './TGame';

export type TGameDetails = {
    isLoading: boolean;
    error: boolean;
    details: TGame | undefined;
};
