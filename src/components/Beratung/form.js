import { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({
    step1: null,
    step2: null,
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); // For success message
  const [errorMessage, setErrorMessage] = useState(""); // For error message

  const step1Options = [
    { id: "einen Neubau", label: "einen Neubau" },
    { id: "eine Renovierung", label: "eine Renovierung" },
    { id: "Anderes", label: "Anderes" },
  ];

  const step2Options = [
    { id: "in einem Einfamilienhaus", label: "in einem Einfamilienhaus" },
    { id: "in einer Wohnung", label: "in einer Wohnung" },
    { id: "in einer gewerblichen Immobilie", label: "in einer gewerblichen Immobilie" },
  ];

  const handleOptionSelect = (stepNumber, optionId) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [`step${stepNumber}`]: optionId,
    }));

    // Automatically proceed to next step after selection
    if (stepNumber === 1) setStep(2);
    if (stepNumber === 2) setStep(3);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Checking if the form data is complete
    if (!selectedOptions.step1 || !selectedOptions.step2 || !selectedOptions.message) {
      setErrorMessage("Bitte füllen Sie alle Felder aus.");
      return;
    }

    const payload = {
      bei_meiner_anfrage: selectedOptions.step1, // e.g., "einen Neubau"
      das_projekt_soll: selectedOptions.step2, // e.g., "in einem Einfamilienhaus"
      bitte_beschreiben: selectedOptions.message, // The user's message
    };

    console.log("Form submitted:", payload);

    try {
      const response = await fetch(
        "http://192.168.68.197:8000/api/method/platzhirsch_studio.platzhirsch_studio.doctype.anfrage.api.create_anfrage", // API endpoint
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

      // Handle success response
      setSuccessMessage("Nachricht erfolgreich gesendet!");
      setErrorMessage(""); // Clear any error messages
      resetForm(); // Reset form data after successful submission
    } catch (error) {
      setErrorMessage("Fehler beim Absenden der Nachricht. Bitte versuchen Sie es erneut.");
      console.error("Error submitting form:", error);
    }
  };

  const resetForm = () => {
    // Reset the form state
    setSelectedOptions({
      step1: null,
      step2: null,
      message: "",
    });
    setStep(1); // Reset to the first step
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg mb-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Anfrage</h2>

      <form onSubmit={handleSubmit}>
        {/* Success message */}
        {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}

        {/* Error message */}
        {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}

        {/* Step 1 */}
        {step >= 1 && (
          <div className={`mb-8 ${step > 1 ? "opacity-50" : ""}`}>
            <h3 className="text-md font-semibold mb-4 flex justify-center items-center">
              Bei meiner Anfrage geht es um{" "}
            </h3>
            <div className="space-y-3">
              {step1Options.map((option) => (
                <label key={option.id} className="flex justify-start items-center p-3 hover:bg-gray-50 cursor-pointer">
                  <div className="relative flex items-center justify-start">
                    <input
                      type="checkbox"
                      checked={selectedOptions.step1 === option.id}
                      onChange={() => handleOptionSelect(1, option.id)}
                      className="appearance-none h-5 w-5 border border-gray-300 rounded-full checked:border-blue-500 checked:bg-white focus:outline-none"
                    />
                    {selectedOptions.step1 === option.id && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                      </div>
                    )}
                  </div>
                  <span className="ml-3 text-md">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 - Only shows if step1 is selected */}
        {step >= 2 && (
          <div className={`mb-8 ${step > 2 ? "opacity-50" : ""}`}>
            <h3 className="text-md font-semibold mb-4 flex justify-center items-center">
              Das Projekt soll verwirklicht werden
            </h3>
            <div className="space-y-3">
              {step2Options.map((option) => (
                <label key={option.id} className="flex items-center justify-start p-3 hover:bg-gray-50 cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={selectedOptions.step2 === option.id}
                      onChange={() => handleOptionSelect(2, option.id)}
                      className="appearance-none h-5 w-5 border border-gray-300 rounded-full checked:border-blue-500 checked:bg-white focus:outline-none relative"
                    />
                    {selectedOptions.step2 === option.id && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                      </div>
                    )}
                  </div>
                  <span className="ml-3">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 3 - Message */}
        {step >= 3 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center">
              Bitte beschreiben Sie Ihr Vorhaben
            </h3>
            <textarea
              value={selectedOptions.message}
              onChange={(e) =>
                setSelectedOptions((prev) => ({
                  ...prev,
                  message: e.target.value,
                }))
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={5}
              placeholder="Bitte beschreiben Sie Ihr Anliegen..."
              required
            />
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between">
          {step < 3 ? (
            <button></button>
          ) : (
            <button
              onClick={handleSubmit}
              type="submit"
              className="px-4 py-2 bg-[var(--quinary)] text-white rounded-lg hover:bg-[var(--primary)] ml-auto w-full"
            >
              Absenden
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
