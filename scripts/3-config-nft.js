import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xe972D668C2a1Ab7C4eb8D5d2577e7F6Fd18F89ec", "edition-drop");
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