export default function() {

  this.get('/seasons');
  this.get('rounds/:id');
  this.get('practices/:id', 'practice');
  this.get('practice_sessions/:id', 'practice-session');
  this.get('qualifies/:id', 'qualify');
  this.get('qualify_sessions/:id', 'qualify-session');
  this.get('best_sectors', 'best-sector');
  this.get('fastest_laps', 'fastest-lap');
  this.get('pit_stops', 'pit-stop');
  this.get('best_sectors', 'best-sector');
  this.get('/speed_traps', function(db, request) {
    const queryParams = request.queryParams;

    if (!queryParams) {
      return { "speed-trap": db['speed-traps'] };
    } else {
      const type = queryParams.speed_trap_type;
      let response = db['speed-traps'].where({"type": type});

      response.forEach(speedTrap => {
        delete speedTrap.type;
        return speedTrap;
      });
      return {
        "speed-trap": response
      };
    }
  });
  this.get('practice_results', 'practice-result');
  this.get('qualify_results', 'qualify-result');
  this.get('race_results', 'race-result');
  this.get('races/:id', 'race');

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
