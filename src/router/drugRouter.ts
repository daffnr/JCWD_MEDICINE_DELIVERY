import { Router } from "express";
import * as drugController from "../controller/drugController.ts";
import { authenticateToken } from "../middleware/authMiddleware.ts";

const router = Router();

router.post("/drug", authenticateToken, drugController.createDrug);
router.put("/drug/:id", authenticateToken, drugController.updateDrug);
router.get("/drug/:id", authenticateToken, drugController.getDrugById)
router.get("/drug", authenticateToken, drugController.getAllDrugs);
router.delete("/drug/:id", authenticateToken, drugController.deleteDrug);

export default router;