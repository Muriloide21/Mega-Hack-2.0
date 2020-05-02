const User = require('../models/User');

//index(lista todas sessões), show(lista uma só), store(cria uma sessão), update(muda uma sessão), destroy (remove uma sessão)

module.exports = {
    async store(req, res){
        const { email }  = req.body; //const email = req.body.email

        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ email });
        }


        return res.json(user)
    }
} 