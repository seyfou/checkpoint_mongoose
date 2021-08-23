let mongoose = require ('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Database connection successful')
  })
  .catch(err => {
    console.error('Database connection error')
  }) 
let person=new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFoods: [String]
})
const personne=mongoose.model('personne',person);
let anonym=new personne({
    name:'Seifeddine',
    age:29,
    favoriteFoods:['Daurade','salade de fruit de mer']
})
anonym.save()
.then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })
// personne.create([{name:'John',age:35,favoriteFoods:['Pizza']},{name:'Michael',age:24,favoriteFoods:['Lazania']}])


// personne.find({name:'John'})
// .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })


// personne.findOne({favoriteFoods:['Pizza']})
// .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })


// personne.findById('61240c45c1d7e7456079c248')
// .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })


// personne.findById('61240b01e611c54d94685d5c')
// .then(doc => {doc.favoriteFoods.push('hamburger')
// doc.save()
//   console.log(doc)
// })
// .catch(err => {
//   console.error(err)
// })


// personne.findOneAndUpdate({name:'John'},{age:50},{new:true})
// .then(doc => {
//   console.log(doc)
// })
// .catch(err => {
//   console.error(err)
// })


// personne.findOneAndRemove({name:'John'})
// .then(doc => {
//   console.log(doc)
// })
// .catch(err => {
//   console.error(err)
// })


// personne.find({name:'John'}).sort({date_added: -1 }).limit(2).select('name')
// .then(doc => {
//   console.log(doc)
// })
// .catch(err => {
//   console.error(err)
// })