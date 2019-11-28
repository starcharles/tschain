import {Block} from "./block";
import {Transaction} from "./transaction";

export class Blockchain {
  MINING_DIFFILTY = 3;
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
      block.print();
    }
    console.log("******************************************************************")
  }

  createBlock(nonce: number, previousHash: string): Block {
    const b = new Block(nonce, previousHash, this.transactionPool, new Date().getTime());
    this.chain.push(b);
    this.transactionPool = [];
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

  proofOfWork() {
    let nonce = 0;
    const previousHash = this.getLastBlock().hash().toString("hex");

    for (; ; nonce++) {
      const b = new Block(nonce, previousHash, this.transactionPool, new Date().getTime());
      const blockHash = b.hash().toString("hex");
      if(blockHash.slice(0, this.MINING_DIFFILTY) === "0".repeat(this.MINING_DIFFILTY)){
        return nonce;
      }
    }
  }
}
