class SingleTonDemo {
  private static instance: SingleTonDemo;

  // static.ref

  private constructor() {}

  public static getInstance(): SingleTonDemo {
    if (!SingleTonDemo.instance) {
      SingleTonDemo.instance = new SingleTonDemo();
    }
    return this.instance;
  }
}

const reference: SingleTonDemo = SingleTonDemo.getInstance();
const reference2: SingleTonDemo = SingleTonDemo.getInstance();
// const reference2: any = SingleTonDemo.getInstance();

console.log(reference === reference2);
