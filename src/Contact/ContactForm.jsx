const sendEmail = async (e) => {
  e.preventDefault();

  const formData = {
    name: form.current.name.value,
    email: form.current.email.value,
    phone: form.current.phone.value,
    message: form.current.message.value,
  };

  try {
    const response = await fetch("http://localhost:5000/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.success) {
      alert("Message sent successfully!");
      form.current.reset();
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error sending message.");
  }
};
