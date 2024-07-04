import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi';
import { ApiPage } from '../../types';
import EditForm from '../../components/EditForm/EditForm';
import Spinner from '../../components/Spinner/Spinner';

const Admin = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [content, setContent] = useState<ApiPage | null>(null);

  const fetchOneContent = useCallback(async () => {
    const { data: editedContent } = await axiosApi.get<ApiPage | null>(`/pages/${id}.json`);
    if (!editedContent) {
      navigate('/404', { replace: true });
    } else {
      setContent(editedContent);
    }
  }, [id, navigate]);

  useEffect(() => {
    void fetchOneContent();
  }, [fetchOneContent]);

  const updateContent = async (page: ApiPage) => {
    await axiosApi.put(`/pages/${id}.json`, page);
    navigate('/');
  };

  return (
    <div>
      {content ? (
        <EditForm onSubmit={updateContent} isEdit initialState={content} />
      ) : (
        <Spinner/>
      )}
    </div>
  );
};

export default Admin;
