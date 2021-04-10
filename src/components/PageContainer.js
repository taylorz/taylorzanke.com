import React, { useEffect } from 'react';

const PageContainer = ({ className, children }) => {
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 500)
  }, [])
  return (
    <div>
      {children}
    </div>
  )
}

export default PageContainer
