import {Schema,model,Document} from "mongoose";

interface Counter_If extends Document {
    id:string;
    seq:number;
}

const CounterSchema = new Schema<Counter_If>({
    id:{type:String,required:true},
    seq:{type:Number,default:0}
});

export const CounterModel = model("counter",CounterSchema);
