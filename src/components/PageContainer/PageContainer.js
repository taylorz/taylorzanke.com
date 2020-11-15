import React, { useEffect } from 'react';
import './PageContainer.scss';
import Footer from '../Footer/Footer'


const PageContainer = ({ className, children }) => {
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 500)
  }, [])
  return (
    <>
      <div className={`page-container ${className}`}>
        {children}
      </div>
      <Footer/>
    </>
  )
}

export default PageContainer