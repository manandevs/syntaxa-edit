import React from 'react'

interface FeatureLayoutProps {
    children: React.ReactNode;
}

const FeatureLayout: React.FC<FeatureLayoutProps> = ({ children }) => {
    return (
        <div>{children}</div>
    )
}

export default FeatureLayout;