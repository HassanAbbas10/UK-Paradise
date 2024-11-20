import { useState } from 'react';

const countries = [
  { code: 'GB', flag: '🇬🇧', dialCode: '+44' },
  { code: 'US', flag: '🇺🇸', dialCode: '+1' },
];

const MailingList = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Join our Mailing List</h1>
      
      {/* Using clip-path to create the angled corner */}
      <div className="relative bg-[#2196f3] rounded-lg shadow-xl overflow-hidden" 
           style={{ 
             clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 15%)'
           }}>
        <div className="p-8">
          <p className="text-center text-xl mb-10 font-light text-white">
            Exclusive offers, competitions and<br />winner updates delivered direct to your inbox!
          </p>

          <form className="space-y-6 max-w-3xl mx-auto">
            <div className="space-y-2">
              <label className="block text-white text-sm mb-2">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="w-full px-4 py-3 rounded-md text-gray-800"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#2196f3] text-white px-8 py-1.5 rounded-full border border-white hover:bg-blue-600 transition-colors"
                >
                  SIGN UP
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-white text-sm mb-2">Phone Number</label>
              <div className="relative">
                <div 
                  className="absolute left-0 top-0 h-full flex items-center gap-2 cursor-pointer bg-white rounded-l-md px-3 border-r border-gray-200"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span>{selectedCountry.flag}</span>
                  <span className="text-gray-600">▾</span>
                </div>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg z-10">
                    {countries.map((country) => (
                      <div
                        key={country.code}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800 flex items-center gap-2"
                        onClick={() => {
                          setSelectedCountry(country);
                          setIsDropdownOpen(false);
                        }}
                      >
                        <span>{country.flag}</span>
                        <span>{country.dialCode}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <input
                  type="tel"
                  placeholder="Enter your phone number..."
                  className="w-full pl-16 pr-4 py-3 rounded-md text-gray-800"
                />
              </div>
            </div>

            <p className="text-xs text-center mt-8 leading-relaxed text-white opacity-90">
              By submitting this form and signing up for texts, you consent to receive marketing text messages (e.g. promos, cart reminders) from 
              Prize Paradise at the number provided, including messages sent by autodialer. Consent is not a condition of purchase. Msg & data 
              rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP or clicking the unsubscribe link (where available).
            </p>

            <div className="text-center text-sm text-white">
              <a href="/privacy" className="hover:underline">Privacy Policy</a>
              {' & '}
              <a href="/terms" className="hover:underline">Terms</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MailingList;