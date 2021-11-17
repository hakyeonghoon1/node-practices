const model = require('../models/guestbook');

module.exports ={
    index: async function(req,res){
        const results = await model.findAll(function(){});
        res.render('index',{
            list : results||[]
        });
    },
    insert : async function(req,res){
        const results = await model.insert(req.body);
        res.redirect('/');
    },

    deleteForm : async function(req,res){
       
        res.render('delete',{
            no:req.params.no||''
        });
    },
    delete :async function(req,res){
        const results = await model.delete(req.body);
        res.redirect('/');
    }
}