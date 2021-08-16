export class Pool {
    public stakedToken: string;
    public earnedToken: string;
    public multiplier: number = 0;
    public fee: number = 0;
    public apr: string = "0";
    public tvl: string = "0";
    public deposited: string = "0";
    public stakedString: string = "0";
    public staked: number = 0
    public earned: string = "0";
    public approved: boolean = false;
    public tokenImagePath: string;

    constructor(stakedToken: string, earnedToken: string, tokenImagePath: string) {
        this.stakedToken = stakedToken;
        this.earnedToken = earnedToken;
        this.tokenImagePath = tokenImagePath;
    }
}