import React from 'react';

const CurrentDate = () => {
  // Get the current date
  const currentDate = new Date();

  // Helper function to get the ordinal suffix for a day
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return 'ST';
      case 2: return 'ND';
      case 3: return 'RD';
      default: return 'TH';
    }
  };

  // Get the day of the week
  const weekdays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  const dayOfWeek = weekdays[currentDate.getDay()];

  // Get the month
  const months = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ];
  const month = months[currentDate.getMonth()];

  // Get the day of the month with ordinal suffix
  const dayOfMonth = currentDate.getDate();
  const dayWithSuffix = `${dayOfMonth}${getOrdinalSuffix(dayOfMonth)}`;

  // Format the date
  const formattedDate = `${dayOfWeek}, ${month} ${dayWithSuffix}`;

  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  );
};

export default CurrentDate;
