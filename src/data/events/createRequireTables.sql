
IF (not EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES
   WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'mealitems'))
   BEGIN
     CREATE TABLE mealitems (
    itemid int IDENTITY(1,1) PRIMARY KEY,
    itemname varchar(255) NOT NULL,
    itemprice money,
    itemImage varchar(max),
	Category varchar(255),
    );
   END;




IF (not EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES
   WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'users'))
   BEGIN
CREATE TABLE users (
    userid int IDENTITY(1,1) PRIMARY KEY,
    username varchar(max) not null,
    contactnumber varchar(15),
    emailaddress varchar(25),
    [password] varchar(20)
);
END;


IF (not EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES
   WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'mealorders'))
   BEGIN
CREATE TABLE mealorders (
    mealorderid int IDENTITY(1,1) PRIMARY KEY,
    userid int,
	mealItemsIds varchar(25),
	addeddate datetime,
);
END;