const mongoose = require("mongoose");

const UserCollection = require("../../models/UserSchema");

const getusercontroller = async (req, res) => {
    try {
        const { role, gender, age } = req.params;

        let users;

        if (role) {
            const searchrole = role;
            users = await UserCollection.find({
                role: { $regex: new RegExp(searchrole, 'i') }
            });

        }
        else if (gender) {
            const searchgender = gender;
            users = await UserCollection.find({
                gender: { $regex: new RegExp(searchgender, 'i') }
            });


        }
        else if (age) {
            const searchage = parseFloat(age);
            users = await UserCollection.find({
                age: searchage
            });
        }

        else if (req.path.includes("/random")) {
            users = await UserCollection.aggregate([{
                $sample: { size: 9 }
            }
            ]);
        }
        else if (req.path.includes("/highest-skills")){
            users = await UserCollection.aggregate([
                {
                  "$addFields": {
                    "noofskills": { "$size": "$skills" }
                  }
                },
                {
                  $sort: {
                    noofskills: -1
                  }
                },
                {
                    $limit:9
                }
              ]
              );   

        }
        else if (req.path.includes("/lowtohigh")) {
            users = await UserCollection.find().sort({ salary: 1 }).limit(9); 
        }
        else if (req.path.includes("/hightolow")) {
            users = await UserCollection.find().sort({ salary: -1 }).limit(9);
        }
        else {
            users = await UserCollection.find()
            console.log(`user fetched sucessfully`);
        }

        if (!users || users.length === 0)
            return res.status(404).send({ message: "users not found" });

        res.status(200).send(users);
    }
    catch (error) {
        res.status(504).send({
            message: "Error in fetching user"
        });
        console.log(`Error occured:${error}`);
    }
};

module.exports = getusercontroller;