import { Person } from "../models/person.model";
export class PersonController {
  public getPersons = (req: any, res: any) => {
    console.log("Get Persons Controller");
    Person.find(req.query).then((people: any) => {
      res.send(people);
    }).catch((err: any) => {
      console.log(err);
      res.status(500).send("Error Occurred");
    });
  }

  public getPerson = (req: any, res: any) => {
    Person.findById(req.params.id)
    .then((person: any) => {
      if (!person) {
        return res.status(404).send();
      }

      return res.send(person);
    }).catch((err: any) => {
      console.log(err);
      res.status(500).send("Error Occurred");
    });
  }

  public getPersonByName = (req: any, res: any) => {
    Person.findByName(req.params.name)
    .then((person: any) => {
      if (!person) {
        return res.status(404).send();
      }
      return res.send(person);
    });
  }

   public addPerson = (req: any, res: any) => {
     const person = new Person(req.body);
    //  person.add()
    //  .then((person:any) => {
    //    res.location(`${req.url}/${person._id}`).send({...person});
    //  }).catch((err:any) => {
    //    console.log(err);
    //    res.status(500).send('Error Occurred');
    //  });
   }

   public addManyPeople = (req: any, res: any) => {
     console.log("Add Many People");
     res.send("Add Many People");
   }

   public updatePerson = (req: any, res: any) => {
     console.log("Update Person");
     res.send("Update Person");
   }

  public deletePerson = (req: any, res: any) => {
    console.log("Delete Person");
    res.send("Delete Person");
  }

  /* Friend Controller Methods */
  public findMostPopularFriend = (req: any, res: any) => {
    Person.findMostPopularFriend()
    .then((result: any) => {
      res.send(result);
    }).catch((err: any) => {
      console.log(err);
      res.status(500).send("Error Occurred");
    });
  }

  public findMostPopularTags = (req: any, res: any) => {
    Person.findMostPopularFriend()
    .then((result: any) => {
      res.send(result);
    }).catch((err: any) => {
      console.log(err);
      res.status(500).send("Error Occurred");
    });
  }

  public updateFriend = (req: any, res: any) => {
    console.log("Person Controller -> Update Friend");
    res.send("Find most popular friend controller");

  }

  public findFriend = (req: any, res: any) => {
    console.log("Person Controller -> Find Friend");
    res.send("Find friend");
  }

  public extractUniqueFriends = (req: any, res: any) => {
    console.log("Person Controller -> extractUniqueFriends");
    res.send("extractUniqueFriends");
  }

  public findUniqueFriends = (req: any, res: any) => {
    console.log("Person Controller -> findUniqueFriends");
    res.send("findUniqueFriends");
  }

  public addRandomColorToCollection = (req: any, res: any) => {
    console.log("Person Controller -> addRandomColorToCollection");
    res.send("addRandomColorToCollection");
  }

  public extractFiveRecords = (req: any, res: any) => {
    console.log("Person Controller -> extractFiveRecords");
    res.send("extractFiveRecords");
  }
}
