import { TGame } from './TGame';
import { Dispatch, LegacyRef, SetStateAction } from 'react';
import { TFetchGamesParams } from './TFetchGamesParams';

export type TGameList = {
    isLoading: boolean;
    error: boolean;
    games: TGame[] | undefined;
    setParams: Dispatch<SetStateAction<TFetchGamesParams>>;
    endOfListRef: LegacyRef<HTMLDivElement> | undefined;
};
