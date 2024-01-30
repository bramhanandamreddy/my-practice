import React, { useState } from 'react';

const App = () => {
  const [segmentName, setSegmentName] = useState('');
  const [selectedSchema, setSelectedSchema] = useState('');
  const [addedSchemas, setAddedSchemas] = useState([]);
  const [availableSchemas, setAvailableSchemas] = useState([
    { label: 'First Name', value: 'first_name' },
    { label: 'Last Name', value: 'last_name' },
    { label: 'Gender', value: 'gender' },
    { label: 'Age', value: 'age' },
    { label: 'Account Name', value: 'account_name' },
    { label: 'City', value: 'city' },
    { label: 'State', value: 'state' },
  ]);

  const handleSaveSegment = () => {
    // Format the data and send it to the server
    const data = {
      segment_name: segmentName,
      schema: addedSchemas.map((item) => ({ [item.value]: item.label })),
    };

    // Send data to the server (Replace this with your actual API call)
    console.log('Sending data to server:', data);

    // Reset state after saving
    setSegmentName('');
    setAddedSchemas([]);
  };

  const handleAddNewSchema = () => {
    if (selectedSchema) {
      // Add the selected schema to the blue box
      setAddedSchemas([...addedSchemas, selectedSchema]);

      // Remove the selected schema from available options
      setAvailableSchemas(
        availableSchemas.filter((schema) => schema.value !== selectedSchema.value)
      );

      // Reset the selected schema
      setSelectedSchema('');
    }
  };

  const handleSchemaChange = (event) => {
    setSelectedSchema({
      label: event.target.options[event.target.selectedIndex].text,
      value: event.target.value,
    });
  };

  return (
    <div>
      <h1>Save Segment</h1>
      <button onClick={handleSaveSegment}>Save Segment</button>

      <div>
        <label>Segment Name:</label>
        <input
          type="text"
          value={segmentName}
          onChange={(e) => setSegmentName(e.target.value)}
        />
      </div>

      <div>
        <label>Add schema to segment:</label>
        <select value={selectedSchema.value} onChange={handleSchemaChange}>
          <option value="">Select Schema</option>
          {availableSchemas.map((schema) => (
            <option key={schema.value} value={schema.value}>
              {schema.label}
            </option>
          ))}
        </select>

        <button onClick={handleAddNewSchema}>+ Add new schema</button>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: 'lightblue', padding: '10px' }}>
        {addedSchemas.map((schema) => (
          <div key={schema.value}>{schema.label}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
