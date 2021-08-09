import { Injectable } from "@angular/core";
import { gql, Query } from "apollo-angular";

export const TRACKED_TOKEN = "0x3a3df212b7aa91aa0402b9035b098891d276572b"

/**
 * Daily price data for a certain token
 */
export interface TokenDayData {
    date: number;
    priceUSD: number;
}

/**
 * A token tracked in the exchange.
 */
export interface Token {
    id: string;
    symbol: string;
    name: string;
    tokenDayData: Array<TokenDayData>;
}

@Injectable({
    providedIn: 'root'
})
export class TokenPriceDataFeed extends Query<Token> {
    document = gql`
        query tokenPriceDataFeed($tokenId: String!, $numberOfDays: Int!) {
            token(id: $tokenId) {
                symbol
                name
                tokenDayData(orderBy: date, orderDirection: desc, first: $numberOfDays) {
                    date
                    priceUSD
                }
            }
        }
    `
}