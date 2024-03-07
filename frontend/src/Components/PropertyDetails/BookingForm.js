import React, { useState } from 'react'
import moment from "moment";
import { DatePicker, Space } from "antd";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const BookingForm = ({ price, propertyName, address, maximumGuest, propertyId, currentBooking }) => {
  const [paymentData, setPaymentData] = useState({})
  const [userData, setUserData] = useState({})
  const { RangePicker } = DatePicker
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDateChange = (value, dateString) => {
    handleFilterChange("checkinDate", dateString[0]);
    handleFilterChange("checkoutDate", dateString[1]);
  }

  return (
    <div>

    </div>
  )
}

export default BookingForm
