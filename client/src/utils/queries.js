import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query {
    users {
      _id
      username
      email
      bookCount
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId: _id
        authors
        description
        title
        image
        link
      }
    }
  }
`;
