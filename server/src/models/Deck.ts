import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const deckSchema = new Schema({
  title: String,
});

const deckModel = mongoose.model("Deck", deckSchema);

export default deckModel;
