import Book from "../model/book.model.js";

export const getbook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
