import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

export default function CustomOrderPage() {
  const [custom,setCustom] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios(`/api/entries/${id}`).then(({ data }) => setEntry(data));
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.put(`/api/entries/${entry.id}`, Object.fromEntries(new FormData(e.target)));
    navigate('/entries');
  };

  return entry ? (
    <div>
      <h1>Revise your thoughts on broccoli ...</h1>

      <form onSubmit={submitHandler} id="editEntryForm">
        <label htmlFor="title-input" className="block mar-b-1">
          Title:
          <input
            id="title-input"
            name="title"
            type="text"
            required="required"
            className="block w-100 no-outline no-border pad-1 mar-b-2"
            placeholder={entry.title}
          />
        </label>

        <label htmlFor="body-textarea" className="block mar-b-1">
          Body:
          <textarea
            id="body-textarea"
            name="body"
            className="block w-100 h-10 no-resize no-outline no-border no-resize pad-1 mar-b-2"
            placeholder={entry.body}
          />
        </label>

        <input
          type="submit"
          value="Update"
          className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline"
        />
      </form>
    </div>
  ) : (
    <h2>Loading</h2>
  );
}
