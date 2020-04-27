insert into users(username, contactnumber,emailaddress,[password])
values(@username, @contactnumber,@emailaddress,@password)

select SCOPE_IDENTITY() as userid