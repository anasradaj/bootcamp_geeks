import React from 'react';

function FormComponent(props) {
  const { data, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1em', maxWidth: 400, border: '1px solid #0e0303', padding: '2em' }}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={data.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={data.lastName}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={data.age}
        onChange={handleChange}
      />
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={data.gender === 'male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label style={{ marginLeft: '1em' }}>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={data.gender === 'female'}
            onChange={handleChange}
          />
          Female
        </label>
      </div>
      <div>
        <label>Destination: </label>
        <select name="destination" value={data.destination} onChange={handleChange}>
          <option value="">-- Choose --</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
          <option value="France">France</option>
        </select>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={data.lactoseFree === 'on'}
            onChange={handleChange}
          />
          Lactose Free
        </label>
      </div>
      <button type="submit">Submit</button>
      <div style={{ marginTop: '1em' }}>
        <strong>Entered Info:</strong>
        <pre>first name : {data.firstName}</pre><pre>last name : {data.lastName}</pre><pre>age : {data.age}</pre><pre>gender : {data.gender}</pre><pre>destination : {data.destination}</pre><pre>lactose free : {data.lactoseFree}</pre>
      </div>
    </form>
  );
}

export default FormComponent;
