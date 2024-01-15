import {models,model, Schema} from "mongoose"

const UserSchema = new Schema({
    email: {
            type: String, 
            required: true, 
            unique: true
    },
    password: {
        type: String,
        required:true,
        validate: pass => {
            console.log(pass);
            if (!pass?.length || pass.length < 5)
            {
                new Error('password must be at laste 5 characters');
                return false;
            }
        }
    }
}, {timestamps: true}) // for see time


UserSchema.post('validate', function(doc){
    console.log("validate=[" + doc + "]");
})


export const User = models?.User || model("User", UserSchema)









// // export default User;
// import { Document, Model } from "mongoose";
// import * as Mongoose from "mongoose";

// const postSchema = new Mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   type: {
//     type: String,
//     required: false,
//   },
// });
// //how our post looks like
// interface IPost {
//   name: string;
//   type: string;
// }

// interface IPostDocument extends IPost, Document {}
// interface IPostModel extends Model<IPostDocument> {}

// //postSchema->Document->Model

// // const PostModel: IPostModel = Mongoose.model<IPostDocument>("post", postSchema);

// const PostModel: IPostModel =
//   Mongoose.models.post || Mongoose.model<IPostDocument>("post", postSchema);

// export default PostModel;