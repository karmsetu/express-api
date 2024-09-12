import mongoose, { Schema, model, Document } from 'mongoose';

// Define an interface to represent a contact document in MongoDB
interface IContact extends Document {
    name: string;
    email: string;
    phone: string;
    user_id: mongoose.Schema.Types.ObjectId;
}

// Define the schema for a contact
const contactSchema = new Schema<IContact>(
    {
        name: {
            type: String,
            required: [true, 'please add the conact name'],
            // trim: true,
        },
        email: {
            type: String,
            required: [true, 'please add the conact email'],
            // unique: true,
            // trim: true,
            // lowercase: true,
            // validate: {
            //     validator: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), // Basic email validation
            //     message: (props: { value: string }) =>
            //         `${props.value} is not a valid email!`,
            // },
        },
        phone: {
            type: String,
            required: [true, 'please add the conact phone'],
            // unique: true,
            // validate: {
            //     validator: (v: string) => /\d{10,}/.test(v), // Simple phone number validation (min 10 digits)
            //     message: (props: { value: string }) =>
            //         `${props.value} is not a valid phone number!`,
            // },
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    },

    {
        timestamps: true,
    }
);

// Create the model from the schema and export it
const Contact = model<IContact>('Contact', contactSchema);

export default Contact;
