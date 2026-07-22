/*
TO ADD ANOTHER PERSON:
1. Copy the template below and paste in the list.
2. Fill in all of the fields
  - Follow the same require() format as other people

TEMPLATE:
    {
        name: "Your name",
        role: "Your role",
        status: "current",
        photo: require("../assets/images/people/you.jpg"),
        bio: "Your bio."
    },
*/

export const people = [
    {
        name: "Boyd Pelley",
        role: "Computer Scientist",
        status: "current",
        photo: require("../assets/images/people/pelley.jpg"),
        bio: "This is an example paragraph that outlines a basic bio of the person."
    },
    {
        name: "Boyd Pelley",
        role: "Computer Scientist Test",
        status: "alumni",
        photo: require("../assets/images/people/pelley.jpg"),
        bio: "This is an example paragraph too."
    },

      {
        name: "Robert Lennox",
        role: "Professor",
        status: "current",
        photo: require("../assets/images/people/pelley.jpg"),
        bio: "Professor"
    }
];

export const currentMembers = people.filter((p) => p.status === 'current');
export const alumni = people.filter((p) => p.status === 'alumni');

