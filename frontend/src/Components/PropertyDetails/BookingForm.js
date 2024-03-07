import React, { useState } from 'react'
import moment from "moment";
import { DatePicker, Space } from "antd";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const BookingForm = ({ price, propertyName, address, maximumGuest, propertyId, currentBookings }) => {
  const [paymentData, setPaymentData] = useState({})
  const [userData, setUserData] = useState({})
  const { RangePicker } = DatePicker
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDateChange = (value, dateString) => {
    handleFilterChange("checkinDate", dateString[0]);
    handleFilterChange("checkoutDate", dateString[1]);

    const calculatedNights = moment(dateString[1], "YYYY-MM-DD").diff(
      moment(dateString[0], "YYYY-MM-DD"),
      "days"
    )
    const calculatedTotalPrice = price * calculatedNights;
    handleFilterChange("nights", calculatedNights)
    handleFilterChange("totalPrice", calculatedTotalPrice)
  }

  let disabledDates = [];
  currentBookings.forEach((dates) =>
    disabledDates.push({ start: dates.fromDate, end: dates.toDate })
  );

  const isDateDisabled = (current) => {
    if (!disabledDates.length) {
      return current.isBefore(Date.now(), "day")
    } else {
      return disabledDates.some((date) => {
        const startDate = new Date(date.start)
        const endDate = new Date(date.end).setHours(23, 59, 59, 999)
        const currentDate = new Date(current)
        return (current.isBefore(Date.now(), "day") || (current >= startDate && currentDate <= endDate))
      })
    }
  }

  const handleFilterChange = (keyname, value) => {
    setPaymentData((prevData) => ({
      ...prevData,
      [keyname]: value,
    }));
  }

  return (
    <div>

    </div>
  )
}

export default BookingForm
