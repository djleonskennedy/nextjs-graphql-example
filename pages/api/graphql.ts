import type { NextApiRequest, NextApiResponse } from "next";

const addNewField = (target: any) => {
  return class extends target {
    newFiled = 100;
  };
};

@addNewField
export class Test {}

export default (req: NextApiRequest, res: NextApiResponse) => {
  const t = new Test();
  res.status(200).json({ name: "John Doe" });
};
