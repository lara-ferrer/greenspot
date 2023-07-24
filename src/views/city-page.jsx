import '../styles/index.scss';
import { useParams } from 'react-router-dom';

export const CityPage = () => {
  const { cityName } = useParams();

  return (
    <main>
      <h2>{cityName}</h2>
    </main>
  );
}
