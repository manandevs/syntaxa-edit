import React from 'react'

interface SiteLayoutProps {
    children: React.ReactNode;
}

const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
    return (
        <div>{children}</div>
    )
}

export default SiteLayout