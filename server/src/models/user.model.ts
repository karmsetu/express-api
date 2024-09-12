import { Schema, model, Document } from 'mongoose';

// Define an interface to represent a contact document in MongoDB
interface IUser extends Document {
    username: string;
    email: string;
    password: string;
}

// Define the schema for a contact
const userSchema = new Schema<IUser>(
    {
        username: {
            type: String,
            required: [true, 'please add the user name'],
            // trim: true,
        },
        email: {
            type: String,
            required: [true, 'please add the user email'],
            unique: true,
            // trim: true,
            // lowercase: true,
            // validate: {
            //     validator: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), // Basic email validation
            //     message: (props: { value: string }) =>
            //         `${props.value} is not a valid email!`,
            // },
        },
        password: {
            type: String,
            required: [true, 'please add the user password'],
            // unique: true,
            // validate: {
            //     validator: (v: string) => /\d{10,}/.test(v), // Simple phone number validation (min 10 digits)
            //     message: (props: { value: string }) =>
            //         `${props.value} is not a valid phone number!`,
            // },
        },
    },

    {
        timestamps: true,
    }
);

// Create the model from the schema and export it
const User = model<IUser>('User', userSchema);

export default User;
