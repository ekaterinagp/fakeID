const MongoClient = require('mongodb');
const {MongoMemoryServer} = require("mongodb-memory-server");
// Extend the default timeout so MongoDB binaries can download when first run
jest.DEFAULT_TIMEOUT_INTERVAL = 60000;

class TestDbHelper {
  constructor() {
    this.db = null;
    this.server = new MongoMemoryServer();
    this.connection = null;
  }

  /**
   * Start the server and establish a connection
   */
  async start() {
    const url = await this.server.getUri();
    this.connection = await MongoClient.connect(
      url,
      { useNewUrlParser: true,
        useUnifiedTopology: true }
    );
    this.db = this.connection.db(await this.server.getDbName());
  }

  /**
   * Close the connection and stop the server
   */
  stop() {
    this.connection.close();
    return this.server.stop();
  }

  /**
   * Delete all collections and indexes
   */
  async cleanup() {
    const collections = await this.db.listCollections().toArray();
    return Promise.all(
      collections
        .map(({ name }) => name)
        .map(collection => this.db.collection(collection).drop())
    );
  }

  /**
   * Manually insert a document into the database and return the created document
   * @param {string} collectionName
   * @param {Object} document
   */
  async createDoc(collectionName, document) {
    const { ops } = await this.db
      .collection(collectionName)
      .insertOne(document);
    return ops[0];
  }
  async  createSampleUsers() {
    const user1 = await this.createDoc('users', {
      name: "First user",
      dateOfBirth: "010101",
      address: "Lygten 1",
      CPR: "0101010001",
      maritalStatusId: "8",
      spouse: { _id: 123456, name: "some guy" },
      genderIdentification: "0001",
    });
    const user2 = await this.createDoc('users', {
      name: "Second user",
      dateOfBirth: "020280",
      CVR: "12345678",
      address: "Lygten 3",
      companyNamy: "EG",
      CPR: "0202800002",
      genderIdentification: "0001",
    });
    const user3 = await this.createDoc('users', {
      name: "Third user",
      dateOfBirth: "101245",
      address: "Lygten",
      maritalStatusId: "2",
      CPR: "1012450002",
      spouse: { _id: 123456, name: "some guy" },
      genderIdentification: "0002",
    });
    const user4 = await this.createDoc('users', {
      name: "Fourth user",
      dateOfBirth: "101215",
      address: "Lygten",
      CPR: "1012150002",
      maritalStatusId: "8",
      genderIdentification: "0002",
    });
    const user5 = await this.createDoc('users', {
      name: "Fifth user",
      dateOfBirth: "141286",
      address: "Lygten",
      maritalStatusId: "1",
      CPR: "0202840001",
      genderIdentification: "0001",
    });
    const user6 = await this.createDoc('users', {
      name: "Sixth user",
      dateOfBirth: "181245",
      address: "Lygten",
      maritalStatusId: "3",
      CPR: "1012450002",
      genderIdentification: "0002",
    });
    const user7 = await this.createDoc('users', {
      name: "Seventh user",
      dateOfBirth: "020280",
      address: "Lygten 3",
      maritalStatusId: "4",
      CPR: "0202800001",
      genderIdentification: "0001",
    });
    const user8 = await this.createDoc('users', {
      name: "Eights user",
      dateOfBirth: "020280",
      address: "Lygten 3",
      maritalStatusId: "5",
      CPR: "0202800001",
      spouse: { _id: 123456, name: "some guy" },
      genderIdentification: "0001",
    });
    const user9 = await this.createDoc('users', {
      name: "Nineth user",
      dateOfBirth: "101245",
      address: "Lygten",
      maritalStatusId: "6",
      CPR: "1012450002",
      genderIdentification: "0002",
    });
    const user10 = await this.createDoc('users', {
      name: "Tenth user",
      dateOfBirth: "101255",
      address: "Lygten",
      CPR: "1012150002",
      maritalStatusId: "7",
      spouse: { _id: 123456, name: "some guy" },
      genderIdentification: "0002",
    });
  
    const user11 = await this.createDoc('users', {
      name: "Eleventh user",
      dateOfBirth: "101255",
      address: "Lygten",
      CPR: "1012150002",
      maritalStatusId: "7",
      spouse: { _id: 123456, name: "some guy" },
      genderIdentification: "0002",
    });
  
    return {
      user1,
      user2,
      user3,
      user4,
      user5,
      user6,
      user7,
      user8,
      user9,
      user10,
      user11,
    };

  }
}




module.exports = TestDbHelper