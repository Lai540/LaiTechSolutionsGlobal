import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react"; // Using lucide X icon for consistency

const WhatsAppChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const phoneNumber = "254111700506"; // Your WhatsApp number

  const options = [
    "Hello 👋, I need more info about your services.",
    "Can you help me with Web Development?",
    "Do you provide Graphic Design services?",
    "I want to know about your pricing 💰",
  ];

  const handleSend = () => {
    const finalMessage = selectedOption || message;
    if (finalMessage.trim() !== "") {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
      window.open(url, "_blank");
      setMessage("");
      setSelectedOption("");
      setIsOpen(false);
    }
  };

  return (
    <div>
      {/* Floating WhatsApp Button */}
      <div
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer animate-bounce hover:scale-110 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaWhatsapp size={28} />
      </div>

      {/* Popup Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white shadow-2xl rounded-2xl overflow-hidden border">
          {/* Header with Close Button */}
          <div className="bg-green-500 text-white px-4 py-2 font-bold flex justify-between items-center">
            <span>LaiTech Solutions Support 💬</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-red-500 transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Options */}
          <div className="p-3 space-y-2 max-h-40 overflow-y-auto">
            {options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setSelectedOption(opt)}
                className={`w-full text-left p-2 rounded-lg border transition ${
                  selectedOption === opt
                    ? "bg-green-100 border-green-500"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Input box */}
          <div className="border-t flex items-center p-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={selectedOption || message}
              onChange={(e) => {
                setMessage(e.target.value);
                setSelectedOption("");
              }}
              className="flex-1 p-2 text-sm outline-none"
            />
            <button
              onClick={handleSend}
              className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppChatbot;
