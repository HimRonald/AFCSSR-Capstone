var { faker }  = require("@faker-js/faker")

var admin = require("firebase-admin");

var serviceAccount = require("../members/server-accountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

function setData() {
  [...Array(1)].map((item) =>
    db.collection("member_request").add({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      gender: faker.person.sex() === "male" ? "M" : "F",
      email: faker.internet.email(),
      phone: faker.phone.number(),
      university: "Moscow State University",
      graduationDate: "2022-02-20",
      commencementDate:  "2018-02-20",
      country: "Russia",
      title: "Dr.",
      status:"idle",
      qualification: "Ph.D",
      occupation: "Software Engineer",
      orgName: faker.company.name(),
      requestedAt: admin.firestore.FieldValue.serverTimestamp(),
      business: [
        {
          name: faker.company.name(),
          type:"Tech",
          email: faker.internet.email(),
          phone: faker.phone.number(),
          description: faker.person.jobDescriptor(),
          position: "Managing Director",
          address: faker.location.streetAddress(),
        },
        {
          name: faker.company.name(),
          type:"Marketing",
          email: faker.internet.email(),
          phone: faker.phone.number(),
          description: faker.person.jobDescriptor(),
          position: "Managing Director",
          address: faker.location.streetAddress(),
        },
      ],
    }).then().catch(e=> console.log(e))
  );
}
setData();
