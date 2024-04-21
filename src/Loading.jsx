import Lottie from 'lottie-react';
import LoadingIcon from '@assets/Loading.json';

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
  };
  return (
    <div className="loading-box">
      <div className="loading">
        <Lottie options={defaultOptions} animationData={LoadingIcon} height={100} width={100} />;
      </div>
    </div>
  );
}

export default Loading;
