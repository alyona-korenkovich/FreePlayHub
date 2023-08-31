import { TGame } from './TGame';
import { Dispatch, LegacyRef, SetStateAction } from 'react';
import { TFetchGamesParams } from './TFetchGamesParams';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

export type TGameList = {
    isLoading: boolean;
    error: FetchBaseQueryError | SerializedError | undefined;
    games: TGame[] | undefined;
    setParams: Dispatch<SetStateAction<TFetchGamesParams>>;
    endOfListRef: LegacyRef<HTMLDivElement> | undefined;
};
