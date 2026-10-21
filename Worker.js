
const endpoint =
  "https://quimthwsjxnnqhqswnon.supabase.co/functions/v1/cloudfarm-status";

async function checkCloudFarm() {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    console.log("CloudFarm status:", data.status);
    console.log("Workers connected:", data.workers ?? 0);
  } catch (error) {
    console.error("CloudFarm status check failed:", error.message);
  }
}

checkCloudFarm();
setInterval(checkCloudFarm, 60_000);
