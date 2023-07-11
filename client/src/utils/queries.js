import { gql } from '@apollo/client';

export const GET_ME = gql`
  query GET_ME {
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