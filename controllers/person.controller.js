const Person = require('../models/person.model');

exports.getPersons = (req, res, next) => {
  Person.find(req.query).then(people => {
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

exports.getPersonByName = (req, res, next) => {
  Person.findByName(req.params.name)
    .then(person => {
      if (!person)
        return res.status(404).send();
      return res.send(person);
    })
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

exports.findMostPopularTagFemales = (req, res, next) => {
  Person.findMostPopularTagForFemales()
  .then( tags => {
    res.send(tags);
  }).catch( error => {
    console.log(error);
    res.status(500).send('Error Occurred');
  })
}

exports.findMostPopularTagMales = (req, res, next) => {
  Person.findMostPopularTagForMales()
  .then( tags => {
    res.send(tags);
  }).catch( error => {
    console.log(error);
    res.status(500).send('Error Occurred');
  })
}

exports.updateFriend =(req, res, next) => {
  //console.log(req.body);
  Person.updateFriend(req.body)
  .then(result => {
      res.send(result);
    }
  ).catch( error => {
    console.log(error);
    res.status(500).send('Error Occurred');
  })
  
}

exports.findFriend = (req, res, next) => {

  Person.findFriend(req.query)
  .then( result => {
      res.send(result);
  }).catch( err => {
    console.log(err);
    res.status(500).send('Internal server error');
  });
}

exports.extractUniqueFriends = (req, res, next) => {
  Person.extractUniqueFriends(req.params.collection)
    .then(result => {
      res.send(result);
    }).catch( err => {
      console.log(err);
      res.status(500).send('Internal server error');
    });
}

exports.findUniqueFriends = (req, res, next) => {
  Person.findUniqueFriends(req.params.collection, req.query)
    .then(friends => {
      res.send(friends);
    }).catch( err => {
      console.log(err);
      res.status(500).send('Internal server error');
    });
}

