import {Transaction} from "./transaction";

export class Block {
  nonce: number;
  previousHash: string;
  txs: Transaction[];
  timestamp: number;

  constructor(nonce: number, previousHash: string, txs: Transaction[], timestamp: number) {
    this.nonce = nonce;
    this.previousHash = previousHash;
    this.txs = txs;
    this.timestamp = timestamp;
  }

  print() {
    console.log("timestamp: ", this.timestamp);
    console.log("nonce:      ", this.nonce);
    console.log("previousHash:", this.previousHash);
    console.log("txs: ", this.txs);
  }

  hash() {

  }

}
