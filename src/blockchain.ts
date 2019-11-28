import {Block} from "./block";
import {Transaction} from "./transaction";

export class Blockchain {
  transactionPool: Transaction[] = [];
  chain: Block[] = [];

  constructor() {
    const d = new Date();
    const b = new Block(0, "init hash", [], d.getTime());
    this.chain.push(b)
  }

  print() {
    for (let i = 0; i < this.chain.length; i++) {
      const block = this.chain[i];
      console.log(`======================= Block${i} ===============================`);
      console.log("nonce: ", block.nonce);
      console.log("previousHash: ", block.previousHash);
      console.log("txs: ", block.txs);
      console.log("timestamp: ", block.timestamp);
    }
    console.log("******************************************************************")
  }

  createBlock(nonce: number, previousHash: string): Block {
    const b = new Block(nonce, previousHash, this.transactionPool , new Date().getTime());
    this.chain.push(b);
    return b
  }

  addTransaction(senderAddress: string, recipientAddress: string, value: number) {
    const t = new Transaction(senderAddress, recipientAddress, value);
    this.transactionPool.push(t);
  }

  getLastBlock(): Block {
    const b = this.chain[this.chain.length - 1];
    return b;
  }

}
