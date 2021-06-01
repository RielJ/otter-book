import gql from "graphql-tag";

const CREATE_OTTER = gql`
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

export default CREATE_OTTER;
