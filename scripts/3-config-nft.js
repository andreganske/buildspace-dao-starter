import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";
import dotenv from "dotenv";

dotenv.config();


if (!process.env.EDITION_DROP_ADDRESS || process.env.EDITION_DROP_ADDRESS === "") {
  console.log("🛑 Edition Drop Address not found.");
}


(async () => {
  try {
    const editionDrop = await sdk.getContract(process.env.EDITION_DROP_ADDRESS, "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Digha NFT",
        description: "This NFT will give you access to DighaDAO!",
        image: readFileSync("scripts/assets/headband.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();