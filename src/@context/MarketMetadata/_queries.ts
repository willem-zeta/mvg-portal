import { gql } from 'urql'

export const opcQuery = gql`
  query OpcQuery {
    opcs {
      swapOceanFee
      swapNonOceanFee
      approvedTokens {
        address: id
        symbol
        name
        decimals
      }
      id
    }
  }
`
