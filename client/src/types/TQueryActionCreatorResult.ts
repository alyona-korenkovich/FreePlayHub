import { QueryActionCreatorResult } from '@reduxjs/toolkit/dist/query/core/buildInitiate';
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    QueryDefinition,
} from '@reduxjs/toolkit/query';
import { TFetchGamesParams } from './TFetchGamesParams';
import { RetryOptions } from '@reduxjs/toolkit/dist/query/retry';
import { TGame } from './TGame';
import { TNoResults } from './TNoResults';

export type TQueryActionCreatorResult = QueryActionCreatorResult<
    QueryDefinition<
        TFetchGamesParams,
        BaseQueryFn<
            string | FetchArgs,
            unknown,
            FetchBaseQueryError,
            unknown & RetryOptions,
            FetchBaseQueryMeta
        >,
        never,
        TGame[] | TNoResults,
        'gameAPI'
    >
>;
