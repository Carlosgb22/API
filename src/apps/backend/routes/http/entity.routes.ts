import { Router } from "express";
import { addEmployee, deleteEmployee, getAllEmployees, getEmployeeById, updateEmployee } from "../../controllers/mysql/employee.controller";
import { addEvent, deleteEvent, getAllEvents, getEventById, updateEvent } from "../../controllers/mysql/event.controller";
import { addPlace, deletePlace, getAllPlaces, getPlaceById, updatePlace } from "../../controllers/mysql/place.controller";
import { getAllLogins, getLoginById, deleteLogin, addLogin, updateLogin } from "../../controllers/mysql/login.controller";
import {addCatering, deleteCatering, getAllCaterings, getCateringById, updateCatering} from "../../controllers/mysql/catering.controller";
import { addWork, deleteWork, getAllWorks, getAllWorksId, getWorkById, updateWork } from "../../controllers/mysql/work.controller";

const router = Router();

router.get("/employee/all/:id_catering", getAllEmployees);
router.get("/employee/:dni", getEmployeeById);
router.delete("/employee/:dni", deleteEmployee);
router.post("/employee/add", addEmployee);
router.post("/employee/:dni/update", updateEmployee);

router.get("/event/all/:id_catering", getAllEvents);
router.get("/event/:id", getEventById);
router.delete("/event/:id", deleteEvent);
router.post("/event/add", addEvent);
router.post("/event/:id/update", updateEvent);

router.get("/place/all/:id_catering", getAllPlaces);
router.get("/place/:name", getPlaceById);
router.delete("/place/:name", deletePlace);
router.post("/place/add", addPlace);
router.post("/place/:name/update", updatePlace);

router.get("/login", getAllLogins);
router.get("/login/:dni/:password", getLoginById);
router.delete("/login/:dni", deleteLogin);
router.post("/login/add", addLogin);
router.post("/login/:dni/update", updateLogin);

router.get("/catering", getAllCaterings);
router.get("/catering/:id", getCateringById);
router.delete("/catering/:id", deleteCatering);
router.post("/catering/add", addCatering);
router.post("/catering/:id/update", updateCatering);

router.get("/work/all/:dni", getAllWorks);
router.get("/work/all/id/:id", getAllWorksId);
router.get("/work/:dni/:id", getWorkById);
router.delete("/work/:dni/:id", deleteWork);
router.post("/work/add", addWork);
router.post("/work/:dni/:id/update", updateWork);


export default router;