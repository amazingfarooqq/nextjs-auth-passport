import mongoose from "mongoose";

const connect = () => {
  mongoose.connect(
    'dburl',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) console.log("Error connecting to MongoDB");
      else console.log("Connected to MongoDB");
    }
  );
};

export default connect;
