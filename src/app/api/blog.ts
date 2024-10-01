// pages/api/blogs.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

let blogs: Array<{ id: string; title: string; content: string; author: string; date: string }> = []; // In-memory storage for example purposes

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, content, author, date } = req.body;

    // Basic validation
    if (!title || !content || !author || !date) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new blog post
    const newBlog = {
      id: uuidv4(), // Unique ID
      title,
      content,
      author,
      date,
    };

    blogs.push(newBlog); // Add to in-memory storage
    return res.status(201).json(newBlog); // Respond with the created blog
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}