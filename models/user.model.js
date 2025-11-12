import mongoose from "mongoose";
import encryptPassword from '../util/encryptPassword.js';

const userSchema = new mongoose.Schema({

    username :{
       type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password:{
        type: String,
        required:true,
        minLength:6
    },
    refreshToken: {
        type:String,
        default: null
    },
    type:{
        type: String,
        enum: ["user","admin"],
        default: "user"
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
},{timestamps:true})

userSchema.pre("save", async function(next){
     if (!this.isModified('password')) {
            return next();
        }
    this.password = await encryptPassword(this.password);
    next();
})

userSchema.pre('deleteOne', { document: true }, async function(next) {
  const userId = this._id;
  const collections = await Collection.find({ authors: userId });

  for (const collection of collections) {
    await Post.deleteMany({ collectionId: collection._id });
    await collection.deleteOne();
  }

  next();
});


const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User