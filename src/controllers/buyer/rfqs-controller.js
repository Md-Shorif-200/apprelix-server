import { createRfqService, getAllRfqsService } from "../../services/buyer/rfq-service.js";

export const createRfq = async (req, res, next) => {
  try {
    const rfq = await createRfqService(req.body);
    res.status(201).json({
      success: true,
      message: "Rfq Created  successfully",
      data: rfq,
    });
  } catch (error) {
    next(error);
  }
};

// get all rfqs
export const getAllRfqs = async (req, res, next) => {
  try {
    const rfqs = await getAllRfqsService();

    res.status(200).json({
      success: true,
      data: rfqs,
    });
  } catch (error) {
    next(error);
  }
};
