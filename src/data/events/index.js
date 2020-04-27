"use strict";

const utils = require( "../utils" );

const register = async ( { sql, getConnection } ) => {

   // read in all the .sql files for this folder
   const sqlQueries = await utils.loadSqlQueries("events");

   const getEvents = async userId => {

       // get a connection to SQL Server
       const cnx = await getConnection();

       // create a new request
       const request = await cnx.request();

       // configure sql query parameters
       request.input( "userId", sql.VarChar( 50 ), userId );

       // return the executed query
       return request.query( sqlQueries.getEvents );
       
   };

   const getMealItems = async ()  => {

    // get a connection to SQL Server
    const cnx = await getConnection();

    // create a new request
    const request = await cnx.request();

    // return the executed query
    return request.query(sqlQueries.getmealItems);
    };

        const createUser = async ( { username, contactnumber,emailaddress,password } ) => {
            const pool = await getConnection();

            const request = await pool.request();

            request.input("username", username );
            request.input("contactnumber", contactnumber );
            request.input("emailaddress", emailaddress );
            request.input("password", password );

            return request.query( sqlQueries.createUser);
        };

        const checkUser = async ( { emailaddress,password } ) => {
            const pool = await getConnection();

            const request = await pool.request();

            request.input("emailaddress", emailaddress );
            request.input("password", password );

            return request.query( sqlQueries.checkUser);
        };

        const saveOrder = async ( { UserId, mealitemsIds } ) => {
            const pool = await getConnection();

            const request = await pool.request();

            request.input("UserId", UserId );
            request.input("mealitemsIds", mealitemsIds );

            return request.query( sqlQueries.saveMealItems);
        };

   return {
       getEvents, 
       getMealItems,
       createUser,
       checkUser,
       saveOrder,
   };
};

module.exports = { register };