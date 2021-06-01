import gql from "graphql-tag";

const GET_OTTER = gql`
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

export default GET_OTTER;
