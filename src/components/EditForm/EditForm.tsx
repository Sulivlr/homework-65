import React, { useState, useEffect } from "react";
import { ApiPage } from '../../types';

interface Props {
  onSubmit: (page: ApiPage) => void;
  isEdit: boolean;
  initialState?: ApiPage;
}

const emptyState: ApiPage = {
  title: "",
  content: "",
};

const EditForm: React.FC<Props> = ({ onSubmit, isEdit = false, initialState = emptyState }) => {
  const [pageMutation, setPageMutation] = useState<ApiPage>(initialState);

  useEffect(() => {
    setPageMutation(initialState);
  }, [initialState]);

  const changeContent = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPageMutation((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(pageMutation);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>{isEdit ? 'Edit' : 'Create'} Page</h4>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          className="form-control"
          onChange={changeContent}
          value={pageMutation.title}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          className="form-control"
          onChange={changeContent}
          value={pageMutation.content}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        {isEdit ? 'Update' : 'Create'}
      </button>
    </form>
  );
};

export default EditForm;
