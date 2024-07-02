import { Router } from "express";
import * as drugController from "../controller/drugController.ts";

const router = Router();

router.post("/drug", drugController.createDrug);
router.put("/drug/:id", drugController.updateDrug);
router.get("/drug/:id", drugController.getDrugById)
router.get("/drug", drugController.getAllDrugs);
router.delete("/drug/:id", drugController.deleteDrug);

export default router;