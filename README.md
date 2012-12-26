# Colors demo deployment of Meteor
Not resolved yet how to run this app in windows
There're IIS fix here http://www.anuragbhandari.com/2012/11/hosting-meteor-js-app-in-iis/

* need to type `meteor --production` to create .meteor\local\build\static_cacheable\ folder
* need to add `process.env.MONGO_URL = 'mongodb://localhost'` and `process.env.PORT = 3800` somewhere
* (NOT WORK) run this app as service by NSSM - the Non-Sucking Service Manager http://nssm.cc/ `nssm install.