import {Block} from "./block";
import {Blockchain} from "./blockchain";


const bc = new Blockchain();
bc.print();
// const b = new Block(1, "init hash", [], (new Date()).getDate());
// b.print();

bc.addTransaction("A", "B", 100);
bc.createBlock(2, "hash2");
bc.print();
bc.addTransaction("C", "D", 1.0);
bc.addTransaction("E", "F", 30.0);
bc.createBlock(5, "hash3");
bc.print();
