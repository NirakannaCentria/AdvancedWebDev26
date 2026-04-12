import { useState } from "react"
import { z } from "zod"
import Header from "../components/Header"
import Footer from "../components/Footer"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  date: z.string().min(1, "Please select a date"),
})

function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
  })

  const [errors, setErrors] = useState({})
  const [response, setResponse] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = formSchema.safeParse(formData)

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setErrors({
        name: fieldErrors.name?.[0] || "",
        email: fieldErrors.email?.[0] || "",
        date: fieldErrors.date?.[0] || "",
      })
      return
    }

    setErrors({})

    try {
      const res = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      setResponse(data)
    } catch (error) {
      console.error("Error:", error)
      alert("Something went wrong")
    }
  }

  return ( <>
    <Header />

    <main className="form-page">
      <section className="form-card">
        <h2>Booking Form</h2>
        <p className="form-intro">
          Reserve your café visit by filling in the form below.
        </p>

        <form onSubmit={handleSubmit} className="booking-form">
          <label className="form-field">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </label>

          <label className="form-field">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </label>

          <label className="form-field">
            Booking Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            {errors.date && <p className="error-text">{errors.date}</p>}
          </label>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        {response && (
          <section className="response-box">
            <h3>Form submitted successfully</h3>
            <p>Your data was sent to httpbin and a response was received.</p>

            <div className="response-summary">
              <p><strong>Name:</strong> {response.json?.name}</p>
              <p><strong>Email:</strong> {response.json?.email}</p>
              <p><strong>Date:</strong> {response.json?.date}</p>
              <p><strong>Endpoint:</strong> {response.url}</p>
            </div>

            <details>
              <summary>Show full server response</summary>
              <pre>{JSON.stringify(response, null, 2)}</pre>
            </details>
          </section>
        )}
      </section>
    </main>

    <Footer />
  </>
  )
}

export default FormPage