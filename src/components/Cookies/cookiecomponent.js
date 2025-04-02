"use client";
import { useState, useEffect } from "react";
import { setCookie, getCookie } from "cookies-next";
import TagManager from "react-gtm-module";
import CookieDetails from "./cookieItem";

// cookieData.js
export const cookieServices = {
  functional: {
    googleMaps: {
      title: "Google Maps",
      description: "Enables embedding of interactive maps on our website.",
      purpose:
        "Google Maps enables the embedding of maps directly into websites to enhance the website. This requires processing the user’s IP-address and metadata. Cookies or cookie-like technologies can be stored and read. These can contain personal data and technical data like user ID, consent, settings of the map viewer and security tokens. This data can be used to collect visited websites, detailed statistics about user behavior, and it can be used to improve the services of Google. This data may be linked by Google to the data of users logged in on the websites of Google (e.g. google.com and youtube.com). Google provides personal information to their affiliates and other trusted businesses or persons to process it for them, based on Google's instructions and in compliance with Google's privacy policy.",
      provider: "Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland",
      contact: {
        phone: "+1 650 253 0000",
        email: "dpo-google@google.com",
        privacy: "https://policies.google.com/privacy",
      },
      cookies: [
        { name: "NID", type: "HTTP Cookie", duration: "6 months" },
        { name: "__Secure-3PSIDCC", type: "HTTP Cookie", duration: "1 year" },
        { name: "__Secure-1PSIDCC", type: "HTTP Cookie", duration: "1 year" },
        { name: "SIDCC", type: "HTTP Cookie", duration: "1 year" },
        { name: "__Secure-3PAPISID", type: "HTTP Cookie", duration: "13 months" },
        { name: "SSID", type: "HTTP Cookie", duration: "13 months" },
        { name: "__Secure-1PAPISID", type: "HTTP Cookie", duration: "13 months" },
        { name: "__Secure-3PSID", type: "HTTP Cookie", duration: "13 months" },
        { name: "__Secure-1PSID", type: "HTTP Cookie", duration: "13 months" },
        { name: "SID", type: "HTTP Cookie", duration: "13 months" },
        { name: "SAPISID", type: "HTTP Cookie", duration: "13 months" },
        { name: "APISID", type: "HTTP Cookie", duration: "13 months" },
        { name: "CONSENT", type: "HTTP Cookie", duration: "13 months" },
        { name: "__Secure-ENID", type: "HTTP Cookie", duration: "13 months" },
        { name: "_c;;i", type: "Local Storage", duration: "No expiry" },
        { name: "LH;;s-*", type: "Local Storage", duration: "No expiry" },
        { name: "sb_wiz.zpc.gws-wiz.", type: "Local Storage", duration: "No expiry" },
        { name: "sb_wiz.ueh", type: "Local Storage", duration: "No expiry" },
      ],
      dataProcessing: {
        countries: [
          { name: "Vereinigte Staaten", sub: "A" },
          { name: "Australien" },
          { name: "Brasilien" },
          { name: "KanadaA", sub: "A" },
          { name: "Chile" },
          { name: "Hong Kong" },
          { name: "Indien" },
          { name: "Indonesien" },
          { name: "Israel", sub: "A" },
          { name: "Japan", sub: "A" },
          { name: "Korea", sub: "A" },
          { name: "Katar" },
          { name: "Singapur" },
          { name: "Schweiz", sub: "A" },
          { name: "Taiwan" },
          { name: "Vereinigtes Königreich", sub: "A" },
        ],
        mechanisms: [{ name: "Angemessenheitsbeschluss", sub: "A" }],
      },
    },
    googleTagManager: {
      title: "Google Tag Manager",
      description: "Manages tags and scripts on our website.",
      purpose: "Service for managing tags triggered by specific events.",
      provider: "Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland",
      contact: {
        phone: "+1 650 253 0000",
        email: "dpo-google@google.com",
        privacy: "https://policies.google.com/privacy",
      },
      dataProcessing: {
        countries: [
          { name: "Vereinigte Staaten", sub: "A" },
          { name: "Australien", sub: "B" },
          { name: "Brasilien", sub: "B" },
          { name: "KanadaA", sub: "A" },
          { name: "Chile", sub: "B" },
          { name: "Hong Kong", sub: "B" },
          { name: "Indien", sub: "B" },
          { name: "Indonesien", sub: "B" },
          { name: "Israel", sub: "A" },
          { name: "Japan", sub: "A" },
          { name: "Korea", sub: "A" },
          { name: "Katar", sub: "B" },
          { name: "Singapur", sub: "B" },
          { name: "Schweiz", sub: "A" },
          { name: "Taiwan", sub: "B" },
          { name: "Vereinigtes Königreich", sub: "A" },
        ],
        mechanisms: [
          { name: "Angemessenheitsbeschluss", sub: "A" },
          { name: "StandardvertragsklauselnB", sub: "B" },
        ],
      },
    },
  },
  statistics: {
    googleAnalytics: {
      title: "Google Analytics",
      description: "Provides detailed statistics about user behavior on the website.",
      purpose:
        "Google Analytics creates detailed statistics about user behavior on the website, including the processing of IP address and metadata, which can help determine a user's country, city, and language. It tracks page views, time spent on pages, device usage, and more.",
      provider: "Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland",
      contact: {
        phone: "+353 1 543 1000",
        email: "dpo-google@google.com",
        privacy: "https://policies.google.com/privacy",
      },
      cookies: [
        { name: "_ga", type: "HTTP Cookie", duration: "24 months" },
        { name: "_ga_*", type: "HTTP Cookie", duration: "24 months" },
      ],
      dataProcessing: {
        countries: [
          { name: "Vereinigte Staaten", sub: "A" },
          { name: "Australien", sub: "B" },
          { name: "Brasilien", sub: "B" },
          { name: "KanadaA", sub: "A" },
          { name: "Chile", sub: "B" },
          { name: "Hong Kong", sub: "B" },
          { name: "Indien", sub: "B" },
          { name: "Indonesien", sub: "B" },
          { name: "Israel", sub: "A" },
          { name: "Japan", sub: "A" },
          { name: "Korea", sub: "A" },
          { name: "Katar", sub: "B" },
          { name: "Singapur", sub: "B" },
          { name: "Schweiz", sub: "A" },
          { name: "Taiwan", sub: "B" },
          { name: "Vereinigtes Königreich", sub: "A" },
        ],
        mechanisms: [
          { name: "Angemessenheitsbeschluss", sub: "A" },
          { name: "StandardvertragsklauselnB", sub: "B" },
        ],
      },
    },
  },
  marketing: {
    googleAds: {
      title: "Google Ads",
      description: "Tracks conversions and enables remarketing for Google Ads campaigns.",
      purpose:
        "Google Ads Conversion Tracking tracks the conversion rate and success of Google Ads campaigns, using cookies to differentiate users and track their behavior. It also enables remarketing, displaying targeted ads to users who have already interacted with a Google Ads ad.",
      provider: "Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland",
      contact: {
        phone: "+1 650 253 0000",
        email: "dpo-google@google.com",
        privacy: "https://policies.google.com/privacy",
      },
      cookies: [
        { name: "test_cookie", type: "HTTP Cookie", duration: "1 day" },
        { name: "IDE", type: "HTTP Cookie", duration: "1 year" },
        { name: "CONSENT", type: "HTTP Cookie", duration: "18 years" },
        { name: "1P_JAR", type: "HTTP Cookie", duration: "1 month" },
        { name: "_gcl_au", type: "HTTP Cookie", duration: "3 months" },
      ],
      dataProcessing: {
        countries: [
          { name: "Vereinigte Staaten", sub: "A" },
          { name: "Australien", sub: "B" },
          { name: "Brasilien", sub: "B" },
          { name: "KanadaA", sub: "A" },
          { name: "Chile", sub: "B" },
          { name: "Hong Kong", sub: "B" },
          { name: "Indien", sub: "B" },
          { name: "Indonesien", sub: "B" },
          { name: "Israel", sub: "A" },
          { name: "Japan", sub: "A" },
          { name: "Korea", sub: "A" },
          { name: "Katar", sub: "B" },
          { name: "Singapur", sub: "B" },
          { name: "Schweiz", sub: "A" },
          { name: "Taiwan", sub: "B" },
          { name: "Vereinigtes Königreich", sub: "A" },
        ],
        mechanisms: [
          { name: "Angemessenheitsbeschluss", sub: "A" },
          { name: "StandardvertragsklauselnB", sub: "B" },
        ],
      },
    },
  },
};

export default function CookieBanner({ forceShow = false, onClose }) {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-MTT7LVDC",
    };
    TagManager.initialize(tagManagerArgs); // Make sure this is initialized here
  }, []);
  const [showBanner, setShowBanner] = useState(forceShow);
  const [expandedSections, setExpandedSections] = useState({
    functional: false,
    statistics: false,
    marketing: false,
  });
  const [expandedServices, setExpandedServices] = useState({});
  const [consent, setConsent] = useState({
    essential: true,
    functional: false,
    statistics: false,
    marketing: false,
    // Individual services
    googleMaps: false,
    googleTagManager: false,
    googleAnalytics: false,
    googleAds: false,
  });

  useEffect(() => {
    if (!getCookie("cookieConsent")) {
      setShowBanner(true);
    }
  }, []);

  useEffect(() => {
    // Update category consent based on individual services
    setConsent((prev) => ({
      ...prev,
      functional: prev.googleMaps && prev.googleTagManager,
      statistics: prev.googleAnalytics,
      marketing: prev.googleAds,
    }));
  }, [consent.googleMaps, consent.googleTagManager, consent.googleAnalytics, consent.googleAds]);

  const handleAcceptAll = () => {
    const newConsent = {
      essential: true,
      functional: true,
      statistics: true,
      marketing: true,
      googleMaps: true,
      googleTagManager: true,
      googleAnalytics: true,
      googleAds: true,
    };
    setConsent(newConsent);
    saveConsent(newConsent);
  };

  const handleAcceptSelected = () => {
    saveConsent(consent);
  };

  const handleRejectAll = () => {
    const newConsent = {
      essential: true,
      functional: false,
      statistics: false,
      marketing: false,
      googleMaps: false,
      googleTagManager: false,
      googleAnalytics: false,
      googleAds: false,
    };
    setConsent(newConsent);
    saveConsent(newConsent);
  };

  useEffect(() => {
    if (consent.googleAnalytics) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-X914LD3K1V";
      document.body.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-X914LD3K1V");

      gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  }, [consent.googleAnalytics]);
  const handleClose = () => {
    setShowBanner(false);
    if (onClose) onClose(); // Notify parent to reset forceShow
  };
  const saveConsent = (consentState) => {
    setCookie("cookieConsent", JSON.stringify(consentState), {
      maxAge: 60 * 60 * 24 * 365,
    });
    setShowBanner(false);
    handleClose();

    if (consentState.functional) {
      TagManager.initialize({
        gtmId: "GTM-MTT7LVDC",
        dataLayer: { event: "consent_given" },
      });
    }

    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: consentState.googleAnalytics ? "granted" : "denied",
      });
    }
  };

  const toggleConsent = (category) => {
    setConsent((prev) => {
      const newConsent = { ...prev };

      if (category === "functional") {
        const newValue = !prev.functional;
        newConsent.functional = newValue;
        newConsent.googleMaps = newValue;
        newConsent.googleTagManager = newValue;
      } else if (category === "statistics") {
        const newValue = !prev.statistics;
        newConsent.statistics = newValue;
        newConsent.googleAnalytics = newValue;
      } else if (category === "marketing") {
        const newValue = !prev.marketing;
        newConsent.marketing = newValue;
        newConsent.googleAds = newValue;
      } else {
        // Individual service toggle
        newConsent[category] = !prev[category];
      }

      return newConsent;
    });
  };

  const toggleCategoryDetails = (category) => {
    setExpandedSections((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const toggleServiceDetails = (service) => {
    setExpandedServices((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

  if (!forceShow && !showBanner) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm" />
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <div className="w-[900px] max-w-[90vw] h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Cookie Settings</h2>
            <p className="text-gray-600 mt-2">
              We use cookies to enhance your experience. Choose which cookies you allow.
            </p>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Essential Cookies */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={consent.essential}
                    disabled
                    className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="font-medium text-gray-900">Essential Cookies</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 ml-8">Required for basic site functionality. Cannot be disabled.</p>
            </div>

            {/* Functional Cookies */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={consent.functional}
                    onChange={() => toggleConsent("functional")}
                    className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="font-medium text-gray-900">Functional Cookies</span>
                </div>
                <button
                  onClick={() => toggleCategoryDetails("functional")}
                  className="text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  {expandedSections.functional ? "Hide details" : "Show details"}
                </button>
              </div>
              <p className="text-sm text-gray-500 ml-8">Enable features like Google Maps and Google Tag Manager.</p>

              {expandedSections.functional && (
                <>
                  {/* Google Maps */}
                  <div className="ml-8 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={consent.googleMaps}
                          onChange={() => toggleConsent("googleMaps")}
                          className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="font-medium">{cookieServices.functional.googleMaps.title}</span>
                      </div>
                      <button
                        onClick={() => toggleServiceDetails("googleMaps")}
                        className="text-sm font-medium text-blue-600 hover:text-blue-800"
                      >
                        {expandedServices.googleMaps ? "Hide details" : "Show details"}
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 ml-8">{cookieServices.functional.googleMaps.description}</p>
                    {expandedServices.googleMaps && <CookieDetails service={cookieServices.functional.googleMaps} />}
                  </div>

                  {/* Google Tag Manager */}
                  <div className="ml-8 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={consent.googleTagManager}
                          onChange={() => toggleConsent("googleTagManager")}
                          className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="font-medium">{cookieServices.functional.googleTagManager.title}</span>
                      </div>
                      <button
                        onClick={() => toggleServiceDetails("googleTagManager")}
                        className="text-sm font-medium text-blue-600 hover:text-blue-800"
                      >
                        {expandedServices.googleTagManager ? "Hide details" : "Show details"}
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 ml-8">
                      {cookieServices.functional.googleTagManager.description}
                    </p>
                    {expandedServices.googleTagManager && (
                      <CookieDetails service={cookieServices.functional.googleTagManager} />
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Statistics Cookies */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={consent.statistics}
                    onChange={() => toggleConsent("statistics")}
                    className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="font-medium text-gray-900">Statistics Cookies</span>
                </div>
                <button
                  onClick={() => toggleCategoryDetails("statistics")}
                  className="text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  {expandedSections.statistics ? "Hide details" : "Show details"}
                </button>
              </div>
              <p className="text-sm text-gray-500 ml-8">Provides website usage statistics.</p>

              {expandedSections.statistics && (
                <div className="ml-8 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={consent.googleAnalytics}
                        onChange={() => toggleConsent("googleAnalytics")}
                        className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="font-medium">{cookieServices.statistics.googleAnalytics.title}</span>
                    </div>
                    <button
                      onClick={() => toggleServiceDetails("googleAnalytics")}
                      className="text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      {expandedServices.googleAnalytics ? "Hide details" : "Show details"}
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 ml-8">{cookieServices.statistics.googleAnalytics.description}</p>
                  {expandedServices.googleAnalytics && (
                    <CookieDetails service={cookieServices.statistics.googleAnalytics} />
                  )}
                </div>
              )}
            </div>

            {/* Marketing Cookies */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={consent.marketing}
                    onChange={() => toggleConsent("marketing")}
                    className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="font-medium text-gray-900">Marketing Cookies</span>
                </div>
                <button
                  onClick={() => toggleCategoryDetails("marketing")}
                  className="text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  {expandedSections.marketing ? "Hide details" : "Show details"}
                </button>
              </div>
              <p className="text-sm text-gray-500 ml-8">Enables personalized advertising.</p>

              {expandedSections.marketing && (
                <div className="ml-8 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={consent.googleAds}
                        onChange={() => toggleConsent("googleAds")}
                        className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="font-medium">{cookieServices.marketing.googleAds.title}</span>
                    </div>
                    <button
                      onClick={() => toggleServiceDetails("googleAds")}
                      className="text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      {expandedServices.googleAds ? "Hide details" : "Show details"}
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 ml-8">{cookieServices.marketing.googleAds.description}</p>
                  {expandedServices.googleAds && <CookieDetails service={cookieServices.marketing.googleAds} />}
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex justify-between items-center">
              <button
                onClick={handleRejectAll}
                className="px-6 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reject All
              </button>
              <div className="flex space-x-3">
                <button
                  onClick={handleAcceptSelected}
                  className="px-6 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Accept Selected
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2.5 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
