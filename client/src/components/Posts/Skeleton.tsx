import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = (props) => (
  <ContentLoader
    speed={2}
    width={527}
    height={560}
    viewBox="0 0 527 560"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="20" ry="20" width="527" height="560" />
  </ContentLoader>
)

export default Skeleton