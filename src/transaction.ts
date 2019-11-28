export class Transaction{
  public senderAddress: string;
  public recipientAddress: string;
  public value: number;

  constructor(sender:string, recipient: string, value:number){
    this.senderAddress = sender;
    this.recipientAddress = recipient;
    this.value = value;
  }
}
