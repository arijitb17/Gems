"use client"
import React, { useState } from 'react';

const Gemr: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [birthdate, setBirthdate] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [hour, setHour] = useState<string>('');
  const [minute, setMinute] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [placeOfBirth, setPlaceOfBirth] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const [chartStyle, setChartStyle] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Example: Form data handling (you might want to send this data to a server)
    console.log({
      name,
      birthdate,
      email,
      phone,
      gender,
      hour,
      minute,
      country,
      placeOfBirth,
      budget,
      chartStyle,
    });
    setMessage(`Thank you ${name} for your submission! We will get back to you with gemstone recommendations.`);
  };

  const hoursArray = Array.from({ length: 24 }, (_, index) => index);
  const minutesArray = Array.from({ length: 60 }, (_, index) => index);

  return (
    <div className="max-w-screen-xl mx-auto p-4 flex justify-center">
      <div className="flex flex-col w-full lg:flex-row">
        <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg mb-8 lg:mr-8 lg:mb-0">
          <h1 className="text-3xl font-bold mb-4 text-black">Gem Recommendation Form</h1>
          <p className="text-lg text-black mb-8">
            Complete the form below to receive personalized gemstone recommendations.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
                Birth Date:
              </label>
              <input
                type="date"
                id="birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50  text-gray-900"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone:
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender:
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-900"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="hour" className="block text-sm font-medium text-gray-700">
                Time of Birth:
              </label>
              <div className="flex space-x-2">
                <select
                  id="hour"
                  value={hour}
                  onChange={(e) => setHour(e.target.value)}
                  className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 z-10  text-gray-900"
                  required
                >
                  <option value="">Hour</option>
                  {hoursArray.map((hour) => (
                    <option key={hour} value={hour}>
                      {hour}
                    </option>
                  ))}
                </select>
                <select
                  id="minute"
                  value={minute}
                  onChange={(e) => setMinute(e.target.value)}
                  className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 z-10  text-gray-900"
                  required
                >
                  <option value="">Minute</option>
                  {minutesArray.map((minute) => (
                    <option key={minute} value={minute}>
                      {minute}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country:
              </label>
              <input
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="placeOfBirth" className="block text-sm font-medium text-gray-700">
                Place of Birth:
              </label>
              <input
                type="text"
                id="placeOfBirth"
                value={placeOfBirth}
                onChange={(e) => setPlaceOfBirth(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                Budget:
              </label>
              <input
                type="text"
                id="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="chartStyle" className="block text-sm font-medium text-gray-700">
                Chart Style:
              </label>
              <select
                id="chartStyle"
                value={chartStyle}
                onChange={(e) => setChartStyle(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-900"
                required
              >
                <option value="">Select Chart Style</option>
                <option value="traditional">Traditional</option>
                <option value="modern">Modern</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-teal-500 hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
          <p className="mt-4 text-gray-700 italic">{message}</p>
        </div>

        <div className="flex items-center justify-center max-w-md mx-auto p-4 lg:w-1/2">
          <div className="w-full">
            <div style={{ height: '300px' }} className="aspect-w-16 aspect-h-9">
              <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            </div>
                            <p className="mt-5 text-center text-gray-700">
                              This video explains how gemstones are recommended based on astrological charts.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                };
                
                export default Gemr;
                
