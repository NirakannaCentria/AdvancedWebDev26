
// ===============================
// Form handling for resources page
// ===============================

// -------------- Helpers --------------
function $(id) {
  return document.getElementById(id);
}

function logSection(title, data) {
  console.group(title);
  console.log(data);
  console.groupEnd();
}

// -------------- Form wiring --------------
document.addEventListener("DOMContentLoaded", () => {
  const form = $("resourceForm");
  if (!form) {
    console.warn("resourceForm not found. Ensure the form has id=\"resourceForm\".");
    return;
  }

  form.addEventListener("submit", onSubmit);
});

async function onSubmit(event) {
  event.preventDefault();
  const submitter = event.submitter;
  const actionValue = submitter && submitter.value ? submitter.value : "create";
 // --- Clean values ---
const resourceName = ($("resourceName")?.value ?? "").trim();
const resourceDescription = ($("resourceDescription")?.value ?? "").trim();
const resourceAvailable = $("resourceAvailable")?.checked ?? false;

const priceRaw = ($("resourcePrice")?.value ?? "").trim();
const resourcePrice = priceRaw === "" ? null : Number(priceRaw);

const selectedUnit = document.querySelector('input[name="resourcePriceUnit"]:checked');
const resourcePriceUnit = selectedUnit ? selectedUnit.value : "";

// --- Validate BEFORE sending ---
const valid =
  resourceName.length >= 5 &&
  resourceDescription.length >= 10 &&
  resourcePrice !== null &&
  Number.isFinite(resourcePrice) &&
  resourcePrice >= 0 &&
  !!resourcePriceUnit;

if (!valid) {
  alert("Please fill in all required fields with valid values.");
  return; // 🚫 Do NOT send request
}

// --- Final clean payload ---
const payload = {
  action: actionValue,
  resourceName,
  resourceDescription,
  resourceAvailable,
  resourcePrice,
  resourcePriceUnit
};


  logSection("Sending payload to httpbin.org/post", payload);

  try {
    const response = await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      throw new Error(`HTTP ${response.status} ${response.statusText}\n${text}`);
    }

    const data = await response.json();

    console.group("Response from httpbin.org");
    console.log("Status:", response.status);
    console.log("URL:", data.url);
    console.log("You sent (echo):", data.json);
    console.log("Headers (echoed):", data.headers);
    console.groupEnd();

  } catch (err) {
    console.error("POST error:", err);
  }
}