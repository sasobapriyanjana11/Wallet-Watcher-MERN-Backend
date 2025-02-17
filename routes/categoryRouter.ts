import express from "express";
import categoryController from "../controllers/categoryController";
import isAuthenticated from "../middlewares/Auth";


const categoryRouter=express.Router();
//!add category
categoryRouter.post("/api/v1/categories/create",isAuthenticated,categoryController.create);

//! lists
categoryRouter.get("/api/v1/categories/lists",isAuthenticated,categoryController.lists);
//
//! update
categoryRouter.put("/api/v1/categories/update/:categoryId",isAuthenticated,categoryController.update);
//
// //! delete
categoryRouter.delete("/api/v1/categories/delete/:id",isAuthenticated,categoryController.delete)


export default categoryRouter;