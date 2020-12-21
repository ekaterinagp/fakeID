const router = require("express").Router();
const User = require("./classes/User");

const { ObjectID } = require("mongodb");

router.get("/users", async (req, res) => {
  let user = new User(db);
  try {
    const users = await user.getAll();
    return res.status(200).send(users);
  } catch (error) {
    if (error) {
      console.log(error);
      return res.status(500).send({ error: error });
    }
  }
});

router.get("/users/:id/spouses", async (req, res) => {
  let userEntity = new User(db);
  let { id } = req.params;
  let spouses = await userEntity.getAvailableSpouses(id);
  if (!spouses.length) {
    return res.status(200).send({ error: "No spouses available" });
  }
  return res.status(200).send(spouses);
});

router.get("/users/:id/children", async (req, res) => {
  let userEntity = new User(db);
  let { id } = req.params;
  let children = await userEntity.getAvailableChildren(id);
  if (!children.length) {
    return res.status(200).send({ error: "No children available" });
  }
  return res.status(200).send(children);
});

router.get("/users/:id", async (req, res) => {
  let user = new User(db);
  let { id } = req.params;
  try {
    const singleUser = await user.findById(id);
    if (!singleUser) {
      return res.status(400).send({ error: "wrong ID" });
    }
    return res.status(200).send({ singleUser });
  } catch (err) {
    if (err) {
      console.log(error);
      return res.status(500).send({ error });
    }
  }
});

router.post("/users", async (req, res) => {
  let userEntity = new User(db);
  let { response, status } = await userEntity.createUser(req.body);
  return res.status(status).send(response);
});

router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send({ error: "id missing" });
  }
  let userEntity = new User(db);
  user = await userEntity.findById(id);
  let bulkUpdates = [];

  let { name, address, maritalStatusId, spouseId, childId } = req.body;

  if (spouseId) {
    let spouse = await userEntity.findById(spouseId);
    if (!spouse) {
      return res.status(400).send({ error: "User does not exist" });
    }
    if (maritalStatusId == "2" || maritalStatusId == "5") {
      if (
        user.spouse &&
        user.spouse.length > 0 &&
        user.spouse[0]._id == ObjectID(spouseId)
      )
        return res.send({ message: "user already has a spouse" });
    }
    // delete spouse.spouse

    bulkUpdates.push(...userEntity.updateSpouse(user, maritalStatusId, spouse));
  }

  if (childId) {
    let child = await userEntity.findById(childId);
    if (!child) {
      return res.status(400).send({ error: "User does not exist" });
    }
    if (userEntity.calculateAge(child.dateOfBirth) >= 18) {
      return res
        .status(400)
        .send({ error: "To add a child it must be under 18" });
    }
    delete child.parents;
    bulkUpdates.push(...userEntity.updateChild(user, child));
  }

  bulkUpdates.push(...userEntity.updateUser(user, req.body));
  try {
    const response = await userCollection.bulkWrite(bulkUpdates, {
      ordered: true,
    });
    console.log(response);
    return res.status(200).send({ response });
  } catch (err) {
    if (err) {
      console.log(err);
      return res.status(500).send({ error: err });
    }
  }
});

module.exports = router;
