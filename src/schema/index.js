const { gql } = require("apollo-server");

// Query 1: get team info query (requires team id )
// Query 2: get players of teams (requires player id)

const typeDefs = gql`
  type Team {
    id: ID
    country: String
    name: String
    shortName: String
    logoUrl: String
    website: String
    founded: Int
    clubColors: String
    stadium: String
    squad: [Player]
  }

  type Player {
    id: ID
    name: String
    position: String
    dateOfBirth: String
    nationality: String
    role: String
  }

  type Query {
    team(id: ID!): Team
  }
`;

module.exports = typeDefs;
