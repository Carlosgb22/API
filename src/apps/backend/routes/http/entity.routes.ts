import { Router } from "express";
import { addEmployee, deleteEmployee, getAllEmployees, getEmployeeById, updateEmployee } from "../../controllers/mysql/employee.controller";
import { addEvent, deleteEvent, getAllEvents, getEventById, updateEvent } from "../../controllers/mysql/event.controller";

const router = Router();

router.get("/employee", getAllEmployees);
router.get("/employee/:id", getEmployeeById);
router.delete("/employee/:id", deleteEmployee);
router.post("/employee/add", addEmployee);
router.post("/employee/:id/update", updateEmployee);

router.get("/event", getAllEvents);
router.get("/event/:id", getEventById);
router.delete("/event/:id", deleteEvent);
router.post("/event/add", addEvent);
router.post("/event/:id/update", updateEvent);

export default router;