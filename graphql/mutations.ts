import { gql } from "graphql-request";

// AUTH

export const loginUser = gql`mutation LoginUser($username: String!, $password: String!) {loginUser(input: { username: $username, password: $password })}`;

export const createUser = gql`
mutation CreateUser($username: String!, $name: String!, $password: String!, $avatar: String, $dob: Date!, $location: String) {
  createUser(
    input: {
      username: $username,
      password: $password,
      name: $name,
      avatar: $avatar,
      dob: $dob,
      location: $location
    }
  )
  {
    username
    name
    avatar
    dob
    location
  }
}
`;

// POSTS

export const createPost = gql`
mutation CreatePost($text: String!) {
  createPost(input: { text: $text }) {
    author {
      username
      name
      avatar
    }
    text
  }
}
`;