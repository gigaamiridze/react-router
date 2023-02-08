import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import { questionType } from '../types/question';

function Question() {
  const params = useParams();
  const questionData = useLoaderData() as questionType;
  const { title, body } = questionData.data;

  return (
    <div>
      Question Page {params.questionId}
      <div>Title: {title}</div>
      <div>Body: {body}</div>
    </div>
  )
}

export default Question;
