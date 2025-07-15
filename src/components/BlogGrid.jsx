import React from "react";
import "../styles/BlogGrid.css";

const blogData = [
  {
    title: "Aharbal Waterfall in Kashmir",
    tags: ["waterfall", "kashmir"],
    date: "Jul 4, 2025",
    image:
      "https://images.wanderon.in/gallery/new/2025/06/27/1751007435020-aharbal-waterfall.webp",
  },
  {
    title: "Hemis Monastery Ladakh",
    tags: ["ladakh", "monastery"],
    date: "Jul 4, 2025",
    image:
      "https://images.wanderon.in/blogs/new/2023/07/hemis-monastery-ladakh.jpg",
  },
];

// Repeat pattern for demo
const repeatedData = Array.from({ length: 20 }, (_, i) => blogData[i % 2]);

const getSpanClass = (index) => {
  const positionInRow = index % 4;
  const row = Math.floor(index / 4);

  if (row % 2 === 0) {
    // even row
    return positionInRow === 0 ? "span-2" : "span-1";
  } else {
    // odd row
    return positionInRow === 3 ? "span-2" : "span-1";
  }
};

const BlogGrid = () => {

  return (
    <>
    <div className="blog-wrapper">
      {repeatedData.map((blog, index) => (
        <div
          key={index}
          className={`blog-card ${getSpanClass(index)}`}
          style={{ backgroundImage: `url(${blog.image})` }}
        >
          <div className="blog-content">
            <div className="blog-title">{blog.title}</div>
            <div className="blog-tags">
              {blog.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
            <div className="blog-date">{blog.date}</div>
          </div>
        </div>
      ))}
    </div>
    </> 
  );
};


export default BlogGrid;
