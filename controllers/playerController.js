const Players = require('./../model/Players')
const contactUs = require('./../model/contactUs')

const playerList = (req,res)=> {
    Players.find().sort({Score: -1,Age:-1}) 
    .then(result => res.render('Players',{title:'TOP 10 Players',Players:result}))
    .catch(err => console.log(err))
}

const get_NewGame = (req,res)=>{
    res.render('Game',{title:'Game'})
}

const post_NewGame = (req,res)=> {
    const Player = new Players(req.body)
    Player.save()
    .then( r => res.redirect('Players'))
   .catch( err => console.log(err))
}
const get_Host = (req,res)=>{
    res.render('Host',{title:'Host Page'})
}
const post_Host = (req,res)=> {
    var Contact
    contactUs.find().sort() 
    .then(result =>{ Contact=result,
    Players.find().sort({CreatedAt: -1})
    .then(result =>{res.render('Host-Players',{title:'Host Page',Players:result,contactUs:Contact})})
    .catch(err => console.log(err))})
    .catch(err => console.log(err))
    
}
const delete_Player = (req,res)=>{
    const id = req.params.id
    Players.findByIdAndDelete(id)
    .then(result =>res.json({redirect :('/Host')}))
    .catch(err => console.log(err)) 
}

module.exports ={
    playerList,
    get_NewGame,
    post_NewGame,
    get_Host,
    post_Host,
    delete_Player
}