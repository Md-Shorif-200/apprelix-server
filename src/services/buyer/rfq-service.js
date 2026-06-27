import { Rfq } from "../../models/buyer/rfq.model.js";

export const createRfqService = async (payload) => {
  const newRfq = await Rfq.create(payload );

  return newRfq;
};


export const getAllRfqsService = async () => {
  const rfqs = await Rfq.find();
  return rfqs;
};

