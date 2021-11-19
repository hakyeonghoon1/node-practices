const errorRoute = require('./error');
const applicationRouter ={
    setup:function(application){
    //const site = models.Site.findOne();
    // 4-4. request router
    application
        .all('*',function(req,res,next){
            res.locals.req = req;
            res.locals.res = res;
            res.locals.siteTitle = 'siteTitle';
            next();
        })

    .use('/',require('./main'))
    .use('/user',require('./user'))
    .use('/guestbook', require('./guestbook'))
    .use('/api/guestbook',require('./guestbook-api'))
    .use('/gallery', require('./gallery'))
    
    .use(errorRoute.error404)
    .use(errorRoute.error500)
    .siteTitle ='siteTitle';
    }
}
module.exports = {applicationRouter};