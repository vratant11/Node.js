const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mydata", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successfull...."))
  .catch((err) => console.log(err));

const playSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Playlist = new mongoose.model("Playlist", playSchema);

const createDocument = async () => {
  try {
    const reactPlaylist = new Playlist({
      name: "Node JS",
      ctype: "Back End",
      videos: 50,
      author: "Thapa Technical",
      active: true,
    });

    const result = await reactPlaylist.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// createDocument();

const getDocument = async () =>{
  try{
    const result = await Playlist.find({ctype : "Back End"})
    .select({name:1})
    .limit(1);
    console.log(result);
  
  }
  catch(err){
    console.log(err);
  }
}

// getDocument();


const updateDocument = async (_id) =>
{
  try{
    const result = await Playlist.findByIdAndUpdate({_id},
      {
      $set : {
        name : "Nodemon"
      },   
      },{
        new : true,
        useFindAndModify : false
      });
    console.log(result);
  
  }catch(err){
     console.log(err);
  }
}

updateDocument("638de213c037b3bb74188b08");



