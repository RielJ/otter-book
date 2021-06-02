import gql from "graphql-tag";

const GET_OTTER_LIST = gql`
  query GetOtterList {
    getOtterList {
      id
      name
      location
      about
      imageUrl
    }
  }
`;

export default GET_OTTER_LIST;
