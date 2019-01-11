
module.exports = {

    createUser: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');
        let accountArr = await db.find_user({ username: username })
        if (accountArr.length >= 1) {
            return res.status(200).send({ message: 'Email already in use.' })
        } else {
            let newUser = db.create_acc({ username: username, password: password });
            res.status(200).send({ message: 'logged in', newUser: newUser, loggedIn: true })

        }
    },
    login: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');
        const accountArr = await db.find_user({ username: username });

        if (!accountArr[0]) {
            return res.status(200).send({ message: 'Email not found.' });
        } else {
            if (accountArr[0].password === password) 
                {
                
                res.status(200).send({ message: 'logged in', loggedIn: true })
                } else 
                { return res.status(200).send({ message: 'Password does not match Username' }); }
        }
    }

}




//-------------------------------------------------------
// login: async (req, res) => {
//     const { email, password } = req.body;
//     const db = req.app.get('db');
//     const accountArr = await db.find_acc_email({email: email});
//     if (!accountArr[0]) {
//         return res.status(200).send({message: 'Email not found.'});
//     }
//     const result = bcrypt.compareSync(password,accountArr[0].acc_hash)
//     if(!result) {
//         return res.status(401).send({message: 'Password incorrect.'})
//     }
//     req.session.user = {id: accountArr[0].acc_id, email: accountArr[0].acc_email }
//     res.status(200).send({ message: 'logged in', userData: req.session.user, loggedIn: true })