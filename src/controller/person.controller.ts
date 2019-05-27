export class PersonController {
  public getPersons = (req: any, res: any) => {
    console.log("Get Persons Controller");
    res.send("Get Persons Controller");
  }

  public getPerson = (req: any, res: any) => {
    console.log("Get Person Controller");
    res.send("Get Person Controller");
  }

  public getPersonByName = (req: any, res: any) => {
    console.log("Get Person By Name Controller");
    res.send("Get Person By Name Controller");
  }

  public addPerson = (req: any, res: any) => {
    console.log("Add Person");
    res.send("Add Person");
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
    console.log("Person Controller -> Find Most Popular Friend");
    res.send("Find most popular friend controller");
  }

  public findMostPopularTags = (req: any, res: any) => {
    console.log("Person Controller -> Find Most Popular Tag");
    res.send("Find most popular tag controller");
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
