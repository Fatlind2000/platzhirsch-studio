import { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({
    step1: null,
    step2: null,
    message: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", selectedOptions);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg mb-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Anfrage</h2>

      <form onSubmit={handleSubmit}>
        {/* Step 1 */}
        {step >= 1 && (
          <div className={`mb-8 ${step > 1 ? "opacity-50" : ""}`}>
            <h3 className="text-md font-semibold mb-4 flex justify-center items-center">
              Bei meiner Anfrage geht es um{" "}
            </h3>
            <div className="space-y-3">
              {step1Options.map((option) => (
                <label key={option.id} className="flex justify-center items-center p-3 hover:bg-gray-50 cursor-pointer">
                  <div className="relative flex items-center justify-center">
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
                <label key={option.id} className="flex items-center justify-center p-3 hover:bg-gray-50 cursor-pointer">
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
