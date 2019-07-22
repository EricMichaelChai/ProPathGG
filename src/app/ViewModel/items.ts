class ModelBase {
    [index: string]: any;
  
    constructor(data: any) {
      this.init(data);
    }
    init(data: any) {
      for (const key of Object.keys(this)) {
        // automap anything with the same property names
        this[key] = data[key];
      }
    }
  }

export class BaseItem extends ModelBase {
  name:string;
  description:string;
  imagePath:string;
}
export class CombinedItem extends BaseItem {
  name: string;
  description: string;
  imagePath:string;
  madeOf: Array<BaseItem>;
}
