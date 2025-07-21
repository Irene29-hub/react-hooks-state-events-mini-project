import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // Filter out "All" category if it exists in the categories array
  const filteredCategories = categories.filter(category => category !== "All");
  const initialCategory = filteredCategories.length > 0 ? filteredCategories[0] : "";
  
  const [formData, setFormData] = useState({
    text: "",
    category: initialCategory
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(formData);
    setFormData({
      text: "",
      category: initialCategory
    });
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={formData.text} 
          onChange={handleChange} 
        />
      </label>
      <label>
        Category
        <select 
          name="category" 
          value={formData.category} 
          onChange={handleChange}
        >
          {categories.filter(category => category !== "All").map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
