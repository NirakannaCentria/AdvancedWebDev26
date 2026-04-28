const API_URL = "/api/persons";
const customerForm = document.getElementById("customerForm");
const customerIdInput = document.getElementById("customerId");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const birthDateInput = document.getElementById("birthDate");

const saveCustomerBtn = document.getElementById("saveCustomerBtn");
const deleteCustomerBtn = document.getElementById("deleteCustomerBtn");
const clearFormBtn = document.getElementById("clearFormBtn");


function getFormData() {
  return {
    first_name: firstNameInput.value,
    last_name: lastNameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    birth_date: birthDateInput.value,
  }
}
function clearForm() {
  customerIdInput.value = "";
  customerForm.reset();
  saveCustomerBtn.textContent = "Add customer";
  deleteCustomerBtn.disabled = true;
}

function fillForm(person) {
  customerIdInput.value = person.id;
    firstNameInput.value = person.first_name || "";
    lastNameInput.value = person.last_name || "";
    emailInput.value = person.email || "";
    phoneInput.value = person.phone || "";
    birthDateInput.value = person.birth_date || "";

    saveCustomerBtn.textContent = "Update Customer";
    deleteCustomerBtn.disabled = false;
}

customerForm.addEventListener("submit", async function (event){
  event.preventDefault();
  
  const customerId = customerIdInput.value;
  const customerData = getFormData();

  if (customerId) {
    await fetch(`${API_URL}/${customerId}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(customerData)
    });
  } else {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(customerData)

    });
  }

  console.log("Customer saved:", customerData);
  clearForm();
  loadCustomers();

})

deleteCustomerBtn.addEventListener("click", async function () {
  const customerId = customerIdInput.value;

  if(!customerId) {
    alert("Please select a customer first.");
    return;
  }

  await fetch(`${API_URL}/${customerId}`, {
    method: "DELETE"
  });

  clearForm();
  loadCustomers();
  
}

)

async function loadCustomers() {
  const container = document.getElementById("customer-list");

  try {
    const res = await fetch("/api/persons");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    // Clear placeholder
    container.innerHTML = "";

    if (data.length === 0) {
      container.innerHTML = "<p>No customers found.</p>";
      return;
    }

    // Create simple list
    data.forEach(person => {
      const div = document.createElement("div");
      div.className = "customer-card";

      div.innerHTML = `
        <strong>${person.first_name} ${person.last_name}</strong><br>
        Email: ${person.email}<br>
        Phone: ${person.phone || "-"}
      `;

      div.addEventListener("click", () => {
       // console.log("Customer clicked:");
        //console.log(person);
        fillForm(person);
      });

      container.appendChild(div);
    });

  } catch (err) {
    console.error(err);
    container.innerHTML = "<p style='color:red;'>Error loading data</p>";
  }
}

// Run on page load
loadCustomers();