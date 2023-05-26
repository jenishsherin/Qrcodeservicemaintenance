const express=require('express');
const contler=require('../controller/controller')
const router=express.Router();

router.post('/userregistration',contler.userregistration);
router.post('/login',contler.login);
router.get('/allrequest',contler.getAllRequest);
router.get('/newrequest',contler.getNewRequest);
router.get('/pendingrequest',contler.getPendingRequest);
router.get('/completedrequest',contler.getCompletedRequest);
router.get('/viewrequest/:id',contler.getViewRequest);
router.post('/adminupdaterequest/:id',contler.adminupdate);
router.post('/servicelogin',contler.servicelogin);
router.get('/getservicerequest',contler.getservicerequest);
router.post('/serviceupdaterequest/:id',contler.serviceupdaterequest);
router.post('/adminpassword',contler.changeadminpassword);
router.post('/servicepassword',contler.changeservicepassword);


module.exports=router;