// CookieDetails.js
import React from "react";

const CookieDetails = ({ service }) => {
  return (
    <div className="mt-3 p-4 bg-gray-50 rounded-lg text-sm space-y-3">
      <p>
        <strong>Purpose:</strong> {service?.purpose}
      </p>

      <p className="font-medium mt-2">Provider Information:</p>
      <p>{service?.provider}</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Phone: {service?.contact.phone}</li>
        <li>Email: {service?.contact.email}</li>
        <li>
          <a
            href={service?.contact.privacy}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Privacy Policy
          </a>
        </li>
      </ul>

      {service?.cookies && (
        <>
          <p className="font-medium mt-2">Cookies Used:</p>
          <ul className="list-disc pl-5 space-y-1">
            {service?.cookies.map((cookie, index) => (
              <li key={index}>
                <strong>{cookie.name}</strong> ({cookie.type}) - {cookie.host} - {cookie.duration}
              </li>
            ))}
          </ul>
        </>
      )}

      {service?.storage && (
        <>
          <p className="font-medium mt-2">Local Storage:</p>
          <ul className="list-disc pl-5 space-y-1">
            {service?.storage.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> ({item.type}) - {item.host} - {item.duration}
              </li>
            ))}
          </ul>
        </>
      )}

      <p className="font-medium mt-2">
        Data Processing in Third Countries:
        {service?.dataProcessing?.countries?.map((country, index) => (
          <span key={index}>
            &nbsp;{country.name} {country.sub && <sup>{country.sub} </sup>} ,
          </span>
        ))}
      </p>

      <p className="font-medium mt-2">
        Security Mechanisms:
        {service?.dataProcessing?.mechanisms?.map((mechanism, index) => (
          <span key={index}>
            {mechanism.name}
            <sup>{mechanism.sub}</sup>
          </span>
        ))}
      </p>
    </div>
  );
};

export default CookieDetails;
