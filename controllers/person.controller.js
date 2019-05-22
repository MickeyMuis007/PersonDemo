const Person = require('../models/person.model');

exports.getPersons = (req, res, next) => {
  Person.find().then(people => {
    res.send(people);
  }).catch(err => {
    console.log(err);
    res.status(500).send('Error Occurred');
  });
}

exports.getPerson = (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      if (!person)
        return res.status(404).send();

      return res.send(person);
    }).catch(err => {
      console.log(err);
      res.status(500).send('Error Occurred');
    });
}

exports.addPerson = (req, res, next) => {
  const person = new Person(req.body);
  person.add()
    .then(person => {
      res.location(`${req.url}/${person._id}`).send({...person});
    }).catch(err => {
      console.log(err);
      res.status(500).send('Error Occurred');
    });
}

exports.updatePerson = (req, res, next) => {
  const person = new Person(req.body);
  person.update();
  res.send('Update Person');
}

exports.deletePerson = (req, res, next) => {
  Person.deleteById();
  res.send('Delete Person');
}


// Friend Controllers
exports.findMostPopularFriend = (req, res, next) => {
  Person.findMostPopularFriend()
    .then(result => {
      res.send(result);
    }).catch(err => {
      console.log(err);
      res.status(500).send('Error Occurred');
    });
}
