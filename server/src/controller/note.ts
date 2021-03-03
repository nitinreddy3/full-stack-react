import express from 'express';
import Note from '../model/note';

const getNotes = async (req, res) => {
  try {
    const response = await Note.find()
    const data = await response.rows;
    res.status(200).json(data);
  } catch (err) {
    res.status(401).json({
      err
    })
  }
}

export default {
  getNotes
};