
const ShimmerCard = () => {
    return (
      <div className="shimmer-card">
        <div className="shimmer-image"></div>
        <div className="shimmer-title"></div>
        <div className="shimmer-text"></div>
        <div className="shimmer-text small"></div>
      </div>
    );
  };
export default Shimmer = () => {    
    return (
        <div className="shimmer-container">
          {Array(20)
            .fill("")
            .map((_, index) => (
              <ShimmerCard key={index} />
            ))}
        </div>
      );
}