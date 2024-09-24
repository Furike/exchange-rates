import { useState } from "react";

type Props = {
  countryCode: string;
};

const Flag = ({ countryCode }: Props) => {
  const [error, setError] = useState(false);
  const src = error ? "/public/vite.svg" : `/public/flags/${countryCode}.png`;

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
