const Contact = require('./../model/contactUs')

const getContactUs = (req,res)=>{
    res.render('contactUs',{title:'Contact Us'})
}

const postContactUs = (req,res)=> {
    const Contacts = new Contact(req.body)
    Contacts.save()
   .then( r => res.redirect('/contactUs'))
   .catch( err => console.log(err))
}

const deleteContactUs = (req,res)=>{
    const id = req.params.id
    // console.log(id)
    Contact.findByIdAndDelete(id)
    .then(result =>res.json({redirect :('/Host')}))
    .catch(err => console.log(err)) 
}

module.exports ={
    getContactUs,
    postContactUs,
    deleteContactUs
}