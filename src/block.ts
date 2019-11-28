import {Transaction} from "./transaction";
import * as crypto from "crypto";

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
    console.log("nonce:      ", this.nonce);
    console.log("previousHash:", this.previousHash);
    console.log("txs: ", this.txs);
    console.log("timestamp: ", this.timestamp);
  }

  hash() {
    const txs = [];
    for (const tx of this.txs) {
      const hash = tx.hash();
      txs.push(hash.toString("hex"));
    }
    const json = {
          nonce: this.nonce,
          previousHash: this.previousHash,
          txs,
          timestamp: this.timestamp,

        };
    // console.log(JSON.stringify(json));
    const buf = Buffer.from(JSON.stringify(json), "utf8");
    return crypto.createHash("sha256").update(buf).digest();
  }

}
