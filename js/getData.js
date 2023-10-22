
// Initialize Parse
Parse.initialize("vYOu7vgqNnE9f4j7gKqppBNcWAprWDGBVC3SV8u8", "rnIdMgPC2xXcrMDzZ1WmoHVSyUy999wyQdjkEWNQ");
Parse.serverURL = 'https://parseapi.back4app.com/';

(async () => {
    const Politician = Parse.Object.extend('Politician');
    const query = new Parse.Query(Politician);
    // You can also query by using a parameter of an object
    // query.equalTo('objectId', 'xKue915KBG');
    try {
    const resultsDiv = document.getElementById('results');
      const results = await query.find();
      for (const object of results) {
        // Access the Parse Object attributes using the .GET method
        const FirstName = object.get('FirstName')
        const lastName = object.get('lastName')
        const Party = object.get('Party')
        const state = object.get('state')
        const officeHeld = object.get('officeHeld')
        const Rating = object.get('Rating')
        const profile = object.get('profile')
        console.log(FirstName);
        console.log(lastName);
        console.log(Party);
        console.log(state);
        console.log(officeHeld);
        console.log(Rating);
        console.log(profile);
        const politicianDiv = document.createElement('div');
        politicianDiv.textContent = `${FirstName} ${lastName} - ${Party}`;
        resultsDiv.appendChild(politicianDiv);
      }
    } catch (error) {
      console.error('Error while fetching Politician', error);
    }
  })();

// const resultsDiv = document.getElementById('results');
// // ... 
// for (const object of results) {
//   // ... your existing code to get data ...
//   const politicianDiv = document.createElement('div');
//   politicianDiv.textContent = `${FirstName} ${lastName} - ${Party}`;
//   resultsDiv.appendChild(politicianDiv);
// }