module.exports = {
    join:function(req,res){
        res.locals.applicationName ='....';
        res.render('user/join');
    }
}