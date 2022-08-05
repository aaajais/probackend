const express = require("express");

const path = require("path");
const app = express();
const hbs = require("hbs")

require("../db/conn")
const Register = require("./registers");

const port = process.env.PORT || 8080;
const static_path = path.join(__dirname, 'public');
const template_path = path.join(__dirname, '/templates/views');
const partials_path = path.join(__dirname, '/templates/partials');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', express.static('public'));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, '/templates/views'));
hbs.registerPartials(partials_path);


app.get("/", (req, res) => {
    res.render("index")
});

app.get("/registration", (req, res) => {
    res.render("registration")
});

app.post("/registration", async (req, res) => {
    try {

        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if (password === cpassword)
         
        {    

            const registersEmployee = new Register({

                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                gender: req.body.gender,
                phone: req.body.phone,
                // age: req.body.age,
                password:password,
                confirmpassword: cpassword

            })

           const registered = await registersEmployee.save();
           res.status(201).render(index);
        }
        else{
            res.send("password are not match")
        }
        // console.log(req.body.firstname);
        // res.send(req.body.firstname);
    } catch (error) {
        res.status(400).send(error);
    }
})
app.listen(port, () => {
    console.log(`surver is running ${port}`);
})