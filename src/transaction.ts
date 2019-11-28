import * as crypto from "crypto"

export class Transaction {
  senderAddress: string;
  recipientAddress: string;
  value: number;

  constructor(sender: string, recipient: string, value: number) {
    this.senderAddress = sender;
    this.recipientAddress = recipient;
    this.value = value;
  }

  hash(): Buffer {
    const json = {
      senderAddress: this.senderAddress,
      recipientAddress: this.recipientAddress,
      value: this.value,
    };
    // console.log(JSON.stringify(json));
    const buf = Buffer.from(JSON.stringify(json), "utf8");
    return crypto.createHash("sha256").update(buf).digest();
  }
}
