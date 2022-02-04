//Database connection
const dburl= "mongodb+srv://<username>:<password>@cluster0.9f9un.mongodb.net/<dbName>?retryWrites=true&w=majority"
const connectionParams= {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(dburl,connectionParams).then(()=>{
    console.log("connected to the db");
}).catch((e)=>{
    console.log("Error:",e);
})
//database connection end
