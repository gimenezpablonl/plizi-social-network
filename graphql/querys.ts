import { gql } from "graphql-request";

export const getUser = gql`
  query GetUser($username: String!) {
    getUserByUsername(username: $username) {
      username
      name
      avatar
    }
  }
`;

export const getProfile = gql`
  query GetProfile($username: String!) {
    getUserByUsername(username: $username) {
      username
      name
      avatar
      dob
      location
    }
  }
`;

export const getPosts = gql`
  query GetPosts {
    getPosts {
      data {
        _id
        author {
          username
          avatar
        }
        text
      }
    }
  }
`;
