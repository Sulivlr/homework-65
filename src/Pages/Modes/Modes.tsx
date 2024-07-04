import {useParams} from 'react-router-dom';
import {useCallback, useEffect, useState} from 'react';
import {ApiPage} from '../../types';
import axiosApi from '../../axiosApi';
import Spinner from '../../components/Spinner/Spinner';

const Modes = () => {
  const params = useParams();

  const [modes, setModes] = useState<ApiPage | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchModes = useCallback(async () => {
    setIsLoading(true);
    const response = await axiosApi.get<ApiPage | null>('/pages/' + params.id + '.json');
    setModes(response.data);
    setIsLoading(false);
  }, [params.id]);

  useEffect(() => {
    void fetchModes();
  }, [fetchModes]);

  let area = <Spinner />;

  if (!isLoading && modes) {
    area = (
      <article>
        <h1>{modes.title}</h1>
        {modes.content}
      </article>
    );
  } else if (!isLoading && !modes) {
    area = (
      <h1>Not FOUND!</h1>
    );
  }

  return area;
};

export default Modes;