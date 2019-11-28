import {Block} from "./block";
import {Blockchain} from "./blockchain";


const bc = new Blockchain();
bc.print();
// const b = new Block(1, "init hash", [], (new Date()).getDate());
// b.print();

bc.addTransaction("A", "B", 100);

let previousHash = bc.getLastBlock().hash().toString("hex");
let nonce = bc.proofOfWork();
bc.createBlock(nonce, previousHash);
bc.print();

bc.addTransaction("C", "D", 1.0);
bc.addTransaction("E", "F", 30.0);
previousHash = bc.getLastBlock().hash().toString("hex");
nonce = bc.proofOfWork();
bc.createBlock(nonce, previousHash);
bc.print();

bc.addTransaction("C", "D", 1.0);
bc.addTransaction("E", "F", 30.0);
previousHash = bc.getLastBlock().hash().toString("hex");
nonce = bc.proofOfWork();
bc.createBlock(nonce, previousHash);
bc.print();
