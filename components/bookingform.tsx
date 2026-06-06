"use client";

export default function BookingForm() {
  return (
    <section id="book" className="py-20 px-6">
      <div className="mx-auto max-w-xl rounded-3xl border border-gold/20 bg-ink-900 p-8 shadow-[0_30px_80px_-20px_rgba(76,29,149,0.25)] backdrop-blur space-y-4">
        <h2 className="mb-2 text-3xl font-display font-light text-rose-blush">
          Reserve Your Lash Appointment
        </h2>

        <p className="mb-8 text-rose-blush/70">
          Share your details below and we'll be in touch to confirm your appointment at Lashes by L.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            className="w-full rounded-xl border border-gold/20 bg-white p-4 text-rose-blush placeholder:text-rose-blush/40 focus:border-gold focus:outline-none"
          />

          <input
            name="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-gold/20 bg-white p-4 text-rose-blush placeholder:text-rose-blush/40 focus:border-gold focus:outline-none"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            className="w-full rounded-xl border border-gold/20 bg-white p-4 text-rose-blush placeholder:text-rose-blush/40 focus:border-gold focus:outline-none"
          />

          <select
            name="service"
            className="w-full rounded-xl border border-gold/20 bg-white p-4 text-rose-blush focus:border-gold focus:outline-none"
          >
            <option>Choose a Service</option>
            <option>Premium Classic Lash Extensions</option>
            <option>Luxury Hybrid Lash Extensions</option>
            <option>Volume Lash Extension Services</option>
            <option>Mega Volume Lash Enhancements</option>
            <option>Lash Lift & Tint Treatments</option>
            <option>Professional Lash Maintenance & Refill Services</option>
          </select>

          <input
            name="date"
            type="date"
            className="w-full rounded-xl border border-gold/20 bg-white p-4 text-rose-blush focus:border-gold focus:outline-none"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-gold py-4 font-semibold text-white tracking-luxe uppercase text-[12px] transition hover:bg-gold-deep"
          >
            Reserve Appointment
          </button>
        </form>
      </div>
    </section>
  );
}
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    date: formData.get("date"),
  };

  await fetch("https://hook.eu1.make.com/667j0epwbwrxpbwsl6ir8m9a6y63fp2j", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  alert("Your lash appointment request has been received — we'll be in touch shortly to confirm.");
}
