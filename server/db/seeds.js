use hotel;
db.dropDatabase();

db.guest.insertMany([

{ 
    name: "Mark",
    email: "mark_bob@email.com",
    checked_in: "y"
},

{
    name: "Rich",
    email: "richtea@biscuit.com",
    checked_in: "n"
},

{
    name: "Jen",
    email: "coffeeisgood@hotmail.com",
    checked_in: "y"
},

{ 
    name: "Steven",
    email: "amiltonmc@yahoo.com",
    checked_in: "y"
}

]);