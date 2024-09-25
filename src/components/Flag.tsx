import { useState } from "react";

export const UNKNOWN_FLAG = "unknown";

type Props = {
  countryCode: string;
};

const Flag = ({ countryCode }: Props) => {
  const [error, setError] = useState(false);
  const src = `/flags/${error ? UNKNOWN_FLAG : countryCode.toLowerCase()}.png`;

  const onError = () => {
    setError(true);
  };

  return (
    <img
      src={src}
      alt={`${countryCode} flag`}
      onError={onError}
      width={70}
      height={50}
    />
  );
};

export default Flag;
