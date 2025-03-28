"use client";
import React, { useState } from "react";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime, MdHome, MdCalendarToday } from "react-icons/md";

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email_address: "",
    telefon: "",
    ihre_nachricht: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Basic validation
    if (!formData.name || !formData.email_address || !formData.ihre_nachricht) {
      setMessage({ type: "error", text: "Bitte füllen Sie alle Pflichtfelder aus." });
      setLoading(false);
      return;
    }

    const payload = {
      name: formData.name,
      company: formData.company,
      email_address: formData.email_address,
      telefon: formData.telefon,
      ihre_nachricht: formData.ihre_nachricht,
    };

    try {
      const response = await fetch(
        "http://192.168.68.197:8000/api/method/platzhirsch_studio.platzhirsch_studio.doctype.kontakt_form.api.create_contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        const errorMsg = responseData.message || responseData.error || "Fehler beim Senden der Nachricht.";
        throw new Error(errorMsg);
      }

      setMessage({ type: "success", text: "Nachricht erfolgreich gesendet!" });
      setFormData({
        name: "",
        company: "",
        email_address: "",
        telefon: "",
        ihre_nachricht: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage({
        type: "error",
        text: error.message || "Es gab einen Fehler beim Senden Ihrer Nachricht.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-[#303030]">
        {/* Intro Section */}
        <div className="md:col-span-2">
          <p className="uppercase text-[#daa14c] font-semibold tracking-wide mb-2">KONTAKT</p>
          <h2 className="text-3xl font-bold mb-4">Machen Sie den ersten Schritt</h2>
          <p className="text-gray-600">
            Sie haben Fragen, Wünsche oder möchten einen Beratungstermin vereinbaren? Kontaktieren Sie uns gerne direkt
            telefonisch oder per Kontaktformular. Termine vereinbaren wir auf Wunsch auch außerhalb unserer
            Öffnungszeiten.
          </p>
        </div>

        {/* Contact Info Group 1 */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <MdHome className="text-[#daa14c]" /> Hauptsitz
            </div>
            <p className="text-sm mt-1 text-gray-600">
              Platzhirsch Home Living <br />
              Landstraße 11, 6911 Lochau,
              <br /> Österreich
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 font-semibold">
              <MdPhone className="text-[#daa14c]" /> Telefonnummer
            </div>
            <p className="text-sm mt-1 text-gray-600">
              <a href="tel:+43 5574 46255" className="hover:text-[#daa14c]">
                +43 5574 46255
              </a>
            </p>
          </div>
        </div>

        {/* Contact Info Group 2 */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <MdAccessTime className="text-[#daa14c]" /> Öffnungszeiten
            </div>
            <p className="text-sm mt-1 text-gray-600">
              Montag: Ruhetag <br />
              Dienstag-Freitag: 10-18 Uhr <br />
              Samstag: 10-14 Uhr
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 font-semibold">
              <MdEmail className="text-[#daa14c]" /> E-Mail
            </div>
            <p className="text-sm mt-1 text-gray-600">
              <a href="mailto:info@platzhirsch.studio" className="hover:text-[#daa14c]">
                info@platzhirsch.studio
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="w-full h-[400px]">
        <iframe
          title="Platzhirsch Home Living Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.9094444536347!2d9.741196115613785!3d47.48721237917747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479c3a06d30d1993%3A0x9b1b64c7aa92d0e5!2sLandstra%C3%9Fe%2011%2C%206911%20Lochau%2C%20Austria!5e0!3m2!1sen!2sat!4v1678817752460!5m2!1sen!2sat"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#303030] mb-10">Kontaktformular</h2>

        {message && (
          <div
            className={`mb-6 p-4 rounded-md ${
              message.type === "error" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#daa14c]"
                placeholder="Ihr Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Unternehmen (optional)</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#daa14c]"
                placeholder="Firmenname"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
              <input
                type="email"
                name="email_address"
                value={formData.email_address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#daa14c]"
                placeholder="Ihre E-Mail-Adresse"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefon (optional)</label>
              <input
                type="text"
                name="telefon"
                value={formData.telefon}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#daa14c]"
                placeholder="Ihre Telefonnummer"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col h-full justify-between">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Nachricht *</label>
              <textarea
                name="ihre_nachricht"
                value={formData.ihre_nachricht}
                onChange={handleChange}
                className="w-full h-auto min-h-[200px] border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:border-[#daa14c]"
                placeholder="Ihre Nachricht..."
                required
              ></textarea>
            </div>

            <div className="mt-6 text-right">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#daa14c] hover:bg-[#c89130] text-white font-semibold px-6 py-3 rounded-md transition disabled:opacity-50"
              >
                {loading ? "Wird gesendet..." : "Nachricht senden"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Kontakt;
