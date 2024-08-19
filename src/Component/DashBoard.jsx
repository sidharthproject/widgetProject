import React, { useState } from "react";

const Dashboard = () => {
  const [categories, setCategories] = useState([
    {
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, name: "Widget 1", text: "Random Text 1" },
        { id: 2, name: "Widget 2", text: "Random Text 2" },
      ],
    },
  ]);

  const [newWidget, setNewWidget] = useState({ name: "", text: "" });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showPanel, setShowPanel] = useState(false);

  const addWidget = () => {
    if (!newWidget.name || !newWidget.text || !selectedCategory) return;

    setCategories(
      categories.map((category) =>
        category.name === selectedCategory
          ? {
              ...category,
              widgets: [
                ...category.widgets,
                { id: Date.now(), name: newWidget.name, text: newWidget.text },
              ],
            }
          : category
      )
    );

    setNewWidget({ name: "", text: "" });
    setShowPanel(false);  // Close panel after adding widget
  };

  const removeWidget = (categoryName, widgetId) => {
    setCategories(
      categories.map((category) =>
        category.name === categoryName
          ? {
              ...category,
              widgets: category.widgets.filter(
                (widget) => widget.id !== widgetId
              ),
            }
          : category
      )
    );
  };

  return (
    <div className="relative p-4">
      {categories.map((category, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
          <div className="grid grid-cols-2 gap-4">
            {category.widgets.map((widget) => (
              <div
                key={widget.id}
                className="p-4 border border-gray-300 rounded-lg relative"
              >
                <h3 className="text-xl">{widget.name}</h3>
                <p>{widget.text}</p>
                <button
                  onClick={() => removeWidget(category.name, widget.id)}
                  className="absolute top-2 right-2 text-red-500"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Add Widget Button */}
      <button
        onClick={() => setShowPanel(true)}
        className="bg-blue-500 text-white p-2 rounded"
      >
        + Add Widget
      </button>

      {/* Sliding Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg transform transition-transform duration-300 ${
          showPanel ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">Add a new widget</h3>
          <button
            onClick={() => setShowPanel(false)}
            className="absolute top-2 right-4 text-xl"
          >
            X
          </button>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Widget Name"
              value={newWidget.name}
              onChange={(e) =>
                setNewWidget({ ...newWidget, name: e.target.value })
              }
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              placeholder="Widget Text"
              value={newWidget.text}
              onChange={(e) =>
                setNewWidget({ ...newWidget, text: e.target.value })
              }
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border p-2 w-full"
            >
              <option value="">Select Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={addWidget}
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            + Add Widget
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
