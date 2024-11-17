import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		const mongoDBUri = "mongodb+srv://tu:tr@cluster0.s52ue7m.mongodb.net/ch";
		await mongoose.connect(mongoDBUri);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;