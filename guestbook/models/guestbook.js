const mysql = require('mysql2');
const dbconn = require('./dbconn');
const util = require('util');

module.exports = {
    findAll : async function(){

        const conn = dbconn();

        const query = util.promisify(conn.query).bind(conn);

        try{
            return await query('select no, name, password, message, reg_date as regDate from guestbook order by no desc',[]);
        } catch(e){
            console.error(e);
        } finally{
            conn.end();
        }
    },
    insert : async function(guestbook){

        const conn = dbconn();

        const query = util.promisify(conn.query).bind(conn);

        try{
            return await query('insert into guestbook(no,name,password,message,reg_date) values(null,?,?,?,now())',
            Object.values(guestbook));
        } catch(e){
            console.error(e);
        } finally{
            conn.end();
        }
    },
    delete : async function(guestbook){

        const conn = dbconn();

        const query = util.promisify(conn.query).bind(conn);

        try{
            return await query('delete from guestbook where no = ? and password = ?',
            Object.values(guestbook));
        } catch(e){
            console.error(e);
        } finally{
            conn.end();
        }
    }
}