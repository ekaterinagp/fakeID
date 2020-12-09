const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

// Extend the default timeout so MongoDB binaries can download
jest.setTimeout(60000);

const COLLECTIONS = ['users', 'test-users'];

class DBManager {
  constructor() {
    this.db = null;
    this.server = new MongoMemoryServer();
    this.connection = null;
  }

  // Spin up a new in-memory mongo instanc
  async start() {
    const url = await this.server.getUri();
    this.connection = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.db = this.connection.db(await this.server.getDbName());
  }

  // Close the connection and halt the mongo instance
  stop() {
    this.connection.close();
    return this.server.stop();
  }

  // Remove all documents from the entire database - useful between tests
  cleanup() {
    return Promise.all(COLLECTIONS.map((c) => this.db.collection(c).deleteMany({})));
  }
}

module.exports = DBManager;