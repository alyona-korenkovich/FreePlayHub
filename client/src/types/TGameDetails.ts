import { TGame } from './TGame';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

export type TGameDetails = {
    isLoading: boolean;
    error: FetchBaseQueryError | SerializedError | undefined;
    details: TGame | undefined;
};
