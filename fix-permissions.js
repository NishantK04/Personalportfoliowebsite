import { exec } from "child_process";

exec("chmod +x node_modules/.bin/vite", (err) => {
  if (err) {
    console.log("Skipping chmod on Windows (not required).");
  } else {
    console.log("Set Vite binary as executable.");
  }
});
