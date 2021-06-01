import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CreateOtterInput = {
  name: Scalars['String'];
  location: Scalars['String'];
  about: Scalars['String'];
  imageFile: Scalars['Upload'];
};

export type GetOtterInput = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOtter?: Maybe<Otter>;
};


export type MutationCreateOtterArgs = {
  input?: Maybe<CreateOtterInput>;
};

export type Otter = {
  __typename?: 'Otter';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
};

export type OtterList = {
  __typename?: 'OtterList';
  data?: Maybe<Array<Maybe<Otter>>>;
};

export type Query = {
  __typename?: 'Query';
  getOtter?: Maybe<Otter>;
  getOtterList?: Maybe<OtterList>;
};


export type QueryGetOtterArgs = {
  input?: Maybe<GetOtterInput>;
};


export type CreateOtterMutationVariables = Exact<{
  input?: Maybe<CreateOtterInput>;
}>;


export type CreateOtterMutation = (
  { __typename?: 'Mutation' }
  & { createOtter?: Maybe<(
    { __typename?: 'Otter' }
    & Pick<Otter, 'id' | 'name' | 'location' | 'about' | 'imageUrl'>
  )> }
);

export type GetOtterQueryVariables = Exact<{
  input?: Maybe<GetOtterInput>;
}>;


export type GetOtterQuery = (
  { __typename?: 'Query' }
  & { getOtter?: Maybe<(
    { __typename?: 'Otter' }
    & Pick<Otter, 'id' | 'name' | 'location' | 'about' | 'imageUrl'>
  )> }
);

export type GetOtterListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOtterListQuery = (
  { __typename?: 'Query' }
  & { getOtterList?: Maybe<(
    { __typename?: 'OtterList' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'Otter' }
      & Pick<Otter, 'id' | 'name' | 'location' | 'about' | 'imageUrl'>
    )>>> }
  )> }
);


export const CreateOtterDocument = gql`
    mutation createOtter($input: CreateOtterInput) {
  createOtter(input: $input) {
    id
    name
    location
    about
    imageUrl
  }
}
    `;
export type CreateOtterMutationFn = Apollo.MutationFunction<CreateOtterMutation, CreateOtterMutationVariables>;

/**
 * __useCreateOtterMutation__
 *
 * To run a mutation, you first call `useCreateOtterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOtterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOtterMutation, { data, loading, error }] = useCreateOtterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOtterMutation(baseOptions?: Apollo.MutationHookOptions<CreateOtterMutation, CreateOtterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOtterMutation, CreateOtterMutationVariables>(CreateOtterDocument, options);
      }
export type CreateOtterMutationHookResult = ReturnType<typeof useCreateOtterMutation>;
export type CreateOtterMutationResult = Apollo.MutationResult<CreateOtterMutation>;
export type CreateOtterMutationOptions = Apollo.BaseMutationOptions<CreateOtterMutation, CreateOtterMutationVariables>;
export const GetOtterDocument = gql`
    query GetOtter($input: GetOtterInput) {
  getOtter(input: $input) {
    id
    name
    location
    about
    imageUrl
  }
}
    `;

/**
 * __useGetOtterQuery__
 *
 * To run a query within a React component, call `useGetOtterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOtterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOtterQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOtterQuery(baseOptions?: Apollo.QueryHookOptions<GetOtterQuery, GetOtterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOtterQuery, GetOtterQueryVariables>(GetOtterDocument, options);
      }
export function useGetOtterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOtterQuery, GetOtterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOtterQuery, GetOtterQueryVariables>(GetOtterDocument, options);
        }
export type GetOtterQueryHookResult = ReturnType<typeof useGetOtterQuery>;
export type GetOtterLazyQueryHookResult = ReturnType<typeof useGetOtterLazyQuery>;
export type GetOtterQueryResult = Apollo.QueryResult<GetOtterQuery, GetOtterQueryVariables>;
export const GetOtterListDocument = gql`
    query GetOtterList {
  getOtterList {
    data {
      id
      name
      location
      about
      imageUrl
    }
  }
}
    `;

/**
 * __useGetOtterListQuery__
 *
 * To run a query within a React component, call `useGetOtterListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOtterListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOtterListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOtterListQuery(baseOptions?: Apollo.QueryHookOptions<GetOtterListQuery, GetOtterListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOtterListQuery, GetOtterListQueryVariables>(GetOtterListDocument, options);
      }
export function useGetOtterListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOtterListQuery, GetOtterListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOtterListQuery, GetOtterListQueryVariables>(GetOtterListDocument, options);
        }
export type GetOtterListQueryHookResult = ReturnType<typeof useGetOtterListQuery>;
export type GetOtterListLazyQueryHookResult = ReturnType<typeof useGetOtterListLazyQuery>;
export type GetOtterListQueryResult = Apollo.QueryResult<GetOtterListQuery, GetOtterListQueryVariables>;