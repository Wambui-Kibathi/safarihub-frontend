import { createContext, useContext, useState } from 'react'

const PaymentContext = createContext()

export const usePayment = () => useContext(PaymentContext)

export const PaymentProvider = ({ children }) => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [paymentStatus, setPaymentStatus] = useState('idle')

  const processPayment = async (data) => {
    setPaymentStatus('processing')
    // Payment logic here
    setPaymentStatus('completed')
  }

  return (
    <PaymentContext.Provider value={{ paymentMethod, paymentStatus, setPaymentMethod, processPayment }}>
      {children}
    </PaymentContext.Provider>
  )
}