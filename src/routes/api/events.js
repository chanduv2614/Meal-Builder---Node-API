"use strict";

module.exports.register = async server => {
   server.route({
       method: "GET",
       path: "/api/events",
       config: {
           handler: async request => {
               try {
                   // get the sql client registered as a plugin
                   const db = request.server.plugins.sql.client;

                   // TODO: Get the current authenticate user's ID
                   const userId = "1";

                   // execute the query
                   const res = await db.events.getEvents( userId );

                   // return the recordset object
                   return res.recordset;
                   
               } catch ( err ) {
                   console.log( err );
               }
           }
       }
   });

   server.route({
    method: "GET",
    path: "/api/mealitems",
    config: {
        handler: async request => {
            try {
                // get the sql client registered as a plugin
                const db = request.server.plugins.sql.client;

                // execute the query
                const res = await db.events.getMealItems();

                // return the recordset object
                return res.recordset;
                
            } catch ( err ) {
                console.log( err );
            }
        }
    }
});

server.route({
    method: "Post",
    path: "/api/createUser",
    config: {
        handler: async request => {
            try {
                const db = request.server.plugins.sql.client;

                const { username, contactnumber, emailaddress, password } = request.payload;

                const res = await db.events.createUser( { username, contactnumber, emailaddress, password } );
                return res.recordset[0];
                
            } catch ( err ) {
                console.log( err );
            }
        }
    }
});

server.route({
    method: "Post",
    path: "/api/checkUser",
    config: {
        handler: async request => {
            try {
                const db = request.server.plugins.sql.client;

                const { emailaddress, password } = request.payload;

                const res = await db.events.checkUser( { emailaddress, password } );

                if(res.recordset.length ===0)
                    {
                        return {
                            "username":"nouser"
                        };
                    }
                else
                    return res.recordset;
                
            } catch ( err ) {
                console.log( err );
            }
        }
    }
});

server.route({
    method: "Post",
    path: "/api/saveOrder",
    config: {
        handler: async request => {
            try {
                const db = request.server.plugins.sql.client;

                const { UserId, mealitemsIds } = request.payload;

                const res = await db.events.saveOrder( { UserId, mealitemsIds} );

                return 'record added suuccuesfully';
                
            } catch ( err ) {
                console.log( err );
            }
        }
    }
});
};