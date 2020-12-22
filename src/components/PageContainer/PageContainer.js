import React, { useEffect } from 'react';
import './PageContainer.scss';


const PageContainer = ({ className, children }) => {
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 500)
  }, [])
  return (
    <div className={`page-container ${className}`}>
      {children}
    </div>
  )
}

export default PageContainer